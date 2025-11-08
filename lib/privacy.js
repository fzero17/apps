export const privacyPolicies = {
  openfolder: {
    updated: 'November 8, 2025',
    platform: 'macOS',
    overview: `OpenFolder is a macOS menu bar utility designed to help you open your most-used files, folders, and apps in two taps. The app works entirely on your device and does not send personal data to external servers controlled by the developer. Purchases are fulfilled through Apple’s App Store infrastructure.`,
    sections: [
      {
        title: 'Data We Collect',
        body: [
          'OpenFolder does not collect analytics, personal identifiers, or usage metrics. All actions occur locally on your Mac.',
          'The app does not require you to create an account and never transmits content you add to your favorites list.'
        ]
      },
      {
        title: 'File & Folder Access Permissions',
        body: [
          'When you add files, folders, or apps to OpenFolder, the application asks macOS for a security-scoped bookmark so it can reopen those items later.',
          'These bookmarks are stored securely within the app’s sandbox. They are only used to launch the items you explicitly added and are never shared with the developer or third parties.'
        ]
      },
      {
        title: 'Network Activity',
        body: [
          'OpenFolder does not run background network requests other than those required by the Mac App Store licensing system.',
          'The app does not integrate third-party analytics SDKs or advertising networks.'
        ]
      },
      {
        title: 'Crash Logs & Diagnostics',
        body: [
          'If you opt in to share analytics with developers in macOS System Settings, Apple may provide anonymized crash logs. These logs do not contain personal data and are used strictly to improve stability.',
          'You can disable this sharing at any time by navigating to System Settings → Privacy & Security → Analytics & Improvements.'
        ]
      },
      {
        title: 'Support & Contact',
        body: [
          'If you contact support via email, any information you provide (such as logs or screenshots) is used solely to address your request and is deleted once assistance is complete unless further retention is required by law.',
          'Reach out at fzero17@qq.com for privacy questions or support needs.'
        ]
      },
      {
        title: 'Your Choices',
        body: [
          'You can remove stored bookmarks at any time by deleting items from your OpenFolder list. This instantly revokes the app’s access to those files or folders.',
          'Uninstalling OpenFolder removes all locally stored data, including preferences and security-scoped bookmarks.'
        ]
      }
    ]
  }
};
