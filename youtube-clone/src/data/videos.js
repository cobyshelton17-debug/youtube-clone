const categories = [
  {
    title: 'Trending',
    videos: [
      { id: 1, title: 'Top 10 React Hooks You Must Know', channel: 'CodeMaster', views: '2.3M', time: '3 days ago', seed: 1 },
      { id: 2, title: 'Building a Full Stack App in 30 Minutes', channel: 'DevPro', views: '1.8M', time: '1 week ago', seed: 2 },
      { id: 3, title: 'CSS Grid vs Flexbox Explained', channel: 'WebWizard', views: '3.1M', time: '5 days ago', seed: 3 },
      { id: 4, title: 'JavaScript ES2025 New Features', channel: 'JSGeek', views: '980K', time: '2 days ago', seed: 4 },
      { id: 5, title: 'The Future of AI in 2025', channel: 'TechVault', views: '5.2M', time: '1 day ago', seed: 5 },
      { id: 6, title: 'Learn TypeScript in One Video', channel: 'CodeCraft', views: '4.1M', time: '4 days ago', seed: 6 },
      { id: 7, title: 'VS Code Extensions You Need', channel: 'DevTools', views: '1.5M', time: '6 days ago', seed: 7 },
      { id: 8, title: 'React Server Components Guide', channel: 'FrontendFocus', views: '890K', time: '2 weeks ago', seed: 8 },
    ],
  },
  {
    title: 'Music',
    videos: [
      { id: 9, title: 'Chill Lo-Fi Beats to Code To', channel: 'LoFi Studio', views: '12M', time: '1 month ago', seed: 9 },
      { id: 10, title: 'Summer Vibes Mix 2025', channel: 'EDM Nation', views: '8.2M', time: '3 days ago', seed: 10 },
      { id: 11, title: 'Acoustic Guitar Covers', channel: 'Strings&Co', views: '3.4M', time: '1 week ago', seed: 11 },
      { id: 12, title: 'Jazz Night at the Blue Note', channel: 'JazzLover', views: '2.1M', time: '2 weeks ago', seed: 12 },
      { id: 13, title: 'Piano for Relaxation', channel: 'CalmKeys', views: '6.7M', time: '5 days ago', seed: 13 },
      { id: 14, title: 'Indie Rock Playlist 2025', channel: 'AltSounds', views: '4.5M', time: '1 day ago', seed: 14 },
      { id: 15, title: 'Hip Hop Workout Mix', channel: 'HoopsCentral', views: '9.8M', time: '4 days ago', seed: 15 },
      { id: 16, title: 'Classical Music for Studying', channel: 'Orchestra+', views: '15M', time: '3 weeks ago', seed: 16 },
    ],
  },
  {
    title: 'Gaming',
    videos: [
      { id: 17, title: 'Elden Ring Speedrun World Record', channel: 'GameBreaker', views: '7.3M', time: '2 days ago', seed: 17 },
      { id: 18, title: 'Minecraft Mega Base Tour', channel: 'BlockBuster', views: '5.1M', time: '1 week ago', seed: 18 },
      { id: 19, title: 'Valorant Ranked Clutch Moments', channel: 'AcePlays', views: '3.8M', time: '3 days ago', seed: 19 },
      { id: 20, title: 'Zelda Tears of the Kingdom Secrets', channel: 'HyruleHero', views: '10M', time: '5 days ago', seed: 20 },
      { id: 21, title: 'Cyberpunk 2077 Phantom Liberty Review', channel: 'PixelPundit', views: '2.9M', time: '1 day ago', seed: 21 },
      { id: 22, title: 'Fortnite Zero Build Tips', channel: 'StormChaser', views: '4.2M', time: '6 days ago', seed: 22 },
      { id: 23, title: 'Stardew Valley 1.6 Update', channel: 'FarmLife', views: '1.6M', time: '2 weeks ago', seed: 23 },
      { id: 24, title: 'Best Indie Games of 2025', channel: 'IndieSpotlight', views: '6.4M', time: '4 days ago', seed: 24 },
    ],
  },
  {
    title: 'Technology',
    videos: [
      { id: 25, title: 'I Built a PC Inside a Desk', channel: 'CodeMaster', views: '4.7M', time: '1 week ago', seed: 25 },
      { id: 26, title: 'iPhone 17 Pro Max Review', channel: 'GadgetGuru', views: '11M', time: '2 days ago', seed: 26 },
      { id: 27, title: 'Raspberry Pi 5 Projects', channel: 'PiLab', views: '2.3M', time: '5 days ago', seed: 27 },
      { id: 28, title: 'How Quantum Computers Work', channel: 'ScienceScope', views: '8.9M', time: '3 days ago', seed: 28 },
      { id: 29, title: 'Best Laptops for Developers 2025', channel: 'PixelPundit', views: '1.2M', time: '1 week ago', seed: 29 },
      { id: 30, title: 'Smart Home Setup Guide', channel: 'HomeTech', views: '3.5M', time: '4 days ago', seed: 30 },
      { id: 31, title: 'SpaceX Starship Launch Highlights', channel: 'TechVault', views: '20M', time: '1 day ago', seed: 31 },
      { id: 32, title: 'I Hacked My Own Router', channel: 'BackendDev', views: '6.1M', time: '6 days ago', seed: 32 },
    ],
  },
  {
    title: 'Sports',
    videos: [
      { id: 33, title: 'NBA Finals Game 7 Highlights', channel: 'HoopsCentral', views: '18M', time: '2 days ago', seed: 33 },
      { id: 34, title: 'Best Goals of the Season', channel: 'FootyFan', views: '14M', time: '1 week ago', seed: 34 },
      { id: 35, title: 'F1 Monaco Grand Prix Onboard', channel: 'RacingLine', views: '7.2M', time: '3 days ago', seed: 35 },
      { id: 36, title: 'Tennis: Epic 5-Set Match', channel: 'AceReport', views: '4.8M', time: '5 days ago', seed: 36 },
      { id: 37, title: 'Super Bowl Commercials Ranked', channel: 'Gridiron', views: '9.3M', time: '1 day ago', seed: 37 },
      { id: 38, title: 'Olympic Highlights Compilation', channel: 'GoldMedal', views: '22M', time: '1 week ago', seed: 38 },
      { id: 39, title: 'Boxing Knockout of the Year', channel: 'GameBreaker', views: '11M', time: '4 days ago', seed: 39 },
      { id: 40, title: 'Skateboarding Trick Tutorial', channel: 'BoardLife', views: '1.9M', time: '6 days ago', seed: 40 },
    ],
  },
]

export const watchLater = [
  { id: 41, title: 'Advanced CSS Animations Tutorial', channel: 'DesignPro', views: '1.2M', time: '2 weeks ago', seed: 41 },
  { id: 42, title: 'Node.js Performance Tips', channel: 'BackendDev', views: '870K', time: '1 week ago', seed: 42 },
  { id: 43, title: 'Docker for Beginners', channel: 'DevPro', views: '3.4M', time: '3 days ago', seed: 43 },
  { id: 44, title: 'Python Machine Learning Crash Course', channel: 'LoFi Studio', views: '2.1M', time: '5 days ago', seed: 44 },
  { id: 45, title: 'Understanding WebSockets', channel: 'NetCode', views: '650K', time: '1 month ago', seed: 45 },
  { id: 46, title: 'React Native Mobile App Tutorial', channel: 'MobileDev', views: '1.8M', time: '2 weeks ago', seed: 46 },
  { id: 47, title: 'GoLang Basics in 20 Minutes', channel: 'LangCraft', views: '950K', time: '4 days ago', seed: 47 },
  { id: 48, title: 'Linux Command Line Masterclass', channel: 'TerminalHero', views: '4.2M', time: '1 week ago', seed: 48 },
  { id: 49, title: 'GraphQL vs REST API Design', channel: 'APIGuru', views: '780K', time: '6 days ago', seed: 49 },
  { id: 50, title: 'Kubernetes Explained Simply', channel: 'CloudNative', views: '2.6M', time: '3 days ago', seed: 50 },
  { id: 51, title: 'Rust Programming for Beginners', channel: 'SystemsDev', views: '1.5M', time: '1 week ago', seed: 51 },
  { id: 52, title: 'Firebase Cloud Functions Tutorial', channel: 'ServerlessPro', views: '1.1M', time: '5 days ago', seed: 52 },
]

export const subscriptionCategories = categories.slice(1)

export function getAllVideos() {
  return categories.flatMap((cat) => cat.videos)
}

export default categories
