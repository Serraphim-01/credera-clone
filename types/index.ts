// Common types
export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

// NewsRoom Types
export interface NewsAuthor {
  name: string;
  profileImage: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'article' | 'news' | 'event';
  author: NewsAuthor;
  publishedAt: string;
  imageUrl: string;
  readTime: number;
  tags: string[];
  content?: string;
}

export interface NewsCardProps extends NewsArticle {}

export interface NewsFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  selectedAuthor: string;
  onAuthorChange: (author: string) => void;
  dateRange: { start: string; end: string };
  onDateRangeChange: (range: { start: string; end: string }) => void;
}

// Navigation Component Types
export interface DropdownItem {
  label: string;
  href?: string; // Make href optional
  description?: string;
}

// Enhanced mega menu types
export interface ServiceLink {
  label: string;
  href?: string; // Make href optional
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
  href?: string; // Make href optional
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
  megaMenuContent?: MegaMenuContent;
}

export interface TopBarItem {
  label: string;
  href: string; // TopBar items should always have href
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

export interface SocialMediaSidebarProps {
  links?: Array<{
    platform: string;
    href: string;
    icon: React.ReactNode;
    hoverColor: string;
  }>;
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

// Enhanced Service Detail Types
export interface TechStack {
  category: string;
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  validUntil?: string;
  level?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  techStacks: TechStack[];
  certifications: Certification[];
  caseStudies?: {
    title: string;
    client: string;
    result: string;
    imageUrl: string;
  }[];
  pricing?: {
    startingPrice: string;
    priceModel: string;
  };
}

export interface BookingAction {
  type: 'demo' | 'service';
  label: string;
  description: string;
  ctaText: string;
}

// Service Detail Component Props
export interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export interface TechStackSectionProps {
  techStacks: TechStack[];
}

export interface CertificationsSectionProps {
  certifications: Certification[];
}

export interface BookingActionsSectionProps {
  actions: BookingAction[];
}

// Solution Types for Enhanced Solution Pages
export interface Solution {
  id: string; // Used for routing (kebab-case)
  title: string; // Display title
  description: string; // Card description
  fullDescription?: string; // Detailed page description
  heroImage?: string; // Hero background image URL
  features?: string[]; // Key features list
  benefits?: string[]; // Business benefits
  technologies?: string[]; // Technology stack
  partnerIds?: string[]; // Associated partner IDs
  certifications?: Certification[]; // Solution-specific certifications
  customerStories?: CustomerStory[]; // Solution-specific customer stories
  caseStudies?: CaseStudy[]; // Related case studies
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  result: string;
  imageUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CustomerStory {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  metrics?: {
    label: string;
    value: string;
    improvement: string;
  }[];
}

export interface SolutionPageProps {
  params: {
    solutionId: string;
  };
}

export interface SolutionDetailLayoutProps {
  solution: Solution;
}

// Enhanced Solutions Section Props
export interface SolutionsPageProps {
  solutions: Solution[];
}

// Certification Display Props
export interface CertificationsSectionProps {
  certifications: Certification[];
}

// Customer Stories Section Props
export interface CustomerStoriesSectionProps {
  customerStories: CustomerStory[];
}

// Enhanced Tech Stack Section Props
export interface TechStackSectionProps {
  technologies: string[];
  minimizable?: boolean;
}

// Partnership Types
export interface Partnership {
  id: string;
  name:string;
  description: string;
  partnershipLevel: string;
  certifications: string[];
  whatWeDo: string;
  partnerStory: string;
  logo: string;
  website: string;
  category: 'technology' | 'hardware' | 'infrastructure' | 'enterprise' | 'security';
  specializations: string[];
  heroImage: string;
}

export interface PartnershipPageProps {
  params: {
    partnerId: string;
  };
}

// Next Steps Modal Types
export interface NextStepsFormData {
  name: string;
  companyEmail: string;
  companyName: string;
  scheduleTime: string;
  consultType?: string; // Optional, for when called from main consult page
}

export interface NextStepsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NextStepsFormData) => Promise<void>;
  defaultConsultType?: string; // For individual consult pages
  showConsultTypeSelection?: boolean; // For main consult page
}

export interface NextStepsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NextStepsFormData) => Promise<void>;
}