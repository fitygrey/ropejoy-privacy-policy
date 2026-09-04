import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How RopeJoy handles workout, motion, HealthKit, and device data.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy Policy"
      intro="RopeJoy is designed to keep your jump-rope workouts on your own Apple devices. This policy explains what the app processes and why."
    >
      <p className="effective-date">Effective date: September 5, 2026</p>

      <section>
        <h2>1. Information RopeJoy processes</h2>
        <p>RopeJoy may process the following information when you use its features:</p>
        <ul>
          <li>Workout details, including jump count, duration, jump frequency, calories, and workout time.</li>
          <li>Motion data from Apple Watch, used during a workout to recognize jump-rope movement and count jumps.</li>
          <li>Heart rate and active energy data made available by Apple Health during an authorized workout.</li>
          <li>Settings you choose, such as your daily jump goal.</li>
          <li>Workout entries you add manually on iPhone.</li>
        </ul>
      </section>

      <section>
        <h2>2. Where your data is stored</h2>
        <p>
          Workout records are stored locally on your iPhone. Records created on Apple Watch are transferred to the paired iPhone using Apple&apos;s WatchConnectivity framework. RopeJoy does not require an account and does not operate a developer-controlled cloud service for your workout history.
        </p>
      </section>

      <section>
        <h2>Local backups</h2>
        <p>Starting with version 1.0 build 2, RopeJoy marks its local workout data directories as excluded from system backups, including records waiting to sync on Apple Watch. Local records may not be recoverable after uninstalling the app or replacing your device. This setting does not manage copies already saved in Apple Health; use the Health app to manage those records.</p>
      </section>

      <section>
        <h2>3. Apple Health and HealthKit</h2>
        <p>
          With your permission, RopeJoy uses HealthKit to read heart rate and active energy during an Apple Watch workout and saves the completed jump-rope workout to Apple Health. Health data is used only to provide workout features and is not used for advertising, marketing, or sale.
        </p>
        <p>You can review or revoke Health access at any time in the Health app or iOS Settings.</p>
      </section>

      <section>
        <h2>4. Motion and fitness permission</h2>
        <p>
          RopeJoy requests motion and fitness permission when you choose to start an Apple Watch workout. Motion samples are processed on the watch to recognize jumping. If you decline, automatic jump counting may be unavailable, while other parts of the app can still be used.
        </p>
      </section>

      <section>
        <h2>5. Manual workout entries</h2>
        <p>
          Workouts added manually on iPhone are stored only in RopeJoy&apos;s local app data. They do not include heart rate and are not written to Apple Health by the current version of the app.
        </p>
      </section>

      <section>
        <h2>6. Analytics, advertising, and third parties</h2>
        <p>
          The current version of RopeJoy does not include third-party advertising, analytics, or crash-reporting SDKs. RopeJoy does not sell your personal information. Apple may process information through system services such as Apple Health and WatchConnectivity according to Apple&apos;s own privacy terms.
        </p>
      </section>

      <section>
        <h2>7. Your choices and data deletion</h2>
        <p>
          You can delete workout records inside RopeJoy, revoke permissions in system settings, or uninstall the app. Deleting RopeJoy does not automatically remove workouts already saved to Apple Health; those can be managed in the Health app.
        </p>
      </section>

      <section>
        <h2>8. Children&apos;s privacy</h2>
        <p>RopeJoy is not directed to children under 13 and does not knowingly collect personal information from children through a developer-operated service.</p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>We may update this policy as RopeJoy changes. The latest version and effective date will always be published on this page.</p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>If you have privacy questions, email <a href="mailto:onebooksoftware@outlook.com">onebooksoftware@outlook.com</a>.</p>
      </section>
    </LegalPage>
  );
}
