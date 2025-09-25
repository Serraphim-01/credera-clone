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

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
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

// Home Page Props
export interface HomePageProps {
  navigation: NavigationProps;
  hero: HeroSectionProps;
  horizontalCards: HorizontalScrollCardsProps;
  whoWeAreGrid: WhoWeAreGridProps;
}