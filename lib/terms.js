export const terms = {
  openfolder: {
    updated: 'November 24, 2025',
    overview: 'These Terms of Use govern your purchase and ongoing use of OpenFolder for macOS, including any auto-renewable subscriptions or future in-app purchases that unlock functionality.',
    subscription: {
      title: 'Subscription overview',
      items: [
        'Monthly plan: OpenFolder Pro Toolkit Monthly, auto-renews every month at USD $0.49 (or local equivalent).',
        'Annual plan: OpenFolder Pro Toolkit Annual, auto-renews every 12 months at USD $3.99 (approx. 32% savings vs monthly).',
        'Lifetime purchase: OpenFolder Forever Unlock is a one-time USD $7.99 payment with no renewals.'
      ]
    },
    sections: [
      {
        title: 'Auto-renewal & billing',
        body: [
          'Payment is charged to your Apple ID at confirmation of purchase. Monthly and annual plans renew automatically unless cancelled at least 24 hours before the end of the current period.',
          'Your account is charged for renewal within 24 hours prior to the end of the current period. You can manage or cancel the subscription in your App Store account settings any time after purchase.',
          'The lifetime purchase is billed once and does not renew; reinstalling the app or restoring purchases from the same Apple ID will unlock it again.',
          'Subscription pricing may vary by region and is subject to change with 30 days notice. Current subscribers will be notified before any price increase takes effect.'
        ]
      },
      {
        title: 'Trial, refund, and cancellation policy',
        body: [
          'If a free trial is offered, any unused portion is forfeited when you purchase a subscription. Refunds for purchases made through the Mac App Store are handled by Apple via reportaproblem.apple.com.',
          'OpenFolder direct-license customers can request a refund within 14 days by contacting support with proof of purchase. Lifetime purchases follow the same refund window when bought directly.',
          'To cancel your subscription: Open the App Store on your Mac → Account → View Information → Manage Subscriptions → Select OpenFolder → Cancel Subscription. Cancellation takes effect at the end of the current billing period.',
          'After cancellation, you will retain access to Pro features until the end of your paid period. You will not be charged again unless you re-subscribe.',
          'Refund requests must comply with Apple\'s refund policy. Approval is at Apple\'s discretion and typically requires a valid reason within 90 days of purchase.'
        ]
      },
      {
        title: 'Usage terms',
        body: [
          'You may install OpenFolder on personal Macs signed in to the same Apple ID. Commercial redistribution, resale, or reverse engineering is prohibited.',
          'Configuration data is stored locally on your device only.',
          'You are responsible for maintaining the security of your Apple ID. Sharing your account credentials may result in unauthorized access to your subscription.',
          'OpenFolder is provided "as is" without warranty. We are not liable for data loss, though we make reasonable efforts to ensure data integrity.'
        ]
      },
      {
        title: 'Third-party services & SDKs',
        body: [
          'OpenFolder uses RevenueCat SDK to manage in-app purchases and subscriptions. RevenueCat generates an anonymous user ID to sync your subscription status across devices and provides subscription analytics to the developer.',
          'Payment processing is handled securely by Apple through StoreKit. RevenueCat does not process or store payment information.',
          'By using OpenFolder, you agree to RevenueCat\'s Terms of Service (https://www.revenuecat.com/terms) and Privacy Policy (https://www.revenuecat.com/privacy).',
          'No third-party analytics, advertising, or tracking SDKs are integrated into OpenFolder. The app does not use Firebase, Google Analytics, Facebook SDK, iCloud sync, or similar services.',
          'The app may check for updates using standard macOS networking APIs but does not transmit personal data during these checks.'
        ]
      },
      {
        title: 'Data collection & storage',
        body: [
          'OpenFolder stores your favorites list (file paths, folder paths, app references) locally in your Mac\'s application sandbox directory.',
          'Security-scoped bookmarks are used to maintain access to files and folders you\'ve added. These are encrypted by macOS and stored only on your local device.',
          'RevenueCat SDK collects an anonymous user ID, subscription events, and basic device information (OS version, app version) to manage subscriptions. This data is stored on RevenueCat\'s servers.',
          'No personally identifiable information (name, email, Apple ID) is collected, transmitted, or stored by OpenFolder or RevenueCat.',
          'Subscription status is verified using RevenueCat\'s API in addition to StoreKit receipts, enabling cross-device subscription access.',
          'Support emails sent to fzero17@qq.com may contain information you voluntarily provide. This data is retained only as long as needed to address your inquiry.'
        ]
      },
      {
        title: 'Data retention & deletion',
        body: [
          'Local data (favorites, preferences) persists until you uninstall OpenFolder or manually delete items within the app.',
          'Uninstalling the app removes all local data from your Mac. If iCloud sync was enabled, synced data remains in iCloud until you delete it from iCloud Settings.',
          'Support correspondence is deleted within 90 days after your inquiry is resolved, unless legal obligations require longer retention.',
          'Purchase receipts are retained by Apple according to their policies. We do not store copies of your receipts or payment information.'
        ]
      },
      {
        title: 'Changes to terms',
        body: [
          'We may update these Terms of Use from time to time. Material changes will be communicated via the app or email if you\'ve provided contact information.',
          'Continued use of OpenFolder after changes take effect constitutes acceptance of the revised terms.',
          'The most current version will always be available at our website and within the app.'
        ]
      }
    ],
    eulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
    supportEmail: 'fzero17@qq.com'
  }
};
