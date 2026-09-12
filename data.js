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
    id: "akashi-castle-food-tour",
    name: "Akashi Castle & Local Food Tour with Missions (Osaka Departure)",
    image: "tour-akashi-castle",
    region: "kobe",
    duration: "1.5 hours",
    area: "Akashi",
    groupSize: "Up to 8",
    price: "6,500",
    currency: "¥",
    perPerson: true,
    description:
      "An interactive, mission-based walk through Akashi: explore Akashi Castle Park's hidden photo spots overlooking the Akashi Kaikyo Bridge, then head into the lively Uontana arcade to order and taste local specialties like akashiyaki with your guide.",
    bookingUrl:
      "https://www.getyourguide.com/akashi-l150833/akashi-castle-food-tour-with-missions-osaka-departure-t1467623/?ranking_uuid=731ce1ec-1bf7-499f-8347-68748fd5ea30",
  },
  {
    id: "kobe-hidden-gems",
    name: "Kobe Hidden Gems Half-Day Tour (Osaka Departure Available)",
    image: "gallery-bridgecandid", // TEMP placeholder — no photo was assigned to this tour; swap in a real one when available
    region: "kobe",
    duration: "4.5 hours",
    area: "Maiko / Sumaura, Kobe",
    groupSize: "Up to 8",
    price: "11,000",
    currency: "¥",
    perPerson: true,
    description:
      "Go beyond Osaka and Kyoto with a relaxed, local side of Japan: walk the Maiko Marine Promenade beneath Akashi Kaikyo Bridge, unwind at Azur Maiko beach or Sumaura Park, and enjoy a wagyu or fresh-seafood lunch with a friendly local guide.",
    bookingUrl:
      "https://www.getyourguide.com/kobe-l32593/kobe-half-day-guided-tour-osaka-departure-available-t1397678/?ranking_uuid=731ce1ec-1bf7-499f-8347-68748fd5ea30",
  },
  {
    id: "nada-sake-district",
    name: "Kobe Nada Sake District Guided Tour with Tastings",
    image: "tour-sake-tasting",
    region: "kobe",
    duration: "3 hours",
    area: "Nada, Kobe",
    groupSize: "Up to 8",
    price: "10,000",
    currency: "¥",
    perPerson: true,
    description:
      "Visit three legendary Nada sake breweries — Hamafukutsuru, Kikumasamune, and Hakutsuru — to learn traditional brewing methods and taste premium sake, including Fukuju, the sake served at Nobel Prize banquets. Guests must be 20+; not recommended for pregnant travelers.",
    bookingUrl:
      "https://www.getyourguide.com/kobe-l32593/kobe-nada-sake-district-guided-tour-with-tastings-t1408347/?ranking_uuid=731ce1ec-1bf7-499f-8347-68748fd5ea30",
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
    name: "Jiruchchaya — Thailand",
    initials: "J",
    image: "review-ring",
    rating: 5,
    quote:
      "This trip was so much fun — way more than I expected. From the Maiko Marine Promenade to Sumaura Park, every stop had beautiful views and great photo opportunities. Our guide Kazu was wonderful, always answering questions and explaining things along the way, which made the whole trip relaxed and enjoyable. Truly worth it — 100% recommend.",
  },
  {
    name: "Gerardo — Mexico",
    initials: "G",
    image: "review-sushi",
    rating: 5,
    quote:
      "Kazu was an excellent guide — the best tour guide. What I loved most is that he could answer every question we asked, and when he couldn't, he'd look it up for us. I travel a lot, and he was the best guide I've had anywhere in the world.",
  },
  {
    name: "GetYourGuide Traveler — Switzerland",
    initials: "GT",
    image: "review-bekobe",
    rating: 5,
    quote:
      "Airi was perfect — so kind and warm. She took us to beautiful, little-known spots and even walked with us to the restaurant afterward. It was wonderful, thank you so much.",
  },
  {
    name: "GetYourGuide Traveler — Japan",
    initials: "GT",
    rating: 5,
    quote:
      "A wonderful experience! Our guide was friendly, attentive, and caring throughout the whole tour. She showed us Kobe in a genuine, enjoyable way, and everything was very well organized. I'd absolutely do it again and recommend it 100%.",
  },
];
