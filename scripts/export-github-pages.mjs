import { spawn } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const outputDirectory = path.join(projectRoot, 'pages-dist');
const clientDirectory = path.join(projectRoot, 'dist', 'client');
const basePath = '/ropejoy-privacy-policy';
const port = 8787;
const origin = `http://127.0.0.1:${port}`;

const routes = [
  { pathname: '/', output: 'index.html' },
  { pathname: '/privacy', output: 'privacy/index.html' },
  { pathname: '/support', output: 'support/index.html' },
];

function makeStatic(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, '')
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(new RegExp(`href="${basePath}/(privacy|support)"`, 'g'), 'href="' + basePath + '/$1/"');
}

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // Wrangler is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error('Timed out waiting for the production server.');
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(path.join(clientDirectory, '_next', 'static', 'css'), path.join(outputDirectory, '_next', 'static', 'css'), { recursive: true });
await cp(path.join(clientDirectory, '_next', 'static', '_vinext_fonts'), path.join(outputDirectory, '_next', 'static', '_vinext_fonts'), { recursive: true });
await cp(path.join(clientDirectory, 'favicon.svg'), path.join(outputDirectory, 'favicon.svg'));
await cp(path.join(clientDirectory, 'og.png'), path.join(outputDirectory, 'og.png'));
await writeFile(path.join(outputDirectory, '.nojekyll'), '');

const server = spawn(
  process.execPath,
  ['node_modules/wrangler/bin/wrangler.js', 'dev', '--config', 'dist/server/wrangler.json', '--port', String(port)],
  { cwd: projectRoot, stdio: ['ignore', 'pipe', 'pipe'] },
);

let serverOutput = '';
server.stdout.on('data', (chunk) => { serverOutput += chunk; });
server.stderr.on('data', (chunk) => { serverOutput += chunk; });

try {
  await waitForServer();
  for (const route of routes) {
    const response = await fetch(`${origin}${route.pathname}`);
    if (!response.ok) {
      throw new Error(`Failed to render ${route.pathname}: ${response.status}`);
    }
    const destination = path.join(outputDirectory, route.output);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, makeStatic(await response.text()));
  }
} catch (error) {
  process.stderr.write(serverOutput);
  throw error;
} finally {
  server.kill('SIGTERM');
}
