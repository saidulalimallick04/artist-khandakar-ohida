export type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Project' | 'Artwork' | 'Installation';
  tags: string[];
};

export const workData: WorkItem[] = [
  {
    id: 1,
    title: 'Dream Your Museum',
    description: 'An interactive installation questioning the concept of a museum in the digital age.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Installation',
    tags: ['interactive', 'digital art', 'installation'],
  },
  {
    id: 2,
    title: 'Museum on the Moon',
    description: 'A conceptual project envisioning a cultural institution on the lunar surface.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Project',
    tags: ['conceptual art', 'space', 'architecture'],
  },
  {
    id: 3,
    title: 'Ethereal Dreams',
    description: 'A series of digital paintings exploring surreal landscapes and dream logic. Created using Procreate and Photoshop.',
    imageUrl: 'https://picsum.photos/600/800?random=3',
    category: 'Artwork',
    tags: ['digital painting', 'surrealism', 'procreate'],
  },
  {
    id: 4,
    title: 'Kinetic Typography',
    description: 'An animated short film showcasing typography that moves and interacts with music. Made with After Effects.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    category: 'Project',
    tags: ['animation', 'typography', 'motion graphics'],
  },
  {
    id: 5,
    title: 'City at Dusk',
    description: 'An atmospheric concept art piece for a sci-fi game, depicting a futuristic city at sunset.',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    category: 'Artwork',
    tags: ['concept art', 'sci-fi', 'environment'],
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
    // sample data
    {
        degree: 'Artist Residency',
        institution: 'Fictional Art Institute, Paris',
        period: '2019',
    },
];

export type InterestItem = {
    name: string;
    icon: string;
};

export const interestsData: InterestItem[] = [
  { name: 'Exploring Museums', icon: 'museum' },
  { name: 'Film-making', icon: 'film' },
  { name: 'Miniature Painting', icon: 'palette' },
  { name: 'Travel', icon: 'plane' },
];

export type PressItem = {
    title: string;
    description: string;
    year: string;
};

export const pressData: PressItem[] = [
  {
    title: 'Jameel Prize',
    description: 'Finalist for the prestigious Jameel Prize for contemporary art and design inspired by Islamic tradition.',
    year: '2021',
  },
  {
    title: 'The New York Times',
    description: 'Featured in an article on the future of digital art.',
    year: '2022',
  },
  {
    title: 'Artforum',
    description: 'Review of the "Dream Your Museum" installation.',
    year: '2023',
  },
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
