
export interface Ken {
  id: string;
  name: string;
  city: string;
  ageRange: string;
  photo: string;
  vibeTags: string[];
  skills: string[];
  bio: string;
}

export interface PackageInclusion {
  title: string;
  detail: string;
}

export interface PrincessPackage {
  id: string;
  name: string;
  description: string;
  includes: PackageInclusion[];
  priceRange: string;
  image: string;
}

export type Setting = 'Fine dining' | 'Gala / black-tie events' | 'Shopping and spoiling' | 'Travel / weekend away' | 'Spa and wellness' | 'Sports / active experiences' | 'Arts and culture' | 'Casual fun';

export interface DateRequest {
  city: string;
  dateTime: string;
  duration: string;
  budgetRange: string;
  settings: Setting[];
  kenAgePreference: string;
  kenVibeTags: string[];
  kenStyle: string;
  outfitBudget?: number;
  fantasyStory: string;
  selectedKenId?: string;
}
