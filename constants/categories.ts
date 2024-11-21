export type ToolCategories = {
  [key: string]: DeveloperTools
}

export type DeveloperTools = {
  name: string
  subcategories: Subcategory[]
}

export type Subcategory = {
  name: string
  deals: Deal[]
}

export type Deal = {
  id: string
  name: string
  description: string
  discount: string
  link: string
  logoSrc: string
  category: string
  subcategory: string
  tags: string[]
  labels: string[]
  imageSrc: string
}
export const data = {
  DeveloperTools: {
    name: "👨‍💻 Developer Tools",
    subcategories: [
      {
        name: "💻 Developer macOS Apps",
        deals: [
          {
            id: "devtools1",
            name: "DevUtils",
            description:
              "All-in-one toolbox for developers. Fully supports Apple Silicon & macOS Ventura.",
            discount: "50% OFF with code BLACKFRIDAY_2024",
            link: "https://devutils.com",
            logoSrc: "https://devutils.com/social-poster.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Developer", "macOS", "Toolbox"],
            labels: ["⭐"],
            imageSrc: "https://devutils.com/social-poster.png",
          },
          {
            id: "devtools2",
            name: "Proxyman",
            description:
              "Debug Network HTTP/HTTPS Faster like a Pro. Support macOS Sequoia, iOS, Windows, and Linux.",
            discount: "30% OFF for all plans with code BLACKFRIDAY2024",
            link: "https://proxyman.io/",
            logoSrc: "https://proxyman.io/assets/images/og-image.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Debugging", "Network", "Cross-Platform"],
            labels: ["⭐"],
            imageSrc: "https://proxyman.io/assets/images/og-image.png",
          },
          {
            id: "devtools3",
            name: "Timelines",
            description:
              "Flexible time tracking app for macOS. Supports many export formats and automatic project tracking.",
            discount: "25% OFF with code BLACKFRIDAY2024",
            link: "https://timelines.app",
            logoSrc: "https://timelines.app/assets/images/social.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Time Tracking", "macOS", "Productivity"],
            labels: ["💰"],
            imageSrc: "https://timelines.app/assets/images/social.png",
          },
          {
            id: "devtools4",
            name: "CodeRunner",
            description:
              "Run code in any language instantly. A lightweight, multi-language programming editor for macOS.",
            discount: "40% off (automatic)",
            link: "https://coderunnerapp.com",
            logoSrc: "https://coderunnerapp.com/images/social.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Code Editor", "macOS", "Programming"],
            labels: ["🤑"],
            imageSrc: "https://coderunnerapp.com/images/social.png",
          },
          {
            id: "devtools5",
            name: "SQLPro Studio",
            description:
              "A macOS application that allows you to easily manage various database types including Postgres, MySQL, SQLite, and more.",
            discount: "50% off (automatic)",
            link: "https://www.sqlprostudio.com",
            logoSrc: "https://www.sqlprostudio.com/images/social.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Database", "SQL", "macOS"],
            labels: ["🤑"],
            imageSrc: "https://www.sqlprostudio.com/images/social.png",
          },
          {
            id: "devtools6",
            name: "Pika",
            description:
              "The essential color picker for macOS. Pika makes it easy to find, adjust, and copy colors.",
            discount: "20% off with code BLACKFRIDAY2024",
            link: "https://superhighfives.com/pika",
            logoSrc: "https://superhighfives.com/pika/social.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Color Picker", "Design", "macOS"],
            labels: ["🎨"],
            imageSrc: "https://superhighfives.com/pika/social.png",
          },
          {
            id: "devtools7",
            name: "TeaCode",
            description:
              "Write code super fast. TeaCode is a text expansion app for developers, supports 80+ languages.",
            discount: "40% OFF with code BLACKFRIDAY2024",
            link: "https://www.apptorium.com/teacode",
            logoSrc: "https://www.apptorium.com/assets/teacode.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Code Expansion", "Productivity", "macOS"],
            labels: ["💰"],
            imageSrc: "https://www.apptorium.com/assets/teacode.png",
          },
          {
            id: "devtools8",
            name: "Expressions",
            description:
              "An app to play with regular expressions. It features a simple design and real-time results.",
            discount: "40% OFF with code BLACKFRIDAY2024",
            link: "https://www.apptorium.com/expressions",
            logoSrc: "https://www.apptorium.com/assets/expressions.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Regular Expressions", "Regex", "macOS"],
            labels: ["💰"],
            imageSrc: "https://www.apptorium.com/assets/expressions.png",
          },
          {
            id: "devtools9",
            name: "DeskPad",
            description:
              "Organize code snippets, terminal commands, and random pieces of text in one place.",
            discount: "40% OFF with code BLACKFRIDAY2024",
            link: "https://www.apptorium.com/deskpad",
            logoSrc: "https://www.apptorium.com/assets/deskpad.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Organization", "Code Snippets", "macOS"],
            labels: ["💰"],
            imageSrc: "https://www.apptorium.com/assets/deskpad.png",
          },
          {
            id: "devtools10",
            name: "OpenIn",
            description: "Advanced Link Opener for macOS.",
            discount: "75% off - USD 11.99 -> USD 2.99 until Dec 7th",
            link: "https://apps.apple.com/us/app/shellhistory/id1564015476",
            logoSrc:
              "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/89/7f/6f/897f6f58-0469-7f4a-7e2c-f8f3d7d53e61/source/512x512bb.jpg",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Developer macOS Apps",
            tags: ["Productivity", "Link Management", "macOS"],
            labels: ["🖥️"],
            imageSrc:
              "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/89/7f/6f/897f6f58-0469-7f4a-7e2c-f8f3d7d53e61/source/512x512bb.jpg",
          },
        ],
      },
      {
        name: "💻 Tools & Services",
        deals: [
          {
            id: "tools1",
            name: "Tailscan for Tailwind CSS",
            description:
              "The ultimate devtool browser extension for Tailwind CSS. Inspect, debug, convert and more!",
            discount: "25% OFF!",
            link: "https://tailscan.com",
            logoSrc: "https://tailscan.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Tailwind CSS", "Browser Extension", "DevTool"],
            labels: ["⭐"],
            imageSrc: "https://tailscan.com/logo.png",
          },
          {
            id: "tools2",
            name: "snappify",
            description:
              "A powerful PowerPoint alternative for developers. Create stunning presentations, smoothly animated videos and elevate your technical content!",
            discount: "30% OFF the first year with the code BF_2024",
            link: "https://snappify.com",
            logoSrc: "https://snappify.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Presentation", "Video", "Developers"],
            labels: ["⭐"],
            imageSrc: "https://snappify.com/logo.png",
          },
          {
            id: "tools3",
            name: "ScreenshotOne",
            description: "The best screenshot API for developers.",
            discount:
              "25% OFF with code BLACKFRIDAY2024 on all annual plans for the first year.",
            link: "https://screenshotone.com",
            logoSrc: "https://screenshotone.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Screenshot", "API", "Developers"],
            labels: ["📸"],
            imageSrc: "https://screenshotone.com/logo.png",
          },
          {
            id: "tools4",
            name: "HelpKit",
            description:
              "Notion to Help Center & Doc Site. Turn your Notion pages into a professional knowledge base.",
            discount: "30% OFF on all plans with code BLACKFRIDAY2024",
            link: "https://www.helpkit.so",
            logoSrc: "https://www.helpkit.so/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Notion", "Help Center", "Documentation"],
            labels: ["🛟"],
            imageSrc: "https://www.helpkit.so/logo.png",
          },
          {
            id: "tools5",
            name: "Static.app",
            description:
              "Static website hosting - One-click hosting solution for your static website.",
            discount: "30% OFF with code BLACK24",
            link: "https://static.app/",
            logoSrc: "https://static.app/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Hosting", "Static Websites", "Developers"],
            labels: ["⭐"],
            imageSrc: "https://static.app/logo.png",
          },
          {
            id: "tools6",
            name: "Pulsetic",
            description:
              "Website uptime monitoring service - Get website downtime alerts by phone call, SMS, email or Slack if your website is down.",
            discount: "30% OFF with code BLACK24",
            link: "https://pulsetic.com/",
            logoSrc: "https://pulsetic.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Uptime Monitoring", "Status Pages", "Alerts"],
            labels: ["⭐"],
            imageSrc: "https://pulsetic.com/logo.png",
          },
          {
            id: "tools7",
            name: "Guidejar",
            description:
              "Create Interactive Product Demos and Step-by-Step Guides effortlessly.",
            discount: "40% OFF on all plans with code BLACKFRIDAY24",
            link: "https://guidejar.com",
            logoSrc: "https://guidejar.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Product Demos", "Guides", "No-Code"],
            labels: ["⭐"],
            imageSrc: "https://guidejar.com/logo.png",
          },
          {
            id: "tools8",
            name: "Hoverify",
            description:
              "All-in-one browser extension with tools to enhance your web development experience.",
            discount: "30% OFF!",
            link: "https://tryhoverify.com",
            logoSrc: "https://tryhoverify.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Browser Extension", "Web Development", "Productivity"],
            labels: ["⭐"],
            imageSrc: "https://tryhoverify.com/logo.png",
          },
          {
            id: "tools9",
            name: "Small Hours",
            description:
              "AI powered automated root cause analysis - minimize downtime, maximize efficiency.",
            discount:
              "50% OFF on startup and enterprise plans with code BLACKFRIDAY24",
            link: "https://smallhours.dev",
            logoSrc: "https://smallhours.dev/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["AI", "Root Cause Analysis", "Efficiency"],
            labels: ["⭐"],
            imageSrc: "https://smallhours.dev/logo.png",
          },
          {
            id: "tools10",
            name: "Interact List",
            description: "Design and share your own styled Checklists.",
            discount: "50% off Lifetime License",
            link: "https://interactlist.com",
            logoSrc: "https://interactlist.com/logo.png",
            category: "👨‍💻 Developer Tools",
            subcategory: "💻 Tools & Services",
            tags: ["Checklists", "Design", "Productivity"],
            labels: ["✅"],
            imageSrc: "https://interactlist.com/logo.png",
          },
        ],
      },
    ],
  },
  AITools: {
    name: "🤖 AI Tools",
    subcategories: [
      {
        name: "💬 AI Chat UI",
        deals: [
          {
            id: "ai1",
            name: "TypingMind",
            description:
              "Personal AI workspace. Frontend for ChatGPT, Claude, Gemini to use with your API key. Support Artifact, Projects, Vision, Canvas, AI agents builder, DALL-E, Plugins, etc.",
            discount: "55% OFF Lifetime Premium Plan BLACKFRIDAY_2024",
            link: "https://www.typingmind.com/?utm_source=tonybf",
            logoSrc: "https://www.typingmind.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["AI Workspace", "ChatGPT", "Productivity"],
            labels: ["🧠"],
            imageSrc: "https://www.typingmind.com/logo.png",
          },
          {
            id: "ai2",
            name: "ChatHub",
            description: "Chat with multiple AI models side by side.",
            discount: "10% OFF annual subscription with code BFCM24",
            link: "https://chathub.gg/?utm_source=bf",
            logoSrc: "https://chathub.gg/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["AI Models", "Chat", "Productivity"],
            labels: ["💬"],
            imageSrc: "https://chathub.gg/logo.png",
          },
          {
            id: "ai3",
            name: "BoltAI",
            description:
              "Access all AI models in one native Mac app. Switch between top AI services and local models.",
            discount: "30% OFF with code BFCM2024",
            link: "https://boltai.com?via=awesomebf",
            logoSrc: "https://boltai.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["AI Models", "Mac App", "Productivity"],
            labels: ["⚡"],
            imageSrc: "https://boltai.com/logo.png",
          },
          {
            id: "ai4",
            name: "Kerlig™",
            description:
              "#1 Grammarly alternative. AI Writing Assistant & Chat for macOS, 350+ models, vision, attachments, presets, tones of voice.",
            discount: "10 x BF50 50% OFF and 50 x BF25 25% OFF",
            link: "https://www.kerlig.com/",
            logoSrc: "https://www.kerlig.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["Writing Assistant", "AI Chat", "macOS"],
            labels: ["✍️"],
            imageSrc: "https://www.kerlig.com/logo.png",
          },
          {
            id: "ai5",
            name: "Zen AI",
            description:
              "Automate your daily prompts with an easy-to-use workflow AI.",
            discount: "50% OFF with code BLACKFRIDAY2024",
            link: "https://design.getzenai.com/",
            logoSrc: "https://design.getzenai.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["Workflow AI", "Automation", "Productivity"],
            labels: ["⭐"],
            imageSrc: "https://design.getzenai.com/logo.png",
          },
          {
            id: "ai6",
            name: "Writers Brew AI",
            description:
              "#1 AI Writing app. An AI writing assistant app that works across your macOS.",
            discount: "Bundle upto 60% OFF",
            link: "https://writersbrew.app/",
            logoSrc: "https://writersbrew.app/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["Writing Assistant", "AI", "macOS"],
            labels: ["📝"],
            imageSrc: "https://writersbrew.app/logo.png",
          },
          {
            id: "ai7",
            name: "FridayGPT",
            description:
              "AI Copilot for your Mac. Instant access to multiple LLM models, voice-to-text and quick AI actions.",
            discount: "30% OFF with code ABFCM30",
            link: "https://fridaygpt.app/",
            logoSrc: "https://fridaygpt.app/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["AI Copilot", "macOS", "Productivity"],
            labels: ["✨"],
            imageSrc: "https://fridaygpt.app/logo.png",
          },
          {
            id: "ai8",
            name: "AI4Chat",
            description:
              "Use 100+ AI models on one platform — at a fraction of the cost.",
            discount:
              "20% OFF - Use the coupon code: BF20 to receive the discount",
            link: "https://www.ai4chat.co/",
            logoSrc: "https://www.ai4chat.co/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["AI Models", "Platform", "Cost-effective"],
            labels: ["⭐"],
            imageSrc: "https://www.ai4chat.co/logo.png",
          },
          {
            id: "ai9",
            name: "Quartzite",
            description:
              "Powerful prompt builder for GPT, Claude, Gemini, and more.",
            discount: "50% OFF annual subscription with code BF50",
            link: "https://www.quartzite.ai/",
            logoSrc: "https://www.quartzite.ai/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["Prompt Builder", "AI Models", "Productivity"],
            labels: ["✳️"],
            imageSrc: "https://www.quartzite.ai/logo.png",
          },
          {
            id: "ai10",
            name: "StylerGPT",
            description:
              "ChatGPT Theme Editor with Power-Ups. A browser extension to customize and enhance your ChatGPT interface.",
            discount: "20% OFF Lifetime Premium Plan BF24",
            link: "https://stylergpt.com/",
            logoSrc: "https://stylergpt.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "💬 AI Chat UI",
            tags: ["ChatGPT", "Customization", "Browser Extension"],
            labels: ["🧠"],
            imageSrc: "https://stylergpt.com/logo.png",
          },
        ],
      },
      {
        name: "📖 AI Productivity & Learning Tools",
        deals: [
          {
            id: "aiprod1",
            name: "TurboScribe",
            description:
              "Unlimited audio and video transcription. Convert your audio and video files to accurate text transcripts in seconds. Chat with and summarize your transcripts with ChatGPT.",
            discount:
              "50% OFF on annual plans now through the end of the year. No code required.",
            link: "https://turboscribe.ai/",
            logoSrc: "https://turboscribe.ai/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Transcription", "AI", "Audio", "Video"],
            labels: ["⭐"],
            imageSrc: "https://turboscribe.ai/logo.png",
          },
          {
            id: "aiprod2",
            name: "PDF Pals",
            description:
              "Instantly chat with any PDF on your Mac. Native, fast and respect your privacy.",
            discount: "53% OFF with code BFCM2024",
            link: "https://pdfpals.com?via=awesomebf",
            logoSrc: "https://pdfpals.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["PDF", "Chat", "macOS"],
            labels: ["⚡"],
            imageSrc: "https://pdfpals.com/logo.png",
          },
          {
            id: "aiprod3",
            name: "Reinspire",
            description:
              "Transform your Audio/Video Content into Transcripts, Newsletters, Blog Posts, Timestamps and more. Content Repurposing Made Easy!",
            discount: "20% OFF with code FRIDAY20",
            link: "https://reinspire.io?utm_source=tony",
            logoSrc: "https://reinspire.io/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Content Repurposing", "AI", "Transcription"],
            labels: ["⭐"],
            imageSrc: "https://reinspire.io/logo.png",
          },
          {
            id: "aiprod4",
            name: "echodocs.ai",
            description:
              "Turn audio into precise documents with a few clicks. AI-powered transcription and automated documentation in over 50 languages.",
            discount: "50% OFF with code BLACK50",
            link: "https://echodocs.ai/black-friday/",
            logoSrc: "https://echodocs.ai/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Transcription", "AI", "Multilingual"],
            labels: ["⭐"],
            imageSrc: "https://echodocs.ai/logo.png",
          },
          {
            id: "aiprod5",
            name: "Side Space",
            description: "Your AI-powered vertical tabs manager for browsing.",
            discount: "50% OFF with code BLACKFRIDAY50",
            link: "https://sidespace.app",
            logoSrc: "https://sidespace.app/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["AI", "Tabs Manager", "Browser"],
            labels: ["⭐"],
            imageSrc: "https://sidespace.app/logo.png",
          },
          {
            id: "aiprod6",
            name: "Heuristica",
            description:
              "Create AI-powered mind maps and concept maps using Heuristica for visual learning, thinking, and research.",
            discount: "40% OFF with code BFRIDAY2024",
            link: "https://www.heuristi.ca/",
            logoSrc: "https://www.heuristi.ca/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Mind Maps", "AI", "Learning"],
            labels: ["📖"],
            imageSrc: "https://www.heuristi.ca/logo.png",
          },
          {
            id: "aiprod7",
            name: "kgrep",
            description: "Small search engine without the fluff.",
            discount: "10% OFF with code FRIYAY on Stripe",
            link: "https://kgrep.com",
            logoSrc: "https://kgrep.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Search Engine", "Minimalist", "Productivity"],
            labels: ["⭐"],
            imageSrc: "https://kgrep.com/logo.png",
          },
          {
            id: "aiprod8",
            name: "Yomu",
            description:
              "Write papers and essays with AI, simplifying academic writing and enhancing productivity.",
            discount: "24% OFF with code BF24",
            link: "https://yomu.ai/",
            logoSrc: "https://yomu.ai/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Academic Writing", "AI", "Productivity"],
            labels: ["⭐"],
            imageSrc: "https://yomu.ai/logo.png",
          },
          {
            id: "aiprod9",
            name: "Sourcely",
            description:
              "Paste your essay or paper to find, summarize, and add credible academic sources.",
            discount: "24% OFF with code BF24",
            link: "https://www.sourcely.net/",
            logoSrc: "https://www.sourcely.net/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["Academic Sources", "AI", "Research"],
            labels: ["⭐"],
            imageSrc: "https://www.sourcely.net/logo.png",
          },
          {
            id: "aiprod10",
            name: "ArXiv Pulse",
            description:
              "Receive personalized email digests of arXiv papers, summarizing the latest research in AI in an easy-to-digest format.",
            discount: "24% OFF with code BF24",
            link: "https://www.arxivpulse.com/",
            logoSrc: "https://www.arxivpulse.com/logo.png",
            category: "🤖 AI Tools",
            subcategory: "📖 AI Productivity & Learning Tools",
            tags: ["AI Research", "Email Digest", "arXiv"],
            labels: ["⭐"],
            imageSrc: "https://www.arxivpulse.com/logo.png",
          },
        ],
      },
    ],
  },
  DesignTools: {
    name: "🌅 Design Tools",
    subcategories: [
      {
        name: "General Design Tools",
        deals: [
          {
            id: "design1",
            name: "Radar",
            description:
              "Track important metrics from your menubar with analytics & threshold alerts. Available for macOS, Windows & Linux. Mobile apps coming soon.",
            discount: "30% OFF with code BLACK22",
            link: "https://getradar.co",
            logoSrc: "https://getradar.co/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Analytics", "Menubar", "Cross-Platform"],
            labels: ["💰"],
            imageSrc: "https://getradar.co/logo.png",
          },
          {
            id: "design2",
            name: "Sensei",
            description:
              "Maximise your Mac performance (macOS). Disk cleaner, performance dashboard, status bar monitor & more.",
            discount: "50% off (automatic)",
            link: "https://cindori.com/sensei",
            logoSrc: "https://cindori.com/sensei/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Performance", "Mac", "Utilities"],
            labels: ["🤑"],
            imageSrc: "https://cindori.com/sensei/logo.png",
          },
          {
            id: "design3",
            name: "Horcrux Email Backup",
            description:
              "A mac app that lets you easily backup your emails as well as moves your emails between different providers when crisis strikes.",
            discount: "30% OFF with code BLACKFRIDAY",
            link: "https://thehorcrux.com",
            logoSrc: "https://thehorcrux.com/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Email Backup", "Mac", "Utilities"],
            labels: ["💰"],
            imageSrc: "https://thehorcrux.com/logo.png",
          },
          {
            id: "design4",
            name: "StopTheMadness",
            description:
              "Web browser extension that stops web sites from making your browser harder to use. And it protects your privacy on the web!",
            discount: "$3 off in the iOS App Store and Mac App Store",
            link: "https://underpassapp.com/StopTheMadness/",
            logoSrc: "https://underpassapp.com/StopTheMadness/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Browser Extension", "Privacy", "Utilities"],
            labels: ["💰"],
            imageSrc: "https://underpassapp.com/StopTheMadness/logo.png",
          },
          {
            id: "design5",
            name: "Shelf",
            description:
              "Pin photos, text, and actions to your Lock Screen. For iPhone.",
            discount: "Up to 40% off Shelf Pro",
            link: "https://apps.apple.com/app/id6443596253",
            logoSrc: "https://apps.apple.com/app/id6443596253/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Productivity", "iOS", "Lock Screen"],
            labels: ["💰"],
            imageSrc: "https://apps.apple.com/app/id6443596253/logo.png",
          },
          {
            id: "design6",
            name: "Recut",
            description:
              "A Mac + Windows app that speeds up video/audio editing by automatically cutting out pauses.",
            discount: "$50 off (automatic)",
            link: "https://getrecut.com",
            logoSrc: "https://getrecut.com/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Video Editing", "Audio Editing", "Productivity"],
            labels: ["🤑"],
            imageSrc: "https://getrecut.com/logo.png",
          },
          {
            id: "design7",
            name: "Quickpresent App",
            description:
              "One click to hide desktop icons, minimise active apps, turn off speakers, change wallpaper, disable Notifications.",
            discount: "30% off on all paid plans with code blackfridayhai",
            link: "https://www.quickpresent.app?utm_source=tony",
            logoSrc: "https://www.quickpresent.app/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Productivity", "Mac", "Utilities"],
            labels: ["💰"],
            imageSrc: "https://www.quickpresent.app/logo.png",
          },
          {
            id: "design8",
            name: "Magicslides App",
            description:
              "One click to hide desktop icons, minimise active apps, turn off speakers, change wallpaper, disable Notifications.",
            discount: "30% off on all paid plans with code blackfriday30",
            link: "https://www.magicslides.app/",
            logoSrc: "https://www.magicslides.app/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Productivity", "Mac", "Utilities"],
            labels: ["💰"],
            imageSrc: "https://www.magicslides.app/logo.png",
          },
          {
            id: "design9",
            name: "ThreeDee Lifetime deal",
            description:
              "Lifetime access to 22+ world-class 3D pack libraries, including all current and future releases!",
            discount: "30% OFF on lifetime deal blackfriday2024",
            link: "https://www.threedee.design/3d-models-pack",
            logoSrc: "https://www.threedee.design/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["3D Models", "Design", "Lifetime Deal"],
            labels: ["💰"],
            imageSrc: "https://www.threedee.design/logo.png",
          },
          {
            id: "design10",
            name: "Siter.io",
            description:
              "No-Code website builder - Craft websites in minutes, no coding needed, and tailor every detail to your vision.",
            discount: "30% OFF with code BLACK24",
            link: "https://siter.io/",
            logoSrc: "https://siter.io/logo.png",
            category: "🌅 Design Tools",
            subcategory: "General Design Tools",
            tags: ["Website Builder", "No-Code", "Design"],
            labels: ["⭐"],
            imageSrc: "https://siter.io/logo.png",
          },
        ],
      },
    ],
  },
}

// needs to be deleted

export interface Product {
  id: string
  created_at: string
  full_name: string
  email: string
  twitter_handle: string
  product_website: string
  codename: string
  punchline: string
  description: string
  logo_src: string
  user_id: string
  tags: string[]
  view_count: number
  approved: boolean
  labels: string[]
  categories: string
}
