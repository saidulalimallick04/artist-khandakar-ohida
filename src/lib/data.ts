
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
    description: 'An interactive installation questioning the concept of a museum in the digital age, based on my uncle\'s five-decade collection.',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Installation',
    tags: ['interactive', 'digital art', 'archive'],
    period: '2022',
  },
  {
    id: 2,
    title: 'Museum on the Moon',
    description: 'A conceptual project and feature documentary envisioning a cultural institution on the lunar surface, expanding on the themes of "Dream Your Museum".',
    imageUrl: 'https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Project',
    tags: ['conceptual art', 'film', 'documentary'],
    period: 'Ongoing',
  },
  {
    id: 3,
    title: 'Ethereal Dreams',
    description: 'A series of digital paintings exploring surreal landscapes and dream logic, created using Procreate and Photoshop.',
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Artwork',
    tags: ['digital painting', 'surrealism', 'procreate'],
    period: '2021-2022',
  },
  {
    id: 4,
    title: 'Kinetic Typography',
    description: 'An animated short film showcasing typography that moves and interacts with music, created with After Effects.',
    imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Project',
    tags: ['animation', 'typography', 'motion graphics'],
    period: '2020',
  },
  {
    id: 5,
    title: 'Periodic Affliction',
    description: 'An unfinished photo series documenting marks left by a hot water bag, critiquing the societal dismissal of female pain.',
    imageUrl: 'https://images.unsplash.com/photo-1754079132758-5dfb65298934?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Artwork',
    tags: ['photography', 'gender', 'body'],
    period: 'Ongoing',
  },
];

export type EducationItem = {
    degree: string;
    institution: string;
    period: string;
    icon: string;
};

export const educationData: EducationItem[] = [
    {
        degree: 'Master of Fine Arts in Painting',
        institution: 'Jamia Millia Islamia, New Delhi',
        period: '2016 - 2018',
        icon: 'GraduationCap'
    },
    {
        degree: 'Bachelor of Fine Arts in Painting',
        institution: 'Govt. College of Art & Craft, Kolkata',
        period: '2012 - 2016',
        icon: 'GraduationCap'
    },
    {
        degree: 'Artist Residency',
        institution: 'Jan Van Eyck Academie',
        period: '2025',
        icon: 'Briefcase'
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
    title: 'Jameel Prize Winner',
    description: 'Winner of the prestigious Jameel Prize for contemporary art, for the film "Dream Your Museum".',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1518977877150-35db786d223a?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Inlaks Fine Arts Award',
    description: 'Recipient of a significant award supporting innovative contemporary artists in India.',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1494935362342-566c6d6e75b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Artforum',
    description: 'A feature review of the "Dream Your Museum" installation.',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
   {
    title: 'The New York Times',
    description: 'Featured in an article on the future of digital art and archival practices.',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    title: 'Solo Exhibition: A Thousand Thunders',
    location: 'Project 88, Mumbai',
    date: '2024',
    description: 'A solo show exhibiting new works.'
  },
  {
    id: 2,
    title: 'Jameel Prize Exhibition',
    location: 'V&A Museum, London',
    date: '2024-2025',
    description: 'Exhibition of works by the Jameel Prize winner and finalists.'
  },
  {
    id: 3,
    title: 'Berlin Biennale',
    location: 'Berlin, Germany',
    date: '2022',
    description: 'Screened the film component of "Dream Your Museum".'
  },
]


export type JourneyItem = {
    year: string;
    title: string;
    description: string;
    icon: string;
    type?: string;
    location?: string;
};

export const journeyData: JourneyItem[] = [
  {
    year: '2016',
    title: 'BFA, Govt. College of Art & Craft',
    description: 'Completed Bachelor of Fine Arts in Painting, laying the foundation for my artistic practice.',
    icon: 'GraduationCap',
    type: 'Education',
    location: 'Kolkata, India'
  },
  {
    year: '2018',
    title: 'MFA, Jamia Millia Islamia',
    description: 'Completed Master of Fine Arts, honing my conceptual framework and moving towards an interdisciplinary practice.',
    icon: 'GraduationCap',
    type: 'Education',
    location: 'New Delhi, India'
  },
  {
    year: '2019',
    title: 'Serendipity Arts Festival',
    description: 'Participated in a major group exhibition, gaining early career visibility.',
    icon: 'Milestone',
    type: 'Group Exhibition',
    location: 'Goa, India'
  },
  {
    year: '2022',
    title: 'Screening at 59th Venice Biennale',
    description: 'The film for "Dream Your Museum" was screened at one of the world\'s most prestigious art events.',
    icon: 'Film',
    type: 'Film Screening',
    location: 'Venice, Italy'
  },
  {
    year: '2022',
    title: 'Screening at 12th Berlin Biennale',
    description: 'Further international exposure for "Dream Your Museum" at the Berlin Biennale for Contemporary Art.',
    icon: 'Film',
    type: 'Film Screening',
    location: 'Berlin, Germany'
  },
  {
    year: '2023',
    title: 'Inlaks Fine Arts Award',
    description: 'Received a significant award supporting innovative contemporary artists in India.',
    icon: 'Award',
    type: 'Award',
    location: 'India'
  },
  {
    year: '2023',
    title: 'Generator Co-operative Art Production Fund',
    description: 'Received a grant to support the creation of new artistic projects.',
    icon: 'Award',
    type: 'Award',
    location: 'India'
  },
  {
    year: '2024',
    title: 'Solo Exhibition at Project 88',
    description: '"A Thousand Thunders" marked a significant solo exhibition in my career.',
    icon: 'Palette',
    type: 'Solo Exhibition',
    location: 'Mumbai, India'
  },
  {
    year: '2024',
    title: 'Winner of the Jameel Prize',
    description: 'Awarded the prestigious Jameel Prize from the V&A and Art Jameel for "Dream Your Museum".',
    icon: 'Award',
    type: 'Award',
    location: 'London, UK'
  },
  {
    year: '2025',
    title: 'Jan Van Eyck Artist Residency',
    description: 'Upcoming residency to further develop my practice and the "Dream Your Museum" project.',
    icon: 'Briefcase',
    type: 'Artist Residency',
    location: 'Maastricht, Netherlands'
  }
];

export type ProfileLinkItem = {
  name: string;
  url: string;
  description: string;
};

export const profileLinksData: ProfileLinkItem[] = [
  {
    name: 'Jan van Eyck Academie',
    url: 'https://www.janvaneyck.nl/participants/khandakar-ohida/',
    description: 'My official profile as a resident artist at the prestigious Jan van Eyck Academie in The Netherlands.'
  },
  {
    name: 'India Foundation for the Arts',
    url: 'https://indiaifa.org/grants-projects/khandakar-ohida.html',
    description: 'Details on grants and projects supported by the IFA, which has been crucial to my work.'
  },
  {
    name: 'Project 88',
    url: 'https://www.project88.in/artists/134-khandakar-ohida/exhibitions/',
    description: 'Exhibition history and artist profile at Project 88, a leading contemporary art gallery in Mumbai.'
  },
  {
    name: '1Shanthiroad Studio/Gallery',
    url: 'http://1shanthiroad.com/ohida/',
    description: 'My profile at 1Shanthiroad, an influential artist-led space in Bangalore that supports creative expression.'
  }
];

    
