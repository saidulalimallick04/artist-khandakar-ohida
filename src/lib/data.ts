export type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Project' | 'Artwork' | 'Installation';
  tags: string[];
  period: string;
};

export const workData: WorkItem[] = [
  {
    id: 1,
    title: 'Dream Your Museum',
    description: 'An interactive installation questioning the concept of a museum in the digital age.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Installation',
    tags: ['interactive', 'digital art', 'installation'],
    period: '2023',
  },
  {
    id: 2,
    title: 'Museum on the Moon',
    description: 'A conceptual project envisioning a cultural institution on the lunar surface.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Project',
    tags: ['conceptual art', 'space', 'architecture'],
    period: '2022',
  },
  {
    id: 3,
    title: 'Ethereal Dreams',
    description: 'A series of digital paintings exploring surreal landscapes and dream logic. Created using Procreate and Photoshop.',
    imageUrl: 'https://picsum.photos/600/800?random=3',
    category: 'Artwork',
    tags: ['digital painting', 'surrealism', 'procreate'],
    period: '2021-2022',
  },
  {
    id: 4,
    title: 'Kinetic Typography',
    description: 'An animated short film showcasing typography that moves and interacts with music. Made with After Effects.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Project',
    tags: ['animation', 'typography', 'motion graphics'],
    period: '2020',
  },
  {
    id: 5,
    title: 'City at Dusk',
    description: 'An atmospheric concept art piece for a sci-fi game, depicting a futuristic city at sunset.',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    category: 'Artwork',
    tags: ['concept art', 'sci-fi', 'environment'],
    period: '2019',
  },
];

export type EducationItem = {
    degree: string;
    institution: string;
    period: string;
};

export const educationData: EducationItem[] = [
    {
        degree: 'Master of Fine Arts in Painting',
        institution: 'Jamia Millia Islamia, New Delhi',
        period: '2016 - 2018',
    },
    {
        degree: 'Bachelor of Fine Arts in Painting',
        institution: 'Govt. College of Art & Craft, Kolkata',
        period: '2012 - 2016',
    },
    {
        degree: 'Artist Residency',
        institution: 'Fictional Art Institute, Paris',
        period: '2019',
    },
];

export type HobbyItem = {
    name: string;
    icon: string;
};

export const hobbiesData: HobbyItem[] = [
  { name: 'Museum Hopping', icon: 'museum' },
  { name: 'Film Making', icon: 'film' },
  { name: 'Miniature Painting', icon: 'palette' },
  { name: 'Traveling', icon: 'plane' },
];

export type PressItem = {
    title: string;
    description: string;
    year: string;
    imageUrl: string;
};

export const pressData: PressItem[] = [
  {
    title: 'Jameel Prize',
    description: 'Finalist for the prestigious Jameel Prize for contemporary art and design inspired by Islamic tradition.',
    year: '2021',
    imageUrl: 'https://picsum.photos/800/600?random=6',
  },
  {
    title: 'The New York Times',
    description: 'Featured in an article on the future of digital art.',
    year: '2022',
    imageUrl: 'https://picsum.photos/800/600?random=7',
  },
  {
    title: 'Artforum',
    description: 'Review of the "Dream Your Museum" installation.',
    year: '2023',
    imageUrl: 'https://picsum.photos/800/600?random=8',
  },
   {
    title: 'Creative Review Annual',
    description: 'Work featured in the best of digital art section.',
    year: '2020',
    imageUrl: 'https://picsum.photos/800/600?random=9',
  }
]

export type EventItem = {
    id: number;
    title: string;
    location: string;
    date: string;
    description: string;
};

export const eventsData: EventItem[] = [
  {
    id: 1,
    title: 'Berlin Biennale',
    location: 'Berlin, Germany',
    date: 'June 2024',
    description: 'Presenting "Museum on the Moon" concept.'
  },
  {
    id: 2,
    title: 'Solo Exhibition: Digital Dreams',
    location: 'V&A Museum, London',
    date: 'October 2023',
    description: 'Showcased a series of 15 surreal digital paintings.'
  },
  {
    id: 3,
    title: 'Group Show: Future Forward',
    location: 'Mudam Luxembourg',
    date: 'May 2023',
    description: 'Exhibited generative artworks.'
  }
]
