export default [
  {
    id: 0,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Paris`,
    },
    title: `Luxurious Apartment Center of Paris`,
    description: `We offer our luxurious apartment filled with light and Parisian charm, in the heart of Saint Germain des Près... With outdoor markets near by, along with lovely shops and French cafes. Within walking distance from many historical monuments and museums. Enjoy the beauty and romance of Paris!`,
    type: `Apartment`,
    rating: 4.78,
    bedroomsNum: 2,
    guestsMaxNum: 4,
    price: 176,
    facilities: [
      {type: `Wi-Fi`, isAvailable: true},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: true},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: false},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/13/260/300`,
      `https://picsum.photos/id/14/260/300`,
      `https://picsum.photos/id/65/260/300`,
      `https://picsum.photos/id/43/260/300`,
      `https://picsum.photos/id/54/260/300`
    ],
    isPremium: true,
    isFavorite: true,
    host: {
      avatar: `https://picsum.photos/id/237/74`,
      name: `Joel`,
      isSuper: true
    },
    coordinates: [52.3909553943508, 4.85309666406198]
  },

  {
    id: 1,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Cologne`,
    },
    title: `A beautiful view of Cologne from the 27th floor`,
    description: `Very nice flat with balcony well-equipped in the center of Cologne near Barbarossaplatz. You will find a bus stop (buses and tram) in front of the building. The building itself provide bars and restaurants and nearby you'll find a supermarket that opens until midnight, cash machine and more restaurants. A modern elevator brings you to the 27th floor and from the apartment you will have a beautiful view over Cologne. A nice cot or crib can be carried without extra costs. Parking lot included.`,
    type: `Apartment`,
    rating: 4.45,
    bedroomsNum: 2,
    guestsMaxNum: 4,
    price: 98,
    facilities: [
      {type: `Wi-Fi`, isAvailable: true},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: true},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: false},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/23/260/300`,
      `https://picsum.photos/id/14/260/300`,
      `https://picsum.photos/id/65/260/300`,
      `https://picsum.photos/id/48/260/300`,
      `https://picsum.photos/id/44/260/300`
    ],
    isPremium: false,
    isFavorite: false,
    host: {
      avatar: `https://picsum.photos/id/27/74`,
      name: `Ellie`,
      isSuper: false
    },
    coordinates: [52.369553943508, 4.85309666406198]
  },

  {
    id: 2,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Brussels`,
    },
    title: `Big rooftop apartment in the heart of Brussels`,
    description: `Attractive furnished flat, ideal for couples or 4 people, with kitchen and bathroom. Including two (!) charming terraces overlooking Brussels rooftops and a view on the Palais de Justice. Ideally located in the heart of the city, it's a five-minutes walk from "Manneken Pis" and from the Grand Place. The apartment is situated on the fourth floor and is only accessible by stairs, no elevator. `,
    type: `Apartment`,
    rating: 4.96,
    bedroomsNum: 2,
    guestsMaxNum: 4,
    price: 133,
    facilities: [
      {type: `Wi-Fi`, isAvailable: false},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: false},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: false},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/73/260/300`,
      `https://picsum.photos/id/84/260/300`,
      `https://picsum.photos/id/63/260/300`,
      `https://picsum.photos/id/41/260/300`,
      `https://picsum.photos/id/55/260/300`
    ],
    isPremium: false,
    isFavorite: false,
    host: {
      avatar: `https://picsum.photos/id/21/74`,
      name: `Dina`,
      isSuper: true
    },
    coordinates: [52.3909553943508, 4.929309666406198]
  },

  {
    id: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    title: `Eco-friendly Double Room in Museum Quarter`,
    description: `At Conscious Hotel Museum Square we think only about your well-being, and that of the planet. This means we make our choices as sustainable as possible, we re-use and recycle and we only serve organic food and drinks. We have biodegradable furniture and use recycled or cradle to cradle materials, to name a few things. We have the best beds so you’ll sleep well, and we like to smile a lot because that makes everyone feel good. We’re super close to the Museum Square and we love this arty environment.`,
    type: `Hotel`,
    rating: 4.78,
    bedroomsNum: 1,
    guestsMaxNum: 2,
    price: 214,
    facilities: [
      {type: `Wi-Fi`, isAvailable: true},
      {type: `Heating`, isAvailable: true},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: true},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: true},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/124/260/300`,
      `https://picsum.photos/id/134/260/300`,
      `https://picsum.photos/id/651/260/300`,
      `https://picsum.photos/id/4/260/300`,
      `https://picsum.photos/id/534/260/300`
    ],
    isPremium: true,
    isFavorite: false,
    host: {
      avatar: `https://picsum.photos/id/90/74`,
      name: `Jesse`,
      isSuper: false
    },
    coordinates: [52.3809553943508, 4.939309666406198]
  },

  {
    id: 4,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Hamburg`,
    },
    title: `Cosy, bright room in green neighborhood`,
    description: `Welcome to my place! This big room is very comfortable, quiet and very sunny from early in the morning until sunset, even when it rains (very often) or snows (quite seldom) you can enjoy the bright and cosy daylight. From the doorstep it takes you only 20-25' to reach all hotspots, such as the famous Reeperbahn, the town hall, the Elbphilarmonie and all other major attractions. After an exhausting day you can come back home and relax in this peaceful and charming spot in Ottensen.`,
    type: `Private Room`,
    rating: 3.92,
    bedroomsNum: 1,
    guestsMaxNum: 2,
    price: 43,
    facilities: [
      {type: `Wi-Fi`, isAvailable: false},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: true},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: false},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: true},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/131/260/300`,
      `https://picsum.photos/id/144/260/300`,
      `https://picsum.photos/id/654/260/300`,
      `https://picsum.photos/id/453/260/300`,
      `https://picsum.photos/id/564/260/300`
    ],
    isPremium: false,
    isFavorite: false,
    host: {
      avatar: `https://picsum.photos/id/137/74`,
      name: `Lev`,
      isSuper: false
    },
    coordinates: [52.3929553943508, 4.90709666406198]
  },

  {
    id: 5,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Dusseldorf`,
    },
    title: `Living in history - Modern Country Cottage`,
    description: `The 1894 is carved into the stone over the door of our cosy cottage in the center of the old village across the street from the church. In reality, it is much older than that and was identified in the old village plans. After a complete renovation in 2012 the cottage is now modern country style - cosy but without Kitsch. It is the ideal starting point for your vacation in the Eifel region.`,
    type: `House`,
    rating: 4.18,
    bedroomsNum: 4,
    guestsMaxNum: 8,
    price: 630,
    facilities: [
      {type: `Wi-Fi`, isAvailable: true},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: false},
      {type: `Coffee machine`, isAvailable: true},
      {type: `Dishwasher`, isAvailable: true},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/143/260/300`,
      `https://picsum.photos/id/147/260/300`,
      `https://picsum.photos/id/635/260/300`,
      `https://picsum.photos/id/436/260/300`,
      `https://picsum.photos/id/544/260/300`
    ],
    isPremium: true,
    isFavorite: true,
    host: {
      avatar: `https://picsum.photos/id/253/74`,
      name: `Yara`,
      isSuper: true
    },
    coordinates: [52.359553943508, 4.88309666406198]
  },
  {
    id: 6,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Paris`,
    },
    title: `So much luxury apartment you've ever lived before in Paris`,
    description: `The problem with modern man isn’t that he’s evil. Quite the opposite. In general, for practical reasons, he prefers to be nice. It’s just he hates being bored. Boredom terrifies him… Nothing has changes since Pascal’s days: man is still trying to run away from his fears by distracting himself. It’s just now that the distractions have become so ubiquitous that they’ve taken God’s place.`,
    type: `Apartment`,
    rating: 4.99,
    bedroomsNum: 2,
    guestsMaxNum: 4,
    price: 99,
    facilities: [
      {type: `Wi-Fi`, isAvailable: true},
      {type: `Heating`, isAvailable: false},
      {type: `Kitchen`, isAvailable: true},
      {type: `Fridge`, isAvailable: true},
      {type: `Washing machine`, isAvailable: true},
      {type: `Coffee machine`, isAvailable: false},
      {type: `Dishwasher`, isAvailable: false},
      {type: `Towels`, isAvailable: true},
      {type: `Baby seat`, isAvailable: false},
      {type: `Cabel TV`, isAvailable: true},
    ],
    photos: [
      `https://picsum.photos/id/11/260/300`,
      `https://picsum.photos/id/17/260/300`,
      `https://picsum.photos/id/55/260/300`,
      `https://picsum.photos/id/42/260/300`,
      `https://picsum.photos/id/59/260/300`
    ],
    isPremium: false,
    isFavorite: false,
    host: {
      avatar: `https://picsum.photos/id/99/74`,
      name: `Frederic Beigbeder`,
      isSuper: true
    },
    coordinates: [52.3609553943508, 4.82309666406198]
  }
];

