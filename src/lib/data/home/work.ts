export type WorkItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Project' | 'Artwork' | 'Installation';
  tags: string[];
  period: string;
};

export const workData = {
  title: 'Featured Work',
  subtitle: 'A collection of projects and artwork. Use the search below to filter by keywords like "digital painting" or "animation".',
  items: [
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
  ] as WorkItem[]
};
