import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with RopeJoy Apple Watch workouts, permissions, syncing, and jump counting.',
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="We are here to help"
      title="RopeJoy Support"
      intro="Find quick answers for Apple Watch workouts, syncing, permissions, and jump counting."
    >
      <section className="support-callout">
        <span>Contact support</span>
        <h2>Tell us what happened.</h2>
        <p>Include your iPhone model, Apple Watch model, iOS and watchOS versions, RopeJoy version, and a short description of the issue.</p>
        <a className="primary-link" href="mailto:onebooksoftware@outlook.com?subject=RopeJoy%20Support">Email RopeJoy Support</a>
      </section>

      <section>
        <h2>How do I start a workout?</h2>
        <p>Open RopeJoy on Apple Watch and tap the start control. The first time, watchOS may ask for Motion &amp; Fitness and Apple Health permissions. After completing those permission prompts, tap start again to begin the countdown and workout.</p>
      </section>

      <section>
        <h2>Why does the iPhone app ask me to use Apple Watch?</h2>
        <p>Automatic jump counting uses motion sensors on Apple Watch. From the iPhone recording menu, you can either continue on Apple Watch or add a completed workout manually.</p>
      </section>

      <section>
        <h2>My workout has not appeared on iPhone</h2>
        <ol>
          <li>Keep Bluetooth and Wi-Fi enabled on both devices.</li>
          <li>Confirm that the Apple Watch is paired and RopeJoy is installed on both devices.</li>
          <li>Open RopeJoy on iPhone, then reopen RopeJoy on Apple Watch.</li>
          <li>Wait briefly after ending the workout; queued records are delivered when connectivity becomes available.</li>
        </ol>
      </section>

      <section>
        <h2>Heart rate or calories are missing</h2>
        <p>Check RopeJoy&apos;s Health permissions in the Health app and ensure the watch fits snugly. Without permission to save workouts, heart rate, calories, and background tracking may be unavailable. Keep RopeJoy in the foreground on your watch. You can read more in Profile → Apple Health &amp; HealthKit on iPhone.</p>
      </section>

      <section>
        <h2>The jump count seems inaccurate</h2>
        <p>Wear Apple Watch securely, keep your normal rope-turning motion, and avoid large unrelated wrist movements during the workout. If the issue repeats, contact support with your watch model, pace, actual jump count, and RopeJoy&apos;s displayed count.</p>
      </section>

      <section>
        <h2>How do I change my daily goal?</h2>
        <p>On iPhone, open <strong>Profile → Daily Goal</strong>. Changes sync automatically to Apple Watch when the devices can communicate.</p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>Read the complete <Link href="/privacy">RopeJoy Privacy Policy</Link> for details about local storage, Apple Health, motion data, and your choices.</p>
      </section>
    </LegalPage>
  );
}
