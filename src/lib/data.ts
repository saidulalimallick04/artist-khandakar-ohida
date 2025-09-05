export type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Project' | 'Artwork';
  tags: string[];
};

export const workData: WorkItem[] = [
  {
    id: 1,
    title: 'Ethereal Dreams',
    description: 'A series of digital paintings exploring surreal landscapes and dream logic. Created using Procreate and Photoshop.',
    imageUrl: 'https://picsum.photos/600/800?random=1',
    category: 'Artwork',
    tags: ['digital painting', 'surrealism', 'procreate', 'photoshop'],
  },
  {
    id: 2,
    title: 'Kinetic Typography',
    description: 'An animated short film showcasing typography that moves and interacts with music. Made with After Effects.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Project',
    tags: ['animation', 'typography', 'after effects', 'motion graphics'],
  },
  {
    id: 3,
    title: 'Abstract Forms',
    description: 'Generative art created with p5.js, exploring the beauty of mathematical formulas and randomness.',
    imageUrl: 'https://picsum.photos/600/600?random=3',
    category: 'Artwork',
    tags: ['generative art', 'p5.js', 'creative coding', 'abstract'],
  },
  {
    id: 4,
    title: 'Brand Identity Redesign',
    description: 'Complete brand overhaul for a local coffee shop, including logo, packaging, and web design.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Project',
    tags: ['branding', 'logo design', 'ui/ux', 'figma'],
  },
  {
    id: 5,
    title: 'City at Dusk',
    description: 'An atmospheric concept art piece for a sci-fi game, depicting a futuristic city at sunset.',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    category: 'Artwork',
    tags: ['concept art', 'sci-fi', 'environment design', 'photoshop'],
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'The very website you are on now, built with Next.js, Tailwind CSS, and a touch of magic.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    category: 'Project',
    tags: ['web development', 'next.js', 'react', 'tailwind css'],
  },
];

export const educationData = [
    {
        degree: 'Master of Fine Arts in Digital Media',
        institution: 'Rhode Island School of Design',
        period: '2018 - 2020',
    },
    {
        degree: 'Bachelor of Science in Graphic Design',
        institution: 'University of the Arts',
        period: '2014 - 2018',
    },
];

export const interestsData = [
  { name: 'Oil Painting', icon: 'palette' },
  { name: 'Photography', icon: 'camera' },
  { name: 'Creative Coding', icon: 'code' },
  { name: 'Reading Sci-Fi', icon: 'book' },
  { name: 'Hiking', icon: 'mountain' },
];

export const eventsData = [
  {
    title: 'Solo Exhibition: "Digital Dreams"',
    location: 'Agora Gallery, New York',
    date: 'October 2023',
    description: 'Showcased a series of 15 surreal digital paintings.'
  },
  {
    title: 'Speaker at "Future of Design" Conference',
    location: 'Online',
    date: 'March 2023',
    description: 'Gave a talk on "The Intersection of AI and Art".'
  },
  {
    title: 'Live Painting Session',
    location: 'Art Basel, Miami',
    date: 'December 2022',
    description: 'Participated in a live digital art creation event.'
  }
]
