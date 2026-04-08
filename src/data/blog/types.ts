export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  readTimeMin: number;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faqs: BlogFaqItem[];
  disclaimer?: string;
};
