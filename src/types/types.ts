export interface Slide {
  id: number;
  content?: string;
  title: string;
  subTitle: string;
  heroImage: string;
  bgImage: string;
}

export interface TrophyTypes {
  src: string;
  price?: number;
}
