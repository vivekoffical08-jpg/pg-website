/**
 * NANDINI LUXURY CO-LIVING — Authoritative Centralized Configuration
 * ===================================================================
 * Single source of truth for all business data, room pricing,
 * verified amenities, authentic photography assets, and contact links.
 * STRICT ASSET RULE: 100% authentic property images only. Zero stock imagery.
 */

export interface RoomItem {
  id: 'private' | 'twin' | 'triple';
  type: string;
  price: string;
  priceSuffix: string;
  description: string;
  image: string;
  features: string[];
}

export interface AmenityItem {
  number: string;
  label: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  size?: 'large' | 'tall' | 'wide' | 'normal' | 'half' | 'third';
}

export interface CarouselCard {
  imgUrl: string;
  alt: string;
  category: string;
  caption: string;
  linkUrl?: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Nandini Luxury Co-Living',
    shortName: 'Nandini',
    buildingName: "Reddy's Nilaya",
    tagline: 'Thoughtfully designed living in Doddakannelli, Bengaluru.',
    description:
      "Nandini Luxury Co-Living at Reddy's Nilaya offers a premium living experience in Doddakannelli, Bengaluru. Designed for working professionals and students near Bellandur and Sarjapur tech corridors, we provide fully furnished accommodations, freshly prepared 3-time daily meals, an on-site fitness gym, high-speed elevator access, and a warm community atmosphere.",
  },

  contact: {
    phone: '+919900922277',
    phoneFormatted: '+91 99009 22277',
    phone2: '+919590703337',
    phone2Formatted: '+91 95907 03337',
    whatsapp: '919900922277',
    whatsappDefaultText:
      'Hi, I am interested in Nandini Luxury Co-Living. Could you share current room availability details?',
    email: '', // Configurable when client provides official email
  },

  location: {
    buildingName: "Reddy's Nilaya",
    addressLines: [
      '19, 1st Cross St',
      'Janatha Colony',
      'Doddakannelli',
      'Bengaluru, Karnataka 560035',
    ],
    displayAddress: [
      "Reddy's Nilaya",
      'AET Junction Circle, #10, 1st Cross',
      'Janatha Colony, Doddakannelli',
      'Bengaluru, Karnataka 560035',
    ],
    area: 'Doddakannelli',
    city: 'Bengaluru',
    pincode: '560035',
    googleMapsUrl: 'https://maps.app.goo.gl/gUFThz4gunmSL8t2A?g_st=aw',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5780871951255!2d77.6810310!3d12.9148848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149bfcf6d58f%3A0x2bfae345e8a8c9e4!2sDoddakannelli%2C%20Bengaluru%2C%20Karnataka%20560035!5e0!3m2!1sen!2sin!4v1694600000000!5m2!1sen!2sin',
  },

  // ── Verified Rooms & Pricing ────────────────────────────
  rooms: [
    {
      id: 'private',
      type: 'Private Room',
      price: '17,000',
      priceSuffix: '/month',
      description:
        'Exclusive private accommodation featuring wall-mounted Smart TV, dedicated study desk, and uninterrupted personal sanctuary.',
      image: 'images/room-private.jpg',
      features: ['Smart LED TV', 'Attached Bath', 'Work Desk', '3 Meals Daily'],
    },
    {
      id: 'twin',
      type: 'Twin Sharing',
      price: '9,000',
      priceSuffix: '/person / month',
      description:
        'Spacious double-sharing suite equipped with two wooden beds, individual study desks, ergonomic chairs, and large wardrobe with dressing mirror.',
      image: 'images/room-twin-sharing.jpg',
      features: ['2 Wooden Beds', 'Study Desks', 'Mirror Wardrobe', '3 Meals Daily'],
    },
    {
      id: 'triple',
      type: 'Triple Sharing',
      price: '7,000',
      priceSuffix: '/person / month',
      description:
        'Practical, airy co-living accommodation with sturdy wooden beds, individual storage, cross-ventilation, and high-speed Wi-Fi.',
      image: 'images/room-triple-sharing.jpg',
      features: ['3 Wooden Beds', 'Personal Storage', 'High-Speed Wi-Fi', '3 Meals Daily'],
    },
  ] as RoomItem[],

  // ── Verified On-Site Amenities ─────────────────────────
  amenities: [
    {
      number: '01',
      label: '3 Meals Daily — Cooked Fresh',
      description:
        'Wholesome, home-style breakfast, lunch, and dinner prepared fresh daily on premise.',
    },
    {
      number: '02',
      label: 'In-House Fitness Gym',
      description:
        'Fully equipped on-site gym featuring cardio equipment, cycling machines, and strength training gear.',
    },
    {
      number: '03',
      label: 'Automatic Passenger Elevator',
      description:
        'Modern stainless steel elevator with granite cladding serving all residential levels effortlessly.',
    },
    {
      number: '04',
      label: 'In-Room Smart LED TV',
      description:
        'Wall-mounted high-definition Smart TV in resident rooms and common dining hall.',
    },
    {
      number: '05',
      label: 'High-Speed Wi-Fi & Power Backup',
      description:
        'Uninterrupted high-bandwidth connectivity and 24/7 power backup tailored for tech professionals.',
    },
    {
      number: '06',
      label: 'Dining Lounge & Rooftop Terrace',
      description:
        'Spacious ambient dining hall, ground floor reception lounge, and panoramic rooftop sunset views.',
    },
  ] as AmenityItem[],

  // ── Authentic Property Photos (Strictly No Stock) ───────
  gallery: [
    {
      id: 'entrance',
      src: 'images/exterior-entrance.jpg',
      alt: "Reddy's Nilaya — Grand Entrance of Nandini Luxury PG Co-Living",
      category: 'Property Exterior',
      title: 'Grand Entrance & Reception',
      size: 'large',
    },
    {
      id: 'twin-room',
      src: 'images/room-twin-sharing.jpg',
      alt: 'Twin Sharing Room with study desks and wardrobe',
      category: 'Accommodations',
      title: 'Twin Sharing Suite',
      size: 'tall',
    },
    {
      id: 'gym',
      src: 'images/gym-fitness.jpg',
      alt: 'In-House Fitness Studio and Gym with modern equipment',
      category: 'Wellness & Fitness',
      title: 'On-Site Fitness Center',
      size: 'tall',
    },
    {
      id: 'dining-lounge',
      src: 'images/dining-hall.jpg',
      alt: 'Resident Dining Hall with Smart TV and ambient lighting',
      category: 'Dining & Social',
      title: 'Resident Dining Lounge',
      size: 'large',
    },
    {
      id: 'food',
      src: 'images/food-dining.jpg',
      alt: 'Fresh home-cooked daily meals (breakfast, lunch, dinner)',
      category: 'Dining',
      title: 'Fresh Daily Home Cooking',
      size: 'third',
    },
    {
      id: 'elevator',
      src: 'images/elevator.jpg',
      alt: 'Modern automatic stainless steel elevator with granite finish',
      category: 'Amenities',
      title: 'Automatic Elevator',
      size: 'third',
    },
    {
      id: 'smart-tv',
      src: 'images/amenity-smart-tv.jpg',
      alt: 'Wall-mounted Smart LED TV in resident room',
      category: 'Entertainment',
      title: 'In-Room Smart LED TV',
      size: 'third',
    },
    {
      id: 'triple-room',
      src: 'images/room-triple-sharing.jpg',
      alt: 'Triple Sharing Room with wooden frame beds',
      category: 'Accommodations',
      title: 'Triple Sharing Layout',
      size: 'large',
    },
    {
      id: 'terrace',
      src: 'images/terrace-sunset.jpg',
      alt: 'Panoramic rooftop sunset view over Doddakannelli, Bengaluru',
      category: 'Rooftop',
      title: 'Rooftop Sunset Vista',
      size: 'tall',
    },
    {
      id: 'triple-alt',
      src: 'images/room-triple-sharing-alt.jpg',
      alt: 'Triple Sharing bedroom with window and curtains',
      category: 'Accommodations',
      title: 'Natural Light & Ventilation',
      size: 'half',
    },
    {
      id: 'reception',
      src: 'images/reception-lounge.jpg',
      alt: 'Ground floor reception and resident lounge with seating',
      category: 'Living',
      title: 'Reception Lounge',
      size: 'half',
    },
  ] as GalleryPhoto[],

  // ── Authentic Property Cards for Card Fan Carousel ─────
  carouselCards: [
    {
      imgUrl: 'images/exterior-entrance.jpg',
      alt: "Reddy's Nilaya — Grand Entrance of Nandini Luxury PG Co-Living",
      category: 'Exterior',
      caption: 'Grand Entrance & Reception',
      linkUrl: '#gallery',
    },
    {
      imgUrl: 'images/room-twin-sharing.jpg',
      alt: 'Twin Sharing Room with study desks and wardrobe',
      category: 'Accommodations',
      caption: 'Twin Sharing Suite',
      linkUrl: '#rooms',
    },
    {
      imgUrl: 'images/gym-fitness.jpg',
      alt: 'In-House Fitness Studio and Gym with modern equipment',
      category: 'Fitness',
      caption: 'On-Site Fitness Gym',
      linkUrl: '#experience',
    },
    {
      imgUrl: 'images/dining-hall.jpg',
      alt: 'Resident Dining Hall with Smart TV and ambient lighting',
      category: 'Dining',
      caption: 'Resident Dining Lounge',
      linkUrl: '#experience',
    },
    {
      imgUrl: 'images/food-dining.jpg',
      alt: 'Fresh home-cooked daily meals (breakfast, lunch, dinner)',
      category: 'Meals',
      caption: 'Fresh Home-Cooked Meals',
      linkUrl: '#experience',
    },
    {
      imgUrl: 'images/elevator.jpg',
      alt: 'Modern automatic stainless steel elevator with granite finish',
      category: 'Amenities',
      caption: 'Automatic Passenger Elevator',
      linkUrl: '#experience',
    },
    {
      imgUrl: 'images/room-triple-sharing.jpg',
      alt: 'Triple Sharing Room with wooden frame beds',
      category: 'Accommodations',
      caption: 'Triple Sharing Layout',
      linkUrl: '#rooms',
    },
    {
      imgUrl: 'images/terrace-sunset.jpg',
      alt: 'Panoramic rooftop sunset view over Doddakannelli, Bengaluru',
      category: 'Rooftop',
      caption: 'Rooftop Sunset Vista',
      linkUrl: '#home',
    },
    {
      imgUrl: 'images/reception-lounge.jpg',
      alt: 'Ground floor reception and resident lounge with seating',
      category: 'Living',
      caption: 'Ground Floor Reception Lounge',
      linkUrl: '#gallery',
    },
    {
      imgUrl: 'images/room-triple-sharing-alt.jpg',
      alt: 'Triple Sharing bedroom with window and curtains',
      category: 'Accommodations',
      caption: 'Natural Light & Airflow',
      linkUrl: '#rooms',
    },
  ] as CarouselCard[],

  // ── Social Media Channels ─────────────────────────────
  social: {
    instagram: 'https://www.instagram.com/nandiniluxurycoliving?stkn=MXJzNHVyOWlvbHZ4Zw==',
    instagramHandle: '@nandiniluxurycoliving',
  },

  // ── SEO Metadata ───────────────────────────────────────
  seo: {
    title: 'Nandini Luxury Co-Living | Premium PG in Doddakannelli, Bengaluru',
    description:
      'Nandini Luxury Co-Living in Doddakannelli, Bengaluru offers private, twin-sharing and triple-sharing accommodation options. Enquire for current availability.',
  },
};
