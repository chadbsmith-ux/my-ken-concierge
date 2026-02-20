
import { Ken, PrincessPackage } from './types';

export const KENS: Ken[] = [
  {
    id: '1',
    name: 'Julian',
    city: 'New York City',
    ageRange: '35-40',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    vibeTags: ['Gentlemanly', 'Sophisticated', 'Intellectual'],
    skills: ['Wine Connoisseur', 'Art Gallery Insider', 'Fluent in French'],
    bio: 'An architectural consultant by day and a charming socialite by night. Julian brings an air of old-world class to modern Manhattan nights.'
  },
  {
    id: '2',
    name: 'Mateo',
    city: 'Los Angeles',
    ageRange: '30-35',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80',
    vibeTags: ['Adventurous', 'Playful', 'Creative'],
    skills: ['Expert Surfer', 'Cocktail Mixologist', 'Landscape Photographer'],
    bio: 'With a smile that rivals the Malibu sunset, Mateo is your go-to for effortless coastal cool and spontaneous weekend escapes.'
  },
  {
    id: '3',
    name: 'Alexander',
    city: 'Chicago',
    ageRange: '45-50',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    vibeTags: ['Gentlemanly', 'Sophisticated', 'Low-key'],
    skills: ['Jazz Pianist', 'Great with Family Events', 'History Buff'],
    bio: 'Alexander exudes the quiet confidence of a man who knows exactly what he wants. The perfect companion for a gala or an intimate jazz lounge.'
  },
  {
    id: '4',
    name: 'Dorian',
    city: 'Miami',
    ageRange: '35-40',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    vibeTags: ['Party', 'Adventurous', 'Playful'],
    skills: ['Ballroom Dancer', 'World Traveler', 'Fashion Consultant'],
    bio: 'Life is a celebration with Dorian. He knows every secret rooftop in Miami and ensures you are the center of attention everywhere you go.'
  }
];

export const PRINCESS_PACKAGES: PrincessPackage[] = [
  {
    id: 'p1',
    name: 'Black-Tie Ballroom Evening',
    description: 'A glamorous, formal evening designed for those who want to be the talk of the town. Your Ken arrives in a chauffeured town car, ready for high society.',
    includes: [
      { title: 'Chauffeured arrival', detail: 'A sleek black luxury sedan with a professional driver will arrive at your door 15 minutes early.' },
      { title: 'Black-tie Ken', detail: 'Your companion will be impeccably dressed in a tailored tuxedo with silk lapels and custom cufflinks.' },
      { title: 'Fine dining reservation', detail: 'Priority seating at a Michelin-starred venue with a curated tasting menu and wine pairing.' },
      { title: 'Ballroom event access', detail: 'Exclusive VIP entry to the city\'s most prestigious gala or charity ball of the season.' }
    ],
    priceRange: '$1,200',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80'
  },
  {
    id: 'p2',
    name: 'Desert Sunset Champagne',
    description: 'A romantic sunset experience overlooking the canyons. Perfect for breathtaking photos and quiet, golden-hour magic.',
    includes: [
      { title: 'Private viewpoint access', detail: 'A secluded hilltop spot reserved exclusively for you and your Ken, far from the crowds.' },
      { title: 'Champagne service', detail: 'A bottle of vintage Dom Pérignon chilled to perfection with artisan crystal flutes and gourmet hors d\'oeuvres.' },
      { title: 'Stylishly casual Ken', detail: 'Effortless elegance in high-end linen or cashmere, perfectly suited for the relaxed desert vibe.' },
      { title: 'Professional photography session', detail: 'A discreet photographer will capture 10 high-resolution candids of your golden hour memories.' }
    ],
    priceRange: '$450',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=80'
  },
  {
    id: 'p3',
    name: 'Weekend in Manhattan Fairytale',
    description: 'A city escape including curated dining, Broadway shows, and iconic Central Park strolls with your cosmopolitan guide.',
    includes: [
      { title: 'Luxury hotel coordination', detail: 'Check-in at a Five-Star suite with personalized welcome amenities and daily turn-down service.' },
      { title: 'Broadway VIP tickets', detail: 'Orchestra-level seating for the hottest show in town with private lounge access during intermission.' },
      { title: 'Private shopping tour', detail: 'After-hours access to select Madison Avenue boutiques with a dedicated personal stylist.' },
      { title: '24/7 Ken companionship', detail: 'Round-the-clock availability for social events, dining, and curated city exploration throughout the weekend.' }
    ],
    priceRange: '$3,500',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80'
  }
];

export const STRIPE_CONFIG = {
  publishableKey: 'pk_test_51Spek8Kle5pBeTfr32IMGFaKv2qFOk1qZGP7qsnkGNzP2BkU6qADMLOHtU8L2QhX7FvOVM7SvAiwf7AfCcFpNFyN00qdg4fNbx',
};
