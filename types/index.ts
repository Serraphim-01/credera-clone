// Common types
export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

// Navigation Component Types
export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

// Enhanced mega menu types
export interface ServiceLink {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: ServiceLink[];
}

export interface MegaMenuContent {
  overview: {
    title: string;
    description: string;
    readMoreLink: string;
    image: string;
  };
  categories: ServiceCategory[];
  banner?: {
    text: string;
    link: string;
    icon: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
  megaMenuContent?: MegaMenuContent;
}

export interface TopBarItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavigationProps {
  logoSrc: string;
  navigationItems: NavigationItem[];
  topBarItems: TopBarItem[];
}

// Hero Section Types
export interface BackgroundElement {
  type: 'cloud' | 'shape';
  position: Position;
  color: string;
  size: Size;
}

export interface HeroSectionProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  illustrationSrc: string;
  backgroundElements: BackgroundElement[];
}

// Horizontal Scroll Cards Types
export interface ContentCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  category?: string;
}

export interface HorizontalScrollCardsProps {
  cards: ContentCard[];
  scrollBehavior: 'smooth' | 'auto';
}

// Who We Are Grid Types
export interface ImageGridItem {
  id: string;
  imageUrl: string;
}

export interface VideoGridItem {
  id: string;
  videoUrl: string;
  imageUrl: string; // Thumbnail for video placeholder
}

export interface TextGridItem {
  id: string;
  title: string;
  iconSrc: string;
}

export interface WhoWeAreGridProps {
  title: string;
  description: string;
  imageItems: ImageGridItem[];
  videoItems: VideoGridItem[];
  textItems: TextGridItem[];
  layout?: 'responsive';
}

// Partner Section Types
export interface StaticPartnerCard {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface PartnerCard extends ContentCard {
  partnerLogo: string;
  partnerName: string;
  serviceArea: string;
  resultMetrics?: {
    label: string;
    value: string;
  }[];
}

export interface RightPartnerSectionProps {
  staticCard: StaticPartnerCard;
  partnerCards: PartnerCard[];
  animationSpeed?: number;
}

// What We Do Section Types
export interface WhatWeDoItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface WhatWeDoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  items: WhatWeDoItem[];
}

// Solutions Section Types
export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  category: string;
  linkUrl: string;
  features?: string[];
}

export interface SolutionsSectionProps {
  solutions: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  }>;
  scrollBehavior?: 'smooth' | 'auto';
}

export interface MeetJoinSectionProps {
  meetSection: {
    title: string;
    description: string;
    imageUrl: string;
    viewAllLink: string;
  };
  joinSection: {
    title: string;
    description: string;
    imageUrl: string;
    viewAllLink: string;
  };
}

// Featured Insights Section Types
export interface InsightItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  linkUrl: string;
  category: string;
  publishDate: string;
  readTime: string;
}

export interface FeaturedInsightsSectionProps {
  title?: string;
  viewAllLink?: string;
}

// Footer Section Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactUsSectionProps {
  title?: string;
  contactLink?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialMediaLink {
  platform: string;
  href: string;
  iconUrl: string;
}

export interface FooterSectionProps {
  logoUrl?: string;
  description?: string;
  copyright?: string;
}

// Home Page Props
export interface HomePageProps {
  navigation: NavigationProps;
  hero: HeroSectionProps;
  horizontalCards: HorizontalScrollCardsProps;
  whoWeAreGrid: WhoWeAreGridProps;
  rightPartnerSection?: RightPartnerSectionProps;
  whatWeDoSection?: WhatWeDoSectionProps;
  solutionsSection?: SolutionsSectionProps;
  meetJoinSection?: MeetJoinSectionProps;
  featuredInsightsSection?: FeaturedInsightsSectionProps;
  contactUsSection?: ContactUsSectionProps;
  footerSection?: FooterSectionProps;
}