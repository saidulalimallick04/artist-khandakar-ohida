export type JourneyItem = {
    year: string;
    title: string;
    description: string;
    icon: string;
    type?: string;
    location?: string;
};

export const journeyData = {
    title: 'My Life Journey',
    subtitle: 'A timeline of my personal and professional milestones.',
    items: [
      {
        year: '2016',
        title: 'Graduated: BFA in Painting',
        description: 'Completed Bachelor of Fine Arts from Govt. College of Art & Craft, Kolkata, laying the foundation for my artistic practice.',
        icon: 'GraduationCap',
        type: 'Education',
        location: 'Kolkata, India'
      },
      {
        year: '2018',
        title: 'Graduated: MFA in Painting',
        description: 'Completed Master of Fine Arts from Jamia Millia Islamia, honing my conceptual framework and moving towards an interdisciplinary practice.',
        icon: 'GraduationCap',
        type: 'Education',
        location: 'New Delhi, India'
      },
      {
        year: '2019',
        title: 'Group Exhibition: Ahang',
        description: 'Participated in a travelling group show across major cities in Pakistan, fostering cross-border artistic dialogue.',
        icon: 'Milestone',
        type: 'Group Exhibition',
        location: 'Pakistan'
      },
      {
        year: '2022',
        title: 'Screening: 59th Venice Biennale',
        description: 'The film for "Dream Your Museum" was screened at one of the world\'s most prestigious art events.',
        icon: 'Film',
        type: 'Film Screening',
        location: 'Venice, Italy'
      },
      {
        year: '2022',
        title: 'Screening: 12th Berlin Biennale',
        description: 'Further international exposure for "Dream Your Museum" at the Berlin Biennale for Contemporary Art.',
        icon: 'Film',
        type: 'Film Screening',
        location: 'Berlin, Germany'
      },
      {
        year: '2023',
        title: 'Recipient: Inlaks Fine Arts Award',
        description: 'Received a significant award supporting innovative contemporary artists in India.',
        icon: 'Award',
        type: 'Award',
        location: 'India'
      },
      {
        year: '2023',
        title: 'Recipient: Generator Co-operative Fund',
        description: 'Received a grant to support the creation of new artistic projects.',
        icon: 'Award',
        type: 'Award',
        location: 'India'
      },
      {
        year: '2024',
        title: 'Solo Show: "A Thousand Thunders"',
        description: '"A Thousand Thunders" at Project 88 marked a significant solo exhibition in my career.',
        icon: 'Palette',
        type: 'Solo Exhibition',
        location: 'Mumbai, India'
      },
      {
        year: '2024',
        title: 'Winner: Jameel Prize',
        description: 'Awarded the prestigious Jameel Prize from the V&A and Art Jameel for "Dream Your Museum".',
        icon: 'Award',
        type: 'Award',
        location: 'London, UK'
      },
      {
        year: '2025',
        title: 'Residency: Jan Van Eyck Academie',
        description: 'Upcoming residency to further develop my practice and the "Dream Your Museum" project.',
        icon: 'Briefcase',
        type: 'Artist Residency',
        location: 'Maastricht, Netherlands'
      }
    ] as JourneyItem[]
};
