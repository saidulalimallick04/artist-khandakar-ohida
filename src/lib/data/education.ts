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
