import type { Country } from "@/content/types";

export const countries: Country[] = [
  {
    slug: "japan",
    name: "Japan",
    nameZh: "日本",
    region: "East Asia",
    intro:
      "日本的代表性犬种常带有敏捷、警觉与强烈领地意识，在山地、雪地和传统家庭文化中都形成了鲜明个性。",
    heritage:
      "从狩猎、守护到家庭陪伴，日本犬系呈现出克制、独立又极具忠诚感的气质，非常适合做国家犬种专题的切入口。",
    accent: "#b94d3f",
    breedSlugs: ["shiba-inu", "akita-inu"],
    highlightBreedSlugs: ["shiba-inu", "akita-inu"],
  },
  {
    slug: "germany",
    name: "Germany",
    nameZh: "德国",
    region: "Europe",
    intro:
      "德国犬种往往强调工作能力、服从性与结构稳定性，在牧羊、警务和家庭陪伴领域都有长期影响力。",
    heritage:
      "德国的育种体系较成熟，很多现代工作犬标准都能看到德国犬种的影子，是网站里非常重要的一条主线。",
    accent: "#3a4f73",
    breedSlugs: ["german-shepherd", "dachshund"],
    highlightBreedSlugs: ["german-shepherd"],
  },
  {
    slug: "france",
    name: "France",
    nameZh: "法国",
    region: "Europe",
    intro:
      "法国犬种经常兼具审美识别度与陪伴属性，从都市生活到猎犬传统，都能形成很好的内容层次。",
    heritage:
      "法国在小型伴侣犬与特色外形犬种方面很有辨识度，适合延展出生活方式与城市养犬等内容专题。",
    accent: "#7f5f9f",
    breedSlugs: ["french-bulldog"],
    highlightBreedSlugs: ["french-bulldog"],
  },
  {
    slug: "china",
    name: "China",
    nameZh: "中国",
    region: "East Asia",
    intro:
      "中国本土犬种横跨古代宫廷、护卫和原始工作用途，是很有历史纵深的一条内容线。",
    heritage:
      "无论是北方厚毛犬系还是宫廷伴侣犬，中国犬种都带有鲜明的文化符号，适合做更深入的历史化内容扩展。",
    accent: "#b58237",
    breedSlugs: ["chow-chow", "pekingese"],
    highlightBreedSlugs: ["chow-chow"],
  },
  {
    slug: "mexico",
    name: "Mexico",
    nameZh: "墨西哥",
    region: "North America",
    intro:
      "墨西哥犬种在全球范围内拥有独特辨识度，既有古老起源，也能承载当代宠物文化的讨论。",
    heritage:
      "像无毛犬这样的古老品种，非常适合在站点中承担故事性内容与文化溯源内容。",
    accent: "#4a8c74",
    breedSlugs: ["xoloitzcuintli"],
    highlightBreedSlugs: ["xoloitzcuintli"],
  },
];
