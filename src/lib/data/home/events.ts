export type EventItem = {
    id: number;
    title: string;
    location: string;
    date: string;
    description: string;
};

export const eventsData = {
    title: 'Exhibitions & Events',
    subtitle: 'A log of past exhibitions, speaking engagements, and other notable events.',
    items: [
        {
            id: 1,
            title: 'Solo Exhibition: A Thousand Thunders',
            location: 'Project 88, Mumbai',
            date: '2024',
            description: 'A major solo show exhibiting a new body of work.'
        },
        {
            id: 2,
            title: 'Jameel Prize: Moving Images',
            location: 'V&A Museum, London',
            date: '2024-2025',
            description: 'Exhibition of works by the Jameel Prize winner and finalists.'
        },
        {
            id: 3,
            title: 'Film Screening at Venice Biennale',
            location: 'Venice, Italy',
            date: '2022',
            description: 'Screening of "Dream Your Museum" at the 59th International Art Exhibition.'
        },
        {
            id: 4,
            title: 'Film Screening at Berlin Biennale',
            location: 'Berlin, Germany',
            date: '2022',
            description: 'Screened the film component of "Dream Your Museum" at the 12th Berlin Biennale.'
        },
        {
            id: 5,
            title: 'Group Exhibition at MUDAM',
            location: 'Luxembourg',
            date: '2024',
            description: 'Featured in "A Model: An exhibition in three parts" at a leading European modern art museum.'
        },
        {
            id: 6,
            title: 'Serendipity Arts Festival',
            location: 'Goa, India',
            date: '2019 & 2023',
            description: 'Participated in a major interdisciplinary arts festival on two separate occasions.'
        }
    ] as EventItem[]
};
