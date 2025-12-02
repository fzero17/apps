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
    short: 'Instant access to your files, folders, and apps from the macOS menu bar.',
    description: `Boost your productivity with OpenFolder. Access your most-used files, folders, and applications instantly from a beautiful, native macOS menu bar utility. Drag and drop to organize, launch with a click, and stay in your flow.`,
    icon: '/images/openfolder/app-logo.png',
    cardImage: '/images/openfolder/openfolder1.png',
    platform: 'macOS',
    screenshots: [
      '/images/openfolder/openfolder1.png',
      '/images/openfolder/openfolder2.png',
      '/images/openfolder/openfolder3.png'
    ],
    hero: {
      badge: 'macOS Productivity Utility',
      tagline: 'Your Mac workflow, accelerated.',
      description: [
        'Stop digging through Finder. OpenFolder puts your essential files and apps one click away in the menu bar.',
        'Designed for macOS with a native glass aesthetic. Drag, drop, and launch instantly.'
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
        title: 'Access everything in two clicks',
        paragraphs: [
          'Forget navigating deep folder structures. Pin your critical work documents, project folders, and daily apps to the menu bar for instant access.'
        ],
        bullets: [
          'Native glass panel that feels right at home on macOS',
          'Global shortcut support to open your favorites anywhere'
        ],
        image: '/images/openfolder/openfolder1.png',
        imageAlt: 'OpenFolder favorites panel',
        align: 'right'
      },
      {
        id: 'batch-add',
        title: 'Drag & Drop simplicity',
        paragraphs: [
          'Adding favorites is as easy as dragging them onto the panel. OpenFolder creates secure bookmarks so sandbox permissions stay intact.'
        ],
        bullets: [
          'Batch import files and folders instantly',
          'Secure, sandboxed, and privacy-focused design'
        ],
        image: '/images/openfolder/openfolder2.png',
        imageAlt: 'Adding favorites to OpenFolder',
        align: 'left'
      },
      {
        id: 'polished-preferences',
        title: 'Crafted for power users',
        paragraphs: [
          'Customize your experience with precision. Choose alternate apps for specific files or tweak keyboard shortcuts to match your muscle memory.'
        ],
        bullets: [
          'Set custom launch applications for any file',
          'Lightweight and optimized for Apple Silicon'
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
  {
    slug: 'aa-assistant',
    title: 'AA小助手',
    short: '出行聚会必备的智能AA分账神器，告别糊涂账。',
    description: 'AA小助手是一款专为旅行、聚会、合租设计的免费分账工具。智能算法自动计算最优转账方案，支持多场景账单管理，数据完全本地存储保护隐私。让记账更简单，让友谊更长久。',
    icon: '/images/aa-assistant/appstore.png',
    cardImage: '/images/aa-assistant/appstore.png',
    platform: 'iOS',
    screenshots: [
      '/images/aa-assistant/s1.jpg',
      '/images/aa-assistant/s2.jpg',
      '/images/aa-assistant/s3.jpg',
      '/images/aa-assistant/s4.jpg',
      '/images/aa-assistant/s5.jpg',
    ],
    hero: {
      badge: 'iOS 效率工具',
      tagline: '算账不求人，聚会更尽兴',
      description: [
        '专为结伴旅行、多人聚餐、室友合租打造的智能分账利器。',
        '一键生成清晰账单，自动计算谁该给谁多少钱。永久免费，无广告，零隐私风险。'
      ],
      ctas: [
        {
          label: 'Get on the App Store',
          href: 'https://apps.apple.com/cn/app/aa%E5%B0%8F%E5%8A%A9%E6%89%8B/id6749556847',
          kind: 'primary',
          image: '/images/macappstore.svg'
        }
      ]
    },
    featureSections: [
      {
        id: 'smart-settle',
        title: '智能算法，一键平账',
        paragraphs: [
          '只需记录每笔支出，算法自动计算最优转账路径，减少不必要的转账次数，让复杂的多人账单变得清晰明了。'
        ],
        bullets: [
          '自动生成最优结算方案',
          '直观展示总支出与人均费用'
        ],
        image: '/images/aa-assistant/s1.jpg',
        imageAlt: '智能结算界面',
        align: 'right'
      },
      {
        id: 'privacy',
        title: '离线使用，隐私无忧',
        paragraphs: [
          '无需注册登录，无需联网。所有账单数据仅保存在您的手机本地，彻底杜绝云端泄露风险，记账更安心。'
        ],
        bullets: [
          '纯本地存储，无云端同步风险',
          '即下即用，无需注册账号'
        ],
        image: '/images/aa-assistant/s2.jpg',
        imageAlt: '隐私安全说明',
        align: 'left'
      },
      {
        id: 'scenarios',
        title: '多场景灵活管理',
        paragraphs: [
          '无论是朋友结伴旅行、同事聚餐团建，还是室友分摊水电费，AA小助手都能轻松应对。支持创建多个独立账本，互不干扰。'
        ],
        bullets: [
          '支持多项目独立管理',
          '灵活添加/删除成员，支持中途加入'
        ],
        image: '/images/aa-assistant/s3.jpg',
        imageAlt: '多场景应用',
        align: 'right'
      }
    ],
    faq: [
      {
        question: '应用是免费的吗？',
        answer: '是的，核心功能永久免费，且无广告打扰。'
      },
      {
        question: '我的数据安全吗？',
        answer: '非常安全。所有数据仅存储在您的设备本地，我们不收集任何个人信息。'
      },
      {
        question: '支持哪些设备？',
        answer: '支持 iPhone 和 iPad 设备。'
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
