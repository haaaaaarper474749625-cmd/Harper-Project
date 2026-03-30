import type { Breed } from "@/content/types";

export const breeds: Breed[] = [
  {
    slug: "shiba-inu",
    name: "Shiba Inu",
    countrySlug: "japan",
    countryName: "Japan",
    countryNameZh: "日本",
    group: "Spitz / Companion",
    size: "Small to medium",
    coat: "Double coat",
    lifespan: "12-15 years",
    temperament: ["Alert", "Independent", "Clean", "Bold"],
    summary:
      "Shiba Inu is one of the most recognizable Japanese breeds, known for its compact frame, fox-like expression, and lively confidence.",
    originStory:
      "Historically associated with hunting in mountainous terrain, the Shiba Inu developed into a resilient and agile breed. In modern times it has become globally popular as a companion dog with a strong sense of self and a distinct personality.",
    bestFor: ["Experienced owners", "Apartment living with exercise", "People who enjoy independent dogs"],
    facts: [
      "Known for the characteristic 'Shiba scream' vocalization.",
      "Often has a cat-like sense of cleanliness.",
      "Needs patient training because it tends to think independently.",
    ],
  },
  {
    slug: "akita-inu",
    name: "Akita Inu",
    countrySlug: "japan",
    countryName: "Japan",
    countryNameZh: "日本",
    group: "Working",
    size: "Large",
    coat: "Dense double coat",
    lifespan: "10-13 years",
    temperament: ["Dignified", "Loyal", "Reserved", "Protective"],
    summary:
      "Akita Inu carries a calm but powerful presence and is often associated with loyalty, composure, and deep attachment to family.",
    originStory:
      "Developed in northern Japan, the Akita was historically used for guarding and large-game hunting. Over time it became a national symbol of fidelity and courage, widely recognized through stories of unwavering companionship.",
    bestFor: ["Large homes", "Confident handlers", "Families wanting a watchful companion"],
    facts: [
      "Often bonds deeply with a narrow circle of people.",
      "Requires careful socialization from an early age.",
      "Its heavy coat makes climate planning important.",
    ],
  },
  {
    slug: "german-shepherd",
    name: "German Shepherd",
    countrySlug: "germany",
    countryName: "Germany",
    countryNameZh: "德国",
    group: "Herding / Working",
    size: "Large",
    coat: "Medium double coat",
    lifespan: "9-13 years",
    temperament: ["Intelligent", "Trainable", "Protective", "Energetic"],
    summary:
      "German Shepherd is a benchmark working dog, valued worldwide for its intelligence, versatility, and loyalty.",
    originStory:
      "Bred from regional herding dogs in Germany, the breed was refined with a focus on utility and structure. Its adaptability later made it a leading choice in policing, service work, and advanced training environments.",
    bestFor: ["Active households", "Training-focused owners", "Guarding or service-oriented roles"],
    facts: [
      "Excels when given structured work and mental challenges.",
      "Can develop behavior issues without adequate exercise.",
      "Widely used in service and detection roles.",
    ],
  },
  {
    slug: "dachshund",
    name: "Dachshund",
    countrySlug: "germany",
    countryName: "Germany",
    countryNameZh: "德国",
    group: "Hound",
    size: "Small",
    coat: "Smooth, long, or wire coat",
    lifespan: "12-16 years",
    temperament: ["Brave", "Curious", "Playful", "Stubborn"],
    summary:
      "Dachshund combines a small frame with a surprisingly bold hunting personality and one of the most iconic silhouettes in the dog world.",
    originStory:
      "Originally bred to pursue badgers and other burrowing animals, Dachshunds were designed with elongated bodies and a determined nature. That purposeful structure still shapes their behavior and care needs today.",
    bestFor: ["Small-home living", "Owners who enjoy playful dogs", "Homes prepared for back-care awareness"],
    facts: [
      "Its long back requires careful jumping and weight management.",
      "Despite its size, it has strong prey drive.",
      "Comes in multiple coat types, each with a slightly different grooming profile.",
    ],
  },
  {
    slug: "french-bulldog",
    name: "French Bulldog",
    countrySlug: "france",
    countryName: "France",
    countryNameZh: "法国",
    group: "Companion",
    size: "Small",
    coat: "Short smooth coat",
    lifespan: "10-12 years",
    temperament: ["Affectionate", "Charming", "Adaptable", "Social"],
    summary:
      "French Bulldog is a high-recognition urban companion breed, popular for its compact body, expressive face, and sociable temperament.",
    originStory:
      "Although its development involved cross-border influences, the French Bulldog became culturally tied to urban life in France. Its popularity grew with artists, city dwellers, and households seeking a compact but charismatic companion.",
    bestFor: ["City apartments", "Companion-focused homes", "Owners seeking low-shedding coats"],
    facts: [
      "Flat-faced structure can require extra heat and breathing care.",
      "Often thrives on close human contact.",
      "Works well in content about modern urban pet lifestyles.",
    ],
  },
  {
    slug: "chow-chow",
    name: "Chow Chow",
    countrySlug: "china",
    countryName: "China",
    countryNameZh: "中国",
    group: "Utility / Companion",
    size: "Medium",
    coat: "Thick double coat",
    lifespan: "9-12 years",
    temperament: ["Aloof", "Dignified", "Calm", "Territorial"],
    summary:
      "Chow Chow is one of the most visually distinctive Chinese breeds, known for its lion-like mane and dignified reserve.",
    originStory:
      "With roots traced deep into Chinese history, the Chow Chow has been associated with guarding, pulling, and companionship. Its striking appearance and independent nature make it especially memorable in breed storytelling.",
    bestFor: ["Calm households", "Owners who respect independence", "Homes willing to manage coat care"],
    facts: [
      "Famous for its blue-black tongue.",
      "Often prefers respectful interaction over constant affection.",
      "Thick coat demands regular grooming discipline.",
    ],
  },
  {
    slug: "pekingese",
    name: "Pekingese",
    countrySlug: "china",
    countryName: "China",
    countryNameZh: "中国",
    group: "Toy / Companion",
    size: "Small",
    coat: "Long double coat",
    lifespan: "12-14 years",
    temperament: ["Regal", "Loyal", "Bold", "Self-possessed"],
    summary:
      "Pekingese carries strong palace-dog symbolism and an unmistakable, proud companion presence.",
    originStory:
      "Long associated with imperial households, the Pekingese was bred for companionship rather than labor. That heritage still shows in its composed movement, self-assurance, and ornamental coat.",
    bestFor: ["Indoor living", "Quiet homes", "Owners who enjoy grooming-intensive companions"],
    facts: [
      "Historically linked to Chinese imperial court culture.",
      "Its coat can become a signature visual asset for editorial design.",
      "Needs careful heat management due to facial structure and coat.",
    ],
  },
  {
    slug: "xoloitzcuintli",
    name: "Xoloitzcuintli",
    countrySlug: "mexico",
    countryName: "Mexico",
    countryNameZh: "墨西哥",
    group: "Primitive / Companion",
    size: "Toy, miniature, and standard",
    coat: "Hairless or coated variety",
    lifespan: "13-18 years",
    temperament: ["Calm", "Attentive", "Warm", "Sensitive"],
    summary:
      "Xoloitzcuintli is one of the most historically distinctive breeds in the Americas, often celebrated for its ancient roots and elegant silhouette.",
    originStory:
      "The breed's history reaches back to pre-Columbian cultures, where it held spiritual and domestic significance. Today it offers a powerful storytelling bridge between ancient heritage and modern companion life.",
    bestFor: ["Owners interested in rare breeds", "Households wanting a quieter companion", "Editorial storytelling around heritage"],
    facts: [
      "Skin care is part of routine maintenance in hairless varieties.",
      "The breed often forms strong bonds with its household.",
      "Excellent anchor breed for culture-first site sections.",
    ],
  },
];
