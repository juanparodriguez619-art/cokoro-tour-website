/**
 * CoKoro Tour — editable content
 * ---------------------------------------------------------------------
 * Everything in this file is plain data. Add, remove, or edit entries
 * and the site updates automatically — no HTML editing required.
 *
 * Tours below are real (from GetYourGuide, added 2026-09-10). Guides are
 * still placeholders. Reviews are real, copied from the Kobe Hidden Gems
 * tour's GetYourGuide page. See README.md for a full editing guide.
 * ---------------------------------------------------------------------
 */

// General GetYourGuide profile page — used by the header/hero/sticky
// "Book Now" buttons, which aren't tied to one specific tour. Each tour
// below also has its own specific bookingUrl for its own "Book" button.
const DEFAULT_BOOKING_URL = "https://www.getyourguide.com/-s781057/";

/**
 * Kansai regions shown as filter tabs on tours.html. "id" must match the
 * "region" field on each tour below. A region with no matching tours
 * automatically shows a "Coming soon" message — add tours for it any time.
 */
const REGIONS = [
  { id: "kobe", name: "Kobe" },
  { id: "osaka", name: "Osaka" },
  { id: "kyoto", name: "Kyoto" },
  { id: "nara", name: "Nara" },
];

const TOURS = [
  {
    id: "nada-sake-district",
    name: "Kobe: Nada Sake District Guided Tour with Tastings",
    image: "tour-sake-tasting",
    region: "kobe",
    duration: "2.5 hours",
    area: "Nada, Kobe",
    groupSize: "Up to 8",
    price: "10,000",
    currency: "\u00a5",
    perPerson: true,
    description: "Learn the history and craftsmanship of Kobe's Nada sake district. Depending on the day, you visit two or three sake breweries, learn how sake is made, and taste premium sake.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Visit three famous Nada sake breweries (two on Mondays and Tuesdays)",
      "Learn the full story of sake, from tradition to innovation",
      "Taste carefully selected premium sake at each brewery",
      "Visit the brewery behind Fukuju, the sake served at the Nobel Prize banquet",
      "Use a tasting card and pairing guide to find the sake you like best",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at Hanshin Uozaki Station",
      },
      {
        title: "Hamafukutsuru",
        note: "Guided tour",
        duration: "40 min",
      },
      {
        title: "Kiku-Masamune Sake Brewery Museum",
        note: "Guided tour",
        duration: "45 min",
      },
      {
        title: "Hakutsuru Sake Brewery Museum",
        note: "Guided tour",
        duration: "40 min",
      },
      {
        title: "Tour ends at Hanshin Uozaki Station",
      },
    ],
    includes: [
      "Guided tour of the Nada sake district",
      "Visit to the Kiku-Masamune Sake Brewery Museum",
      "Visit to the Hakutsuru Sake Brewery Museum",
      "Visit to Kobe Shushinkan (the Fukuju brewery)",
      "Sake tasting",
      "English-speaking guide",
    ],
    excludes: [
      "Meals",
      "Personal expenses",
      "Additional tastings",
    ],
    meeting: {
      name: "Hanshin Uozaki Station",
      address: "4-7 Uozaki-nakamachi, Higashinada Ward, Kobe, Hyogo 658-0083",
    },
    notes: [
      "Hamafukutsuru is closed on Mondays and Kiku-Masamune on Tuesdays, so Monday and Tuesday tours visit two historic breweries.",
      "Walking is kept to a minimum.",
      "Guests must be 20 or older.",
      "The tour is in English.",
      "Not suitable for pregnant guests.",
    ],
    bookingUrl: "https://www.getyourguide.com/kobe-l32593/kobe-nada-sake-district-guided-tour-with-tastings-t1408347/?ranking_uuid=731ce1ec-1bf7-499f-8347-68748fd5ea30",
  },
  {
    id: "kobe-maiko-wagyu",
    name: "Kobe: Guided Local Tour with Premium Wagyu Experience",
    image: "gallery-bridgecandid",
    region: "kobe",
    duration: "3 hours",
    area: "Maiko, Kobe",
    groupSize: "Up to 8",
    price: "15,000",
    currency: "\u00a5",
    perPerson: true,
    description: "Explore a quiet, local side of Kobe, then enjoy premium Japanese wagyu at a hidden local restaurant. A great fit for travelers who want to avoid the crowds and take their time.",
    language: "English, Japanese",
    freeCancellation: true,
    highlights: [
      "Explore Kobe on a walking tour led by a local guide",
      "Discover the quiet side of Kobe that most Osaka and Kyoto visitors miss",
      "Enjoy sea and mountain views around the Akashi Kaikyo Bridge",
      "Choose Japanese wagyu or fresh local seafood for lunch",
      "Relax with free time for photos, shopping and soaking up the atmosphere",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at Maiko Station",
      },
      {
        transit: "Walk",
        duration: "5 min",
      },
      {
        title: "Maiko Marine Promenade",
        note: "Guided tour inside the Akashi Kaikyo Bridge, with an observation deck over the sea. Your guide shares the bridge's story and Kobe's history.",
        duration: "1 hour",
      },
      {
        transit: "Walk",
        duration: "5 min",
      },
      {
        title: "Azur Maiko",
        note: "Rest, free time and views across the sea to Awaji Island.",
        duration: "30 min",
      },
      {
        transit: "Walk",
        duration: "5 min",
      },
      {
        title: "Ajitetsu Maiko",
        note: "Premium Japanese wagyu, with staff teaching you how to grill it and enjoy it at its best.",
        duration: "1 hour",
      },
    ],
    includes: [
      "English-speaking local guide",
      "Great views of Kobe",
      "Admission ticket for the Maiko Marine Promenade (Akashi Kaikyo Bridge)",
      "Premium Japanese wagyu experience",
    ],
    excludes: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Personal expenses",
    ],
    meeting: {
      name: "Maiko Station",
      address: "3-1 Higashimaiko-cho, Tarumi Ward, Kobe, Hyogo 655-0047",
    },
    notes: [
      "Maiko Station is about 50 minutes from JR Osaka Station.",
      "The price includes lunch or dinner. Anything extra you order is paid by you.",
      "The wagyu meal can be customized, and vegan meals can be arranged. Tell us your wishes before the tour.",
    ],
    bookingUrl: "https://www.getyourguide.com/kobe-l32593/kobe-half-day-guided-tour-osaka-departure-available-t1397678/?ranking_uuid=731ce1ec-1bf7-499f-8347-68748fd5ea30",
  },
  {
    id: "osaka-private-walking-tour",
    name: "Osaka: Customizable Private Walking Tour with a Local Guide",
    image: "tour-osaka-walking",
    region: "osaka",
    duration: "3\u20136 hours",
    area: "Osaka Castle, Shinsekai & Dotonbori",
    groupSize: "Private group",
    price: "14,000",
    currency: "\u00a5",
    perPerson: true,
    description: "Explore Osaka on a private walking tour built around your interests. A typical route starts at Osaka Castle, rides the subway to Shinsekai for Tsutenkaku and crispy kushikatsu, then finishes in Dotonbori with the Glico sign, street food, and the quiet alleys of Hozenji Yokocho.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Explore Osaka on a private walking tour with a local guide",
      "Customize the tour to your interests and pace",
      "Experience the city's history, culture and food with your guide",
      "Visit landmarks such as Osaka Castle and lively Dotonbori",
      "Your guide helps with public transport, so there's no stress",
    ],
    itineraryNote: "A sample route only. Your guide builds the real one with you, around what interests you most.",
    itinerary: [
      {
        title: "Meet at Osakajokoen Station",
      },
      {
        title: "Osaka Castle",
        note: "Photos, sightseeing and a guided walk.",
        duration: "1 hour",
        tags: [
          "Optional",
          "Entry fee extra",
        ],
      },
      {
        transit: "Train",
        duration: "10 min",
      },
      {
        title: "Shinsekai",
        note: "A nostalgic early-20th-century atmosphere and local specialties like kushikatsu.",
        duration: "1 hour",
        tags: [
          "Optional",
        ],
      },
      {
        title: "Tsutenkaku Tower",
        duration: "30 min",
        tags: [
          "Optional",
          "Entry fee extra",
        ],
      },
      {
        transit: "Train",
        duration: "15 min",
      },
      {
        title: "Dotonbori",
        note: "The Glico sign, canal-side street food and the quiet alleys of Hozenji Yokocho.",
        duration: "1 hour",
        tags: [
          "Optional",
        ],
      },
    ],
    includes: [
      "Dedicated English-speaking local guide",
      "Pre-tour questionnaire and a customized itinerary",
      "Public transport navigation and support",
    ],
    excludes: [
      "Public transport fares (paid on the spot)",
      "Food and drinks",
      "Attraction entry fees, such as the Osaka Castle main tower ticket",
    ],
    meeting: {
      name: "Osakajokoen Station",
      address: "3 Osakajo, Chuo Ward, Osaka 540-0002",
    },
    notes: [
      "The itinerary is 100% flexible: history, food, shopping, photo spots, whatever you enjoy.",
      "Travel is by public transport (train/subway) and on foot only. No private car is included.",
      "The tour mainly covers central Osaka.",
      "If you want to enter a paid attraction, you also cover your guide's entry fee.",
      "No alcohol or drugs.",
      "Not suitable for guests with mobility impairments.",
    ],
  },
  {
    id: "osaka-castle-onigiri-tour",
    name: "Osaka: Castle Tour with Main Tower Entry and Onigiri Tasting",
    image: "tour-osaka-castle",
    region: "osaka",
    duration: "2.5 hours",
    area: "Osaka Castle",
    groupSize: "Up to 8",
    price: "8,500",
    currency: "\u00a5",
    perPerson: true,
    description: "Walk the grounds of Osaka Castle with a guide to learn about its samurai history and architecture, with entry to the main tower included. Finish with an authentic onigiri tasting at a local shop, Japan's original soul food.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Stroll through Osaka Castle on a guided walking tour",
      "Learn about the castle's history and architecture with your guide",
      "Visit the main gate, the giant stones and the best photo spots",
      "Taste authentic onigiri at a local shop",
    ],
    itinerary: [
      {
        title: "Meet at Morinomiya Station",
      },
      {
        title: "Osaka Castle",
        note: "Sightseeing, guided tour and a walk through the grounds.",
        duration: "1 hour",
      },
      {
        title: "Hokoku Shrine",
        duration: "20 min",
      },
      {
        title: "Nigiritate onigiri shop (Morinomiya Q's Mall)",
        note: "Guided tour and tasting.",
        duration: "30 min",
      },
      {
        title: "Tour ends at Morinomiya Station",
      },
    ],
    includes: [
      "English-speaking guide on Osaka Castle's history and architecture",
      "Stories about samurai traditions and castle defense",
      "Panoramic views of Osaka",
      "Entry to the main castle tower",
      "Authentic Japanese onigiri tasting",
    ],
    excludes: [
      "Personal expenses",
      "Hotel pickup and drop-off",
    ],
    meeting: {
      name: "Morinomiya Station",
      address: "1-1-45 Morinomiya-chuo, Chuo Ward, Osaka 540-0003",
    },
    notes: [
      "This tour includes an outdoor walk in the morning. Wear comfortable shoes and weather-appropriate clothing.",
      "Wheelchair accessible.",
    ],
  },
  {
    id: "osaka-sushi-sake-pairing",
    name: "Osaka: 8-Piece Sushi & 3-Sake Pairing with a Local Guide",
    image: "tour-sushi-pairing",
    region: "osaka",
    duration: "2 hours",
    area: "Umeda, Osaka",
    groupSize: "Up to 6",
    price: "19,800",
    currency: "\u00a5",
    perPerson: true,
    description: "Enjoy an 8-piece sushi course in Osaka with three kinds of sake. A local guide explains each dish and each sake, and everything is included in the price: no extra payment at the restaurant.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Enjoy 8 pieces of nigiri sushi plus tempura, chawanmushi and miso soup in Umeda",
      "Taste three sakes chosen to match the sushi, including Kiku-Masamune from Kobe's Nada district",
      "Learn what makes each topping special and how to enjoy sushi the Japanese way",
      "Pairings are all included, with nothing extra to pay at the restaurant",
      "A small group of up to 6, meeting at JR Osaka Station",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at JR Osaka Station",
        note: "Central South Exit",
      },
      {
        transit: "Walk",
        duration: "10 min",
      },
      {
        title: "Sushi Matsui Osaka Umeda",
        note: "Your guide explains the fish, the season and how to eat each piece as it arrives.",
        duration: "1.5 hours",
      },
    ],
    includes: [
      "Sushi course: 8 nigiri, appetizer, small side dish, 3 tempura, chawanmushi with ikura, and red miso soup with aosa",
      "Sake pairing: 3 kinds (for example Kiku-Masamune Shiboritate, Amami, Suigei)",
      "Local guide (explanations in English)",
    ],
    excludes: [
      "Additional food and drinks",
      "Transfer to the meeting point",
      "Hotel pickup and drop-off",
    ],
    meeting: {
      name: "JR Osaka Station (Central South Exit)",
      address: "3-1-1 Umeda, Kita Ward, Osaka 530-0001",
    },
    notes: [
      "A minimum of 2 guests per booking is required.",
      "The legal drinking age in Japan is 20, and you may be asked for ID. Guests under 20 can join and enjoy the same sushi course without the sake pairing.",
      "Sake brands can change with the season.",
      "Please arrive 10 minutes early. The meal starts on time and we can't wait for late arrivals.",
      "Your guide joins you during the meal to explain each dish and sake, but does not eat with you.",
      "Extra drinks can be ordered and paid for directly at the restaurant.",
      "If there is something you can't eat, tell us when you book. Your guide will confirm with you before the tour, and some ingredients can be changed or lightly seared.",
      "Not suitable for guests with fish or shellfish allergies, other food allergies or gluten allergy, vegans, vegetarians, wheelchair users or pregnant guests.",
    ],
  },
  {
    id: "osaka-sushi-brewery-tour",
    name: "Osaka: 8-Piece Sushi & Sake Brewery Tour",
    image: "tour-sake",
    region: "osaka",
    duration: "3.5 hours",
    area: "Nada, Kobe \u2192 Osaka",
    groupSize: "Up to 6",
    price: "19,800",
    currency: "\u00a5",
    perPerson: true,
    description: "Learn about 360 years of sake making at a traditional brewery, then enjoy an 8-piece sushi course in Osaka with three kinds of sake. The meal and the sake are included.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Learn sake-making techniques on a tour of the Kiku-Masamune brewery",
      "Enjoy 8 pieces of nigiri sushi plus tempura, chawanmushi and miso soup in Osaka",
      "Taste three paired sakes, including Kiku-Masamune from Kobe's Nada district",
      "Meal and sake pairing are included, with no extra charges at the restaurant",
      "Taste a variety of sake and learn the history of this traditional drink",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at Uozaki Station",
      },
      {
        title: "Kiku-Masamune Sake Brewery Museum",
        note: "Sightseeing and a guided tour of a brewery with 360 years of tradition, ending with a tasting.",
        duration: "1 hour",
      },
      {
        transit: "Train to Osaka",
        duration: "30 min",
      },
      {
        title: "Sushi Matsui Osaka Umeda",
        note: "Counter seats in front of the sushi chef, with your guide interpreting and explaining each pairing.",
        duration: "1.5 hours",
      },
    ],
    includes: [
      "Brewery guide and free sake tasting",
      "Local guide (explanations in English)",
      "8 pieces of sushi",
      "5 other dishes (tempura, chawanmushi, miso soup and more)",
      "3 paired sakes, including Kiku-Masamune",
    ],
    excludes: [
      "Additional food and drinks",
      "Transfer to the meeting point",
      "Hotel pickup and drop-off",
    ],
    meeting: {
      name: "Uozaki Station",
      address: "4-7 Uozaki-nakamachi, Higashinada Ward, Kobe, Hyogo 658-0083",
    },
    notes: [
      "A minimum of 2 guests per booking is required.",
      "The legal drinking age in Japan is 20, and you may be asked for ID. Guests under 20 can join and enjoy the same sushi course without the sake pairing.",
      "Sake brands can change with the season.",
      "Please arrive 10 minutes early. The meal starts on time and we can't wait for late arrivals.",
      "Your guide joins you during the meal to explain each dish and sake, but does not eat with you.",
      "If there is something you can't eat, tell us when you book. Your guide will confirm with you before the tour, and some ingredients can be changed or lightly seared.",
      "Not suitable for guests with fish or shellfish allergies.",
    ],
  },
  {
    id: "osaka-sumiyoshi-breakfast",
    name: "Osaka: Sumiyoshi Taisha Shrine Tour with Breakfast",
    image: "tour-sumiyoshi-breakfast",
    region: "osaka",
    duration: "2.5 hours",
    area: "Sumiyoshi Taisha, Osaka",
    groupSize: "Up to 7",
    price: "9,900",
    currency: "\u00a5",
    perPerson: true,
    description: "Join a guided tour of Osaka's Sumiyoshi Taisha, one of Japan's oldest shrines. Learn about Shinto customs, take part in the purification ritual, and enjoy a traditional Japanese breakfast at a retro caf\u00e9.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Learn the cultural meaning of a morning visit to Sumiyoshi Taisha",
      "Hear about Shinto history and customs from your guide",
      "Take part in the traditional purification ritual at the shrine's water pavilion",
      "Cross the famous arched bridge and learn its spiritual significance",
      "Enjoy breakfast at a retro caf\u00e9 and learn about Japanese morning culture",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at Sumiyoshitaisha Station",
        note: "Nankai line",
      },
      {
        title: "Sumiyoshi Taisha",
        note: "Photos, sightseeing and a guided tour, including the omikuji fortune ritual with English translation.",
        duration: "1.5 hours",
      },
      {
        title: "Local retro caf\u00e9",
        note: "A traditional Japanese breakfast.",
        duration: "30 min",
      },
      {
        title: "Tour ends at Sumiyoshitaisha Station",
      },
    ],
    includes: [
      "Guided tour of Sumiyoshi Taisha",
      "Guidance on Shinto etiquette",
      "Omikuji fortune experience, with English translation",
      "Breakfast at a retro caf\u00e9",
    ],
    excludes: [
      "Transfer to the meeting point",
      "Personal expenses",
    ],
    meeting: {
      name: "Sumiyoshitaisha Station (Nankai)",
      address: "3 Nagamine-cho, Sumiyoshi Ward, Osaka 558-0044",
    },
    notes: [
      "The tour starts at 9:00.",
      "Wear comfortable shoes. Bring a camera and some cash.",
      "The tour includes cultural and religious explanations, and suits guests interested in Japanese culture and history.",
      "Not allowed: drones, alcohol and drugs, chewing gum, and recording.",
      "Not suitable for wheelchair users.",
    ],
  },
  {
    id: "osaka-sumiyoshi-tram-tour",
    name: "Osaka: Sumiyoshi Taisha Tour with a Retro Tram Ride",
    image: "tour-sumiyoshi-tram",
    region: "osaka",
    duration: "2 hours",
    area: "Tennoji \u2192 Sumiyoshi, Osaka",
    groupSize: "Up to 8",
    price: "9,600",
    currency: "\u00a5",
    perPerson: true,
    description: "Discover Osaka on a guided tour: ride a retro tram, visit Sumiyoshi Taisha, and browse a retro shopping arcade with street food. Your guide helps you talk with local shopkeepers.",
    language: "English",
    freeCancellation: true,
    highlights: [
      "Ride Osaka's retro tram and see the city from a unique angle",
      "Visit Sumiyoshi Taisha, a shrine deeply rooted in everyday Japanese life",
      "Stroll a retro arcade, with street food and shopping",
      "Your guide helps you communicate with local shopkeepers",
      "Your guide handles directions, so you can enjoy the trip with peace of mind",
    ],
    itineraryNote: "A sample itinerary. Details can change.",
    itinerary: [
      {
        title: "Meet at Tennoji Station",
      },
      {
        transit: "Retro tram (Hankai line)",
        duration: "20 min",
      },
      {
        title: "Sumiyoshi Taisha",
        note: "Photos, sightseeing, and a guided walk across the famous bridge.",
        duration: "45 min",
      },
      {
        title: "Konahama Shopping Street",
        note: "A Showa-era retro arcade with local snacks, traditional geta sandals and Japanese tableware.",
        duration: "45 min",
        tags: [
          "Food and shopping extra",
        ],
      },
      {
        title: "Tour ends at Kohama Station",
      },
    ],
    includes: [
      "Guided tour of a Showa-retro shopping street",
      "Visit to Sumiyoshi Taisha",
      "Help with shopping and tasting",
    ],
    excludes: [
      "Transfer to the meeting point",
      "Personal expenses",
      "Food and drinks",
    ],
    meeting: {
      name: "Tennoji Station",
      address: "10-45 Hidenin-cho, Tennoji Ward, Osaka 543-0055",
    },
    notes: [
      "Meet at the central exit of JR Tennoji Station or the west exit of Osaka Metro Midosuji Line Tennoji Station.",
      "The tour can involve long stretches of walking or standing. Wear comfortable shoes and bring a camera and some cash.",
      "The tour takes place in an area where foreign-language support is limited.",
      "Not allowed: pets and smoking.",
      "Not suitable for guests with mobility impairments.",
    ],
  },
];

/**
 * Guides — shown as a simple photo + name grid, nothing else.
 * Add up to 4 (or more — the grid wraps automatically).
 */
const GUIDES = [
  {
    name: "Kazu",
    image: "guide-kazu",
  },
  {
    name: "Airi",
    image: "guide-airi",
  },
  {
    name: "Juan Pablo",
    image: "guide-portrait",
  },
  {
    name: "Shoma",
    image: "guide-shoma",
  },
];

/**
 * Reviews — real guest reviews, copied from the Kobe Hidden Gems tour's
 * GetYourGuide page (added 2026-09-10), translated to English. The GYG
 * page shows an overall 4.8/5 based on 6 reviews; these are the 4 that
 * were provided — add the remaining 2 here the same way when you have them.
 */
const REVIEWS = [
  {
    name: "Jiruchchaya \u2014 Thailand",
    initials: "J",
    image: "review-ring",
    rating: 5,
    quote:
      "This trip was so much fun \u2014 way more than I expected. From the Maiko Marine Promenade to Sumaura Park, every stop had beautiful views and great photo opportunities. Our guide Kazu was wonderful, always answering questions and explaining things along the way, which made the whole trip relaxed and enjoyable. Truly worth it \u2014 100% recommend.",
  },
  {
    name: "Gerardo \u2014 Mexico",
    initials: "G",
    image: "review-sushi",
    rating: 5,
    quote:
      "Kazu was an excellent guide \u2014 the best tour guide. What I loved most is that he could answer every question we asked, and when he couldn't, he'd look it up for us. I travel a lot, and he was the best guide I've had anywhere in the world.",
  },
  {
    name: "GetYourGuide Traveler \u2014 Switzerland",
    initials: "GT",
    image: "review-bekobe",
    rating: 5,
    quote:
      "Airi was perfect \u2014 so kind and warm. She took us to beautiful, little-known spots and even walked with us to the restaurant afterward. It was wonderful, thank you so much.",
  },
  {
    name: "GetYourGuide Traveler \u2014 Japan",
    initials: "GT",
    image: "review-sake-sign",
    rating: 5,
    quote:
      "A wonderful experience! Our guide was friendly, attentive, and caring throughout the whole tour. She showed us Kobe in a genuine, enjoyable way, and everything was very well organized. I'd absolutely do it again and recommend it 100%.",
  },
  {
    name: "Alvaro \u2014 United States",
    initials: "A",
    image: "review-alvaro",
    rating: 5,
    quote:
      "My experience with Juan was wonderful. He's a very kind person and really knows the area well. I enjoyed the tastings on the Kobe tour.",
  },
];
