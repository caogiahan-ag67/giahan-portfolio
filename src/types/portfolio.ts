export type Language = "vi" | "en";

export interface NavTranslations {
  about: string;
  experience: string;
  skills: string;
  contact: string;
}

export interface HeroTranslations {
  badge: string;
  headline: string;
  subheadline: string;
  summary: string;
  downloadCV: string;
  connectLinkedIn: string;
  connectThrough: string;
  location: string;
  email: string;
}

export interface StatItem {
  val: string;
  lbl: string;
}

export interface AboutCard {
  title: string;
  subtitle: string;
  text: string;
  stats: StatItem[];
}

export interface HighlightCard {
  badge: string;
  period: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
}

export interface AboutTranslations {
  title: string;
  description: string;
  educationCard: AboutCard;
  experienceCard: AboutCard;
  highlightsTitle: string;
  highlights: HighlightCard[];
}

export interface ExperienceRole {
  slug: string;
  period: string;
  role: string;
  company: string;
  summary: string;
  detailsSummary: string;
  tags: string[];
  viewDetail: string;
  achievements: string[];
  responsibilities: string[];
}

export interface ExperienceTranslations {
  title: string;
  description: string;
  roles: ExperienceRole[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  num: string;
  title: string;
  desc: string;
  items: SkillItem[];
}

export interface SkillsTranslations {
  title: string;
  description: string;
  categories: SkillCategory[];
}

export interface FooterTranslations {
  rights: string;
  backToTop: string;
  tagline: string;
}

export interface ExperiencePageTranslations {
  backHome: string;
  roleOverview: string;
  keyResponsibilities: string;
  coreAchievements: string;
  technologiesUsed: string;
  companyInfo: string;
}

export interface TranslationDictionary {
  brand: {
    name: string;
    badge: string;
  };
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  experience: ExperienceTranslations;
  skills: SkillsTranslations;
  footer: FooterTranslations;
  experienceDetail: ExperiencePageTranslations;
}
