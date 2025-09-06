
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
        'year': '1993',
        'title': 'Birth',
        'description': 'Born in the rural village of Kelepara, located in the Hooghly district of West Bengal, India. Her early experiences deeply shaped her artistic perspective.',
        'icon': 'Home',
        'type': 'Personal',
        'location': 'Hooghly, India'
      },
      {
        'year': '2009',
        'title': 'Spark of Artistic Interest',
        'description': 'Began her artistic journey, fueled by a love for drawing and a deep desire to create, despite art not being a subject in her school.',
        'icon': 'Palette',
        'type': 'Personal',
        'location': 'Hooghly, India'
      },
      {
        'year': '2015',
        'title': 'First Attempt at Art College',
        'description': 'Applied to the Government College of Art & Craft in Kolkata but was not accepted on her first try, leading to a period of intense self-study and practice.',
        'icon': 'Book',
        'type': 'Education',
        'location': 'Kolkata, India'
      },
      {
        'year': '2016',
        'title': 'Graduated: BFA in Painting',
        'description': 'Completed Bachelor of Fine Arts from Govt. College of Art & Craft, Kolkata, laying the foundation for her artistic practice.',
        'icon': 'University',
        'type': 'Education',
        'location': 'Kolkata, India'
      },
      {
        'year': '2018',
        'title': 'Completed: MFA in Painting',
        'description': 'Earned a Master of Fine Arts from the Faculty of Fine Arts, Jamia Millia Islamia, New Delhi, further developing my skills and artistic vision.',
        'icon': 'GraduationCap',
        'type': 'Education',
        'location': 'New Delhi, India'
      },
      {
        'year': '2019',
        'title': 'Next Step Artist Residency',
        'description': 'Participated in the Next Step Artist Residency program at 1Shanthi Road, Bangalore, gaining valuable experience and exposure.',
        'icon': 'Briefcase',
        'type': 'Residency',
        'location': 'Bangalore, India'
      },
      {
        'year': '2022',
        'title': 'Film Screened at Berlin Biennale',
        'description': 'My film "Dream Your Museum" was screened at the 12th Berlin Biennale for Contemporary Art, marking a significant milestone in my career.',
        'icon': 'Film',
        'type': 'Exhibition',
        'location': 'Berlin, Germany'
      },
      {
        'year': '2023',
        'title': 'Recipient of Inlaks Fine Arts Award',
        'description': 'Received the Inlaks Fine Arts Award, an important recognition of my work and potential.',
        'icon': 'Award',
        'type': 'Award',
        'location': 'India'
      },
      {
        'year': '2024',
        'title': 'Won the 7th Jameel Prize',
        'description': 'Awarded the prestigious Jameel Prize for my film "Dream Your Museum", an international award for contemporary art inspired by Islamic tradition.',
        'icon': 'Trophy',
        'type': 'Award',
        'location': 'London, UK'
      },
      {
        'year': '2025',
        'title': 'Jan Van Eyck Artist Residency',
        'description': 'Awarded a residency at the Jan van Eyck Academie, providing an opportunity for further artistic exploration and development.',
        'icon': 'Brush',
        'type': 'Residency',
        'location': 'Maastricht, Netherlands'
      }
    ] as JourneyItem[]
};
