import NavigationComponent from '@/components/NavigationComponent';
import HeroSection from '@/components/HeroSection';
import HorizontalScrollCards from '@/components/HorizontalScrollCards';
import WhoWeAreGrid from '@/components/WhoWeAreGrid';
import { NavigationItem, TopBarItem, ContentCard, ImageGridItem, VideoGridItem, TextGridItem } from '@/types';

export default function HomePage() {
  // Navigation data
  const navigationItems: NavigationItem[] = [
    {
      label: 'SERVICES',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Digital Transformation', href: '/services/digital-transformation' },
        { label: 'Strategy Consulting', href: '/services/strategy' },
        { label: 'Technology Solutions', href: '/services/technology' },
        { label: 'Data & Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      label: 'INDUSTRIES',
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Financial Services', href: '/industries/financial-services' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Retail', href: '/industries/retail' },
        { label: 'Technology', href: '/industries/technology' }
      ]
    },
    {
      label: 'PARTNERSHIPS',
      href: '/partnerships',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Salesforce', href: '/partnerships/salesforce' },
        { label: 'Microsoft', href: '/partnerships/microsoft' },
        { label: 'AWS', href: '/partnerships/aws' },
        { label: 'Tableau', href: '/partnerships/tableau' }
      ]
    },
    {
      label: 'INSIGHTS',
      href: '/insights',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', href: '/insights/blog' },
        { label: 'Case Studies', href: '/insights/case-studies' },
        { label: 'Whitepapers', href: '/insights/whitepapers' },
        { label: 'Webinars', href: '/insights/webinars' }
      ]
    },
    {
      label: 'CAREERS',
      href: '/careers',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Open Positions', href: '/careers/positions' },
        { label: 'Life at Credera', href: '/careers/life' },
        { label: 'Benefits', href: '/careers/benefits' },
        { label: 'Locations', href: '/careers/locations' }
      ]
    },
    {
      label: 'ABOUT US',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Our Story', href: '/about/story' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Values', href: '/about/values' },
        { label: 'Locations', href: '/about/locations' }
      ]
    }
  ];

  const topBarItems: TopBarItem[] = [
    { label: 'CONTACT', href: '/contact' },
    { label: 'SEARCH', href: '/search', icon: 'search' },
    { label: 'GLOBAL', href: '/global', icon: 'globe' }
  ];

  // Content cards data
  const contentCards: ContentCard[] = [
    {
      id: '1',
      title: 'Digital Transformation Strategy',
      description: 'Accelerating business growth through innovative technology solutions and strategic digital initiatives.',
      imageUrl: '/images/digital-transformation.svg',
      linkUrl: '/services/digital-transformation',
      category: 'Strategy'
    },
    {
      id: '2',
      title: 'Strategic Consulting Excellence',
      description: 'Delivering measurable results through data-driven insights and proven methodologies.',
      imageUrl: '/images/strategy-consulting.svg',
      linkUrl: '/services/strategy',
      category: 'Consulting'
    },
    {
      id: '3',
      title: 'Technology Solutions',
      description: 'Building scalable, secure, and innovative technology platforms that drive business value.',
      imageUrl: '/images/technology-solutions.svg',
      linkUrl: '/services/technology',
      category: 'Technology'
    },
    {
      id: '4',
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across financial services, healthcare, retail, and technology sectors.',
      imageUrl: '/images/digital-transformation.svg',
      linkUrl: '/industries',
      category: 'Industries'
    },
    {
      id: '5',
      title: 'Partnership Excellence',
      description: 'Strategic alliances with leading technology providers to deliver comprehensive solutions.',
      imageUrl: '/images/strategy-consulting.svg',
      linkUrl: '/partnerships',
      category: 'Partnerships'
    }
  ];

  // Grid items data
  // Grid items data - separate arrays for each type
  const imageItems: ImageGridItem[] = [
    {
      id: 'img-1',
      imageUrl: '/images/credera-logo.svg',
    },
    {
      id: 'img-2',
      imageUrl: '/images/credera-logo.svg',
    },
    {
      id: 'img-3',
      imageUrl: '/images/credera-logo.svg',
    }
  ];

  const videoItems: VideoGridItem[] = [
    {
      id: 'vid-1',
      videoUrl: '/videos/video.mp4',
      imageUrl: '/images/credera-logo.svg',
    },
    {
      id: 'vid-2',
      videoUrl: '/videos/video.mp4',
      imageUrl: '/images/credera-logo.svg',
    },
    {
      id: 'vid-3',
      videoUrl: '/videos/video.mp4',
      imageUrl: '/images/credera-logo.svg',
    }
  ];

  const textItems: TextGridItem[] = [
    {
      id: 'text-1',
      title: 'Innovation',
      iconSrc: '/icons/innovation.svg',
    },
    {
      id: 'text-2',
      title: 'Expertise',
      iconSrc: '/icons/expertise.svg',
    },
    {
      id: 'text-3',
      title: 'Partnership',
      iconSrc: '/icons/globe.svg',
    }
  ];

  return (
    <main className="min-h-screen">
      <NavigationComponent
        logoSrc="/images/credera-logo.svg"
        navigationItems={navigationItems}
        topBarItems={topBarItems}
      />

      <HeroSection
        headline="Unlock extraordinary opportunities."
        description="At Credera, we combine our global consulting expertise with a tailored delivery approach unique to each client's needs. We believe client relationships built on authenticity and a shared vision can truly make a measurable impact. Explore what happens when we partner with clients to accomplish something great."
        ctaText="SEE THE CREDERA DIFFERENCE"
        ctaLink="/difference"
        illustrationSrc="/images/hero-illustration.svg"
        backgroundElements={[]}
      />

      <HorizontalScrollCards
        cards={contentCards}
        scrollBehavior="smooth"
      />

      <WhoWeAreGrid
        title="Who We Are"
        description="We are a global consulting firm that combines deep industry expertise with innovative technology solutions to help our clients achieve extraordinary results. Our collaborative approach and commitment to excellence sets us apart."
        imageItems={imageItems}
        videoItems={videoItems}
        textItems={textItems}
        layout="responsive"
      />
    </main>
  );
}
