export type HobbyItem = {
    name: string;
    icon: string;
};

export const hobbiesData = {
    title: 'Hobbies & Interests',
    subtitle: "When I'm not in the studio, you can find me exploring new passions and seeking inspiration.",
    items: [
      { name: 'Museum Hopping', icon: 'museum' },
      { name: 'Film Making', icon: 'film' },
      { name: 'Miniature Painting', icon: 'palette' },
      { name: 'Traveling', icon: 'plane' },
    ] as HobbyItem[]
};
