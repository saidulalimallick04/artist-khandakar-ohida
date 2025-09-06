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
