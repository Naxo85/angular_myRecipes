export interface Recipe {
  id?: string;
  title: string;
  ingredients: string[];
  url_image: string;
  image_type: string;
  vegetarian: boolean;
  glutenFree: boolean;
  readyInMinutes: number;
  summary: string;
  cuisines: string[];
  steps?: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id?: number;
  name: string;
  image: string;
}

export enum Cuisines {
  'African',
  'American',
  'Asian',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'Galician',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
}
