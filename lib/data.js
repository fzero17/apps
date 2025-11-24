export const apps = [
  // {
  //   slug: 'pixel-perfect-pro',
  //   title: 'Pixel Perfect Pro',
  //   short: 'The ultimate photo editor for creators.',
  //   description: `Pixel Perfect Pro is designed for creatives who demand precision and power. Whether you're a professional photographer, a passionate hobbyist, or a graphic designer, our app provides a comprehensive suite of tools to bring your vision to life. From advanced color grading and retouching to intricate layer management and batch processing, Pixel Perfect Pro streamlines your workflow.`,
  //   icon: '/images/icon1.svg',
  //   cardImage: '/images/s1.svg',
  //   screenshots: ['/images/s1.svg','/images/s2.svg','/images/s3.svg'],
  //   whatsNew: [
  //     'Introducing AI Sky Replacement for one-click edits.',
  //     'New advanced Healing Brush for precise object removal.',
  //     'Performance improvements for faster RAW file processing.'
  //   ],
  //   rating: 4.8,
  //   reviewsCount: 1283,
  //   hero: {
  //     badge: 'Creative Tools Suite',
  //     tagline: 'Edit at the speed of inspiration.',
  //     description: [
  //       'Pixel Perfect Pro turns complex retouching into fluid, keyboard-driven gestures, letting you stay in creative flow from shot to share.',
  //       'Hold a single shortcut to surface adaptive sliders, smart masks, and instant previews built for high-volume photo teams.'
  //     ],
  //     ctas: [
  //       { label: 'Download on the App Store', href: '#', kind: 'primary' },
  //       { label: 'Watch Live Demo', href: '#', kind: 'ghost' }
  //     ]
  //   },
  //   featureSections: [
  //     {
  //       id: 'keyboard-driven',
  //       title: 'Instant adjustments without leaving the canvas',
  //       paragraphs: [
  //         'Summon adaptive adjustment panels the moment you hold the Pixel Perfect key. No window juggling, no buried sliders—just the controls you need, right where you expect them.',
  //         'Assign letters to your favorite tools so curves, color balance, and lens corrections are a keystroke away.'
  //       ],
  //       bullets: [
  //         'Hold-and-tweak overlays for exposure, color, and contrast',
  //         'Preview before/after in place with pressure-sensitive glide',
  //         'Switch between variants instantly to compare client edits'
  //       ],
  //       image: '/images/s1.svg',
  //       imageAlt: 'Layer adjustments floating over a hero landscape photo',
  //       align: 'right'
  //     },
  //     {
  //       id: 'smart-library',
  //       title: 'Smart collections that stay in sync with your workflow',
  //       paragraphs: [
  //         'Pin curated collections to static slots so client sets are always one shortcut away. Need fresh inspiration? Build dynamic groups filtered by camera body, lens, or edit progress.',
  //         'Pixel Perfect learns which projects you revisit and floats them to the top of your library view.'
  //       ],
  //       image: '/images/s2.svg',
  //       imageAlt: 'Organized photo collections with smart filters',
  //       align: 'left'
  //     },
  //     {
  //       id: 'presentation',
  //       title: 'Share-ready galleries in a single keystroke',
  //       paragraphs: [
  //         'Switch to presenter mode to deliver live reviews with cinematic transitions and keyboard navigation.',
  //         'Export layered assets, web-friendly sets, and client previews without leaving the timeline.'
  //       ],
  //       bullets: [
  //         'Create branded review links for stakeholders',
  //         'Generate before/after diptychs automatically',
  //         'Send retouched sets directly to cloud storage'
  //       ],
  //       image: '/images/s3.svg',
  //       imageAlt: 'Gallery presentation view for client delivery',
  //       align: 'right'
  //     }
  //   ],
  //   faq: [
  //     {
  //       question: 'Does Pixel Perfect Pro work with RAW files from my camera?',
  //       answer: 'Yes. Pixel Perfect Pro supports RAW imports from all major camera vendors. Profiles are optimized on install and you can add custom LUTs for specialty gear.'
  //     },
  //     {
  //       question: 'Can multiple editors collaborate on the same project?',
  //       answer: 'Use shared workspaces to invite teammates, lock edits while you refine layers, and sync presets across the studio. Activity history makes handoffs effortless.'
  //     },
  //     {
  //       question: 'Does the keyboard workflow require special hardware?',
  //       answer: 'No additional hardware is needed. You can map the Pixel Perfect shortcut to any modifier combo or keep the default option tailored for full-size keyboards.'
  //     }
  //   ],
  //   info: {
  //     seller: 'Creative Labs Inc.',
  //     size: '256.4 MB',
  //     category: 'Photo & Video',
  //     compatibility: 'Requires macOS 12.0 or later.',
  //     languages: 'English, Spanish, French, German, Japanese'
  //   }
  // },
  {
    slug: 'openfolder',
    title: 'OpenFolder',
    short: 'Two taps to open your favorite files on macOS.',
    description: `OpenFolder keeps your most-used files, folders, and apps within reach. Pop the glass-like panel from the menu bar, tap a favorite, and launch instantly without breaking focus.`,
    icon: '/images/openfolder/app-logo.png',
    cardImage: '/images/openfolder/openfolder1.png',
    platform: 'macOS',
    screenshots: [
      '/images/openfolder/openfolder1.png',
      '/images/openfolder/openfolder2.png',
      '/images/openfolder/openfolder3.png'
    ],
    hero: {
      badge: 'macOS menu bar utility',
      tagline: 'Two taps to open your favorite files.',
      description: [
        'OpenFolder keeps your most-used files and apps within reach. One menu bar icon. Zero friction.',
        'Available now on the Mac App Store with a glassy interface shaped for focus.'
      ],
      ctas: [
        {
          label: 'Get on the App Store',
          href: 'https://apps.apple.com/app/openfolder/id6753940577?l=en-GB&mt=12',
          kind: 'primary',
          image: '/images/macappstore.svg'
        }
      ]
    },
    featureSections: [
      {
        id: 'instant-launch',
        title: 'Launch favorites instantly',
        paragraphs: [
          'Reveal a curated list from the menu bar with a single tap. Open files, folders, or apps in the default or alternate app without leaving the flow.'
        ],
        bullets: [
          'Glass panel lists stay in sync with your latest additions',
          'Hold the shortcut to surface favorites anywhere in the system'
        ],
        image: '/images/openfolder/openfolder1.png',
        imageAlt: 'OpenFolder favorites panel',
        align: 'right'
      },
      {
        id: 'batch-add',
        title: 'Batch add with drag & drop',
        paragraphs: [
          'Drag files, folders, or apps into the floating panel. OpenFolder creates secure bookmarks so sandbox permissions stay intact.'
        ],
        bullets: [
          'Drop multiple items at once to populate collections',
          'No repeated permission prompts thanks to security-scoped bookmarks'
        ],
        image: '/images/openfolder/openfolder2.png',
        imageAlt: 'Adding favorites to OpenFolder',
        align: 'left'
      },
      {
        id: 'polished-preferences',
        title: 'Preferences with glass polish',
        paragraphs: [
          'A blended SwiftUI and AppKit window follows an 8pt grid so every toggle feels precise and accessible.'
        ],
        bullets: [
          'Tune alternate apps for each favorite',
          'Adjust keyboard shortcuts without losing muscle memory'
        ],
        image: '/images/openfolder/openfolder3.png',
        imageAlt: 'OpenFolder preferences window',
        align: 'right'
      }
    ],
    faq: [
      {
        question: 'How does the one-time purchase work?',
        answer: 'Purchase through the Mac App Store (or a direct license when available) to unlock every current feature and future update without extra charges.'
      },
      {
        question: 'I bought OpenFolder before it switched to subscriptions. Do I have to pay again?',
        answer: 'No. All previously paid users are automatically upgraded to the Lifetime unlock. Install the latest version and tap “Restore Purchases” if the license does not appear immediately.'
      },
      {
        question: 'What is your refund policy?',
        answer: 'App Store purchases follow Apple’s refund guidelines. Reach out through Report a Problem within 14 days. Direct licenses include a 14-day money-back guarantee via email.'
      },
      {
        question: 'What macOS versions are supported?',
        answer: 'OpenFolder supports macOS 14.0 (Sonoma) and newer, optimized for Apple silicon and Intel machines alike.'
      },
      {
        question: 'How can I get support or share feedback?',
        answer: 'Use the App Store Report a Problem flow for support or check documentation for updates and release notes.'
      }
    ]
  },
  // {
  //   slug: 'recipe-finder',
  //   title: 'Recipe Finder',
  //   short: 'Discover new recipes and create shopping lists.',
  //   description: 'Discover new recipes, save favorites, and generate shopping lists quickly.',
  //   icon: '/images/icon2.svg',
  //   screenshots: ['/images/s4.svg','/images/s5.svg']
  // }
];
