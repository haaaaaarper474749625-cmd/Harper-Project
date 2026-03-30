import { breeds } from "@/content/data/breeds";
import { countries } from "@/content/data/countries";
import type { ContentSource } from "@/lib/content/types";

export const localContentSource: ContentSource = {
  async getAllCountries() {
    return countries;
  },
  async getCountryBySlug(slug) {
    return countries.find((country) => country.slug === slug);
  },
  async getAllBreeds() {
    return breeds;
  },
  async getBreedBySlug(slug) {
    return breeds.find((breed) => breed.slug === slug);
  },
};
