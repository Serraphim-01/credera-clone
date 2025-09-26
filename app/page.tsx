import NavigationComponent from '@/components/NavigationComponent';
import HeroSection from '@/components/HeroSection';
import HorizontalScrollCards from '@/components/HorizontalScrollCards';
import WhoWeAreGrid from '@/components/WhoWeAreGrid';
import RightPartnerSection from '@/components/RightPartnerSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import SolutionsSection from '@/components/SolutionsSection';
import MeetJoinSection from '@/components/MeetJoinSection';
import FeaturedInsightsSection from '@/components/FeaturedInsightsSection';
import ContactUsSection from '@/components/ContactUsSection';
import FooterSection from '@/components/FooterSection';
import {
  NavigationItem,
  TopBarItem,
  ContentCard,
  ImageGridItem,
  VideoGridItem,
  TextGridItem,
  PartnerCard,
  StaticPartnerCard,
  WhatWeDoItem,
  FooterColumn,
  SocialMediaLink
} from '@/types';

export default function HomePage() {
  // Navigation data with mega menu content
  const navigationItems: NavigationItem[] = [
    {
      label: 'SERVICES',
      href: '/services',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Services Overview',
          description: 'We deliver comprehensive consulting and technology solutions that drive measurable business outcomes. Our services span strategic consulting, digital transformation, and innovative technology implementations.',
          readMoreLink: '/services',
          image: '/images/services-overview.jpg'
        },
        categories: [
          {
            id: 'ai',
            title: 'Artificial Intelligence',
            services: [
              { label: 'Machine Learning Strategy', href: '/services/ai/ml-strategy' },
              { label: 'Natural Language Processing', href: '/services/ai/nlp' },
              { label: 'Computer Vision', href: '/services/ai/computer-vision' },
              { label: 'AI Ethics & Governance', href: '/services/ai/ethics' }
            ]
          },
          {
            id: 'data',
            title: 'Data & Analytics',
            services: [
              { label: 'Data Strategy', href: '/services/data/strategy' },
              { label: 'Advanced Analytics', href: '/services/data/analytics' },
              { label: 'Data Engineering', href: '/services/data/engineering' },
              { label: 'Business Intelligence', href: '/services/data/bi' }
            ]
          },
          {
            id: 'ecommerce',
            title: 'Ecommerce',
            services: [
              { label: 'Platform Strategy', href: '/services/ecommerce/platform' },
              { label: 'Digital Commerce', href: '/services/ecommerce/digital' },
              { label: 'Customer Experience', href: '/services/ecommerce/cx' },
              { label: 'Omnichannel Solutions', href: '/services/ecommerce/omnichannel' }
            ]
          },
          {
            id: 'cloud',
            title: 'Cloud Solutions',
            services: [
              { label: 'Cloud Strategy', href: '/services/cloud/strategy' },
              { label: 'Migration Services', href: '/services/cloud/migration' },
              { label: 'DevOps & Automation', href: '/services/cloud/devops' },
              { label: 'Security & Compliance', href: '/services/cloud/security' }
            ]
          }
        ],
        banner: {
          text: 'Ready to transform your business with cutting-edge solutions?',
          link: '/contact',
          icon: 'sparkle'
        }
      }
    },
    {
      label: 'INDUSTRIES',
      href: '/industries',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Industries Overview',
          description: 'Deep industry expertise across key sectors, delivering specialized solutions that address unique challenges and drive measurable results for our clients.',
          readMoreLink: '/industries',
          image: '/images/industries-overview.jpg'
        },
        categories: [
          {
            id: 'financial',
            title: 'Financial Services',
            services: [
              { label: 'Banking & Capital Markets', href: '/industries/financial/banking' },
              { label: 'Insurance', href: '/industries/financial/insurance' },
              { label: 'Investment Management', href: '/industries/financial/investment' },
              { label: 'RegTech & Compliance', href: '/industries/financial/regtech' }
            ]
          },
          {
            id: 'healthcare',
            title: 'Healthcare & Life Sciences',
            services: [
              { label: 'Healthcare Providers', href: '/industries/healthcare/providers' },
              { label: 'Pharmaceuticals', href: '/industries/healthcare/pharma' },
              { label: 'Medical Devices', href: '/industries/healthcare/devices' },
              { label: 'Health Technology', href: '/industries/healthcare/healthtech' }
            ]
          },
          {
            id: 'retail',
            title: 'Retail & Consumer',
            services: [
              { label: 'Omnichannel Commerce', href: '/industries/retail/omnichannel' },
              { label: 'Supply Chain', href: '/industries/retail/supply-chain' },
              { label: 'Customer Experience', href: '/industries/retail/cx' },
              { label: 'Brand & Marketing', href: '/industries/retail/marketing' }
            ]
          },
          {
            id: 'technology',
            title: 'Technology & Media',
            services: [
              { label: 'Software & SaaS', href: '/industries/tech/software' },
              { label: 'Telecommunications', href: '/industries/tech/telecom' },
              { label: 'Media & Entertainment', href: '/industries/tech/media' },
              { label: 'Emerging Technologies', href: '/industries/tech/emerging' }
            ]
          }
        ],
        banner: {
          text: 'Explore how our industry expertise can transform your business',
          link: '/industries/case-studies',
          icon: 'chart'
        }
      }
    },
    {
      label: 'PARTNERSHIPS',
      href: '/partnerships',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Strategic Partnerships',
          description: 'Leveraging strategic alliances with industry leaders to deliver best-in-class solutions. Our partnerships enable us to provide comprehensive, cutting-edge technology implementations.',
          readMoreLink: '/partnerships',
          image: '/images/partnerships-overview.jpg'
        },
        categories: [
          {
            id: 'cloud-platforms',
            title: 'Cloud Platforms',
            services: [
              { label: 'Amazon Web Services', href: '/partnerships/aws' },
              { label: 'Microsoft Azure', href: '/partnerships/azure' },
              { label: 'Google Cloud Platform', href: '/partnerships/gcp' },
              { label: 'Hybrid Cloud Solutions', href: '/partnerships/hybrid-cloud' }
            ]
          },
          {
            id: 'enterprise-software',
            title: 'Enterprise Software',
            services: [
              { label: 'Salesforce', href: '/partnerships/salesforce' },
              { label: 'Microsoft 365', href: '/partnerships/microsoft365' },
              { label: 'ServiceNow', href: '/partnerships/servicenow' },
              { label: 'Oracle', href: '/partnerships/oracle' }
            ]
          },
          {
            id: 'analytics-ai',
            title: 'Analytics & AI',
            services: [
              { label: 'Tableau', href: '/partnerships/tableau' },
              { label: 'Power BI', href: '/partnerships/powerbi' },
              { label: 'Snowflake', href: '/partnerships/snowflake' },
              { label: 'DataRobot', href: '/partnerships/datarobot' }
            ]
          },
          {
            id: 'specialized-tech',
            title: 'Specialized Technologies',
            services: [
              { label: 'Cybersecurity Partners', href: '/partnerships/cybersecurity' },
              { label: 'IoT Solutions', href: '/partnerships/iot' },
              { label: 'Blockchain', href: '/partnerships/blockchain' },
              { label: 'Industry-Specific Tools', href: '/partnerships/industry-tools' }
            ]
          }
        ],
        banner: {
          text: 'Discover how our partnerships accelerate your digital transformation',
          link: '/partnerships/benefits',
          icon: 'handshake'
        }
      }
    },
    {
      label: 'INSIGHTS',
      href: '/insights',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Thought Leadership',
          description: 'Stay ahead of industry trends with our expert insights, research, and analysis. Access comprehensive resources covering emerging technologies, best practices, and strategic guidance.',
          readMoreLink: '/insights',
          image: '/images/insights-overview.jpg'
        },
        categories: [
          {
            id: 'content-types',
            title: 'Content Types',
            services: [
              { label: 'Blog Articles', href: '/insights/blog' },
              { label: 'Case Studies', href: '/insights/case-studies' },
              { label: 'Research Reports', href: '/insights/research' },
              { label: 'Whitepapers', href: '/insights/whitepapers' }
            ]
          },
          {
            id: 'digital-events',
            title: 'Digital Events',
            services: [
              { label: 'Webinars', href: '/insights/webinars' },
              { label: 'Virtual Conferences', href: '/insights/conferences' },
              { label: 'Executive Roundtables', href: '/insights/roundtables' },
              { label: 'Industry Forums', href: '/insights/forums' }
            ]
          },
          {
            id: 'research-areas',
            title: 'Research Areas',
            services: [
              { label: 'Digital Transformation', href: '/insights/digital-transformation' },
              { label: 'Artificial Intelligence', href: '/insights/ai' },
              { label: 'Data & Analytics', href: '/insights/data' },
              { label: 'Customer Experience', href: '/insights/cx' }
            ]
          },
          {
            id: 'industry-insights',
            title: 'Industry Insights',
            services: [
              { label: 'Financial Services Trends', href: '/insights/financial-trends' },
              { label: 'Healthcare Innovation', href: '/insights/healthcare-innovation' },
              { label: 'Retail Evolution', href: '/insights/retail-evolution' },
              { label: 'Technology Outlook', href: '/insights/tech-outlook' }
            ]
          }
        ],
        banner: {
          text: 'Subscribe to our newsletter for the latest insights and trends',
          link: '/insights/newsletter',
          icon: 'email'
        }
      }
    },
    {
      label: 'CAREERS',
      href: '/careers',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Join Our Team',
          description: 'Build your career with a global consulting firm that values innovation, collaboration, and professional growth. Discover opportunities to make a meaningful impact while working with industry-leading clients.',
          readMoreLink: '/careers',
          image: '/images/careers-overview.jpg'
        },
        categories: [
          {
            id: 'opportunities',
            title: 'Career Opportunities',
            services: [
              { label: 'Current Openings', href: '/careers/openings' },
              { label: 'Graduate Programs', href: '/careers/graduates' },
              { label: 'Internships', href: '/careers/internships' },
              { label: 'Experienced Professionals', href: '/careers/experienced' }
            ]
          },
          {
            id: 'practice-areas',
            title: 'Practice Areas',
            services: [
              { label: 'Technology Consulting', href: '/careers/technology' },
              { label: 'Strategy & Operations', href: '/careers/strategy' },
              { label: 'Data & Analytics', href: '/careers/data' },
              { label: 'Digital Solutions', href: '/careers/digital' }
            ]
          },
          {
            id: 'culture',
            title: 'Culture & Values',
            services: [
              { label: 'Life at Credera', href: '/careers/life' },
              { label: 'Diversity & Inclusion', href: '/careers/diversity' },
              { label: 'Professional Development', href: '/careers/development' },
              { label: 'Community Impact', href: '/careers/community' }
            ]
          },
          {
            id: 'benefits',
            title: 'Benefits & Perks',
            services: [
              { label: 'Compensation & Benefits', href: '/careers/benefits' },
              { label: 'Work-Life Balance', href: '/careers/balance' },
              { label: 'Learning & Development', href: '/careers/learning' },
              { label: 'Global Locations', href: '/careers/locations' }
            ]
          }
        ],
        banner: {
          text: 'Ready to start your journey with us? Explore open positions',
          link: '/careers/apply',
          icon: 'user-plus'
        }
      }
    },
    {
      label: 'ABOUT US',
      href: '/about',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'About Credera',
          description: 'A global consulting firm founded on the principle of authentic relationships and exceptional results. Learn about our story, values, and the people who make our success possible.',
          readMoreLink: '/about',
          image: '/images/about-overview.jpg'
        },
        categories: [
          {
            id: 'company',
            title: 'Our Company',
            services: [
              { label: 'Our Story', href: '/about/story' },
              { label: 'Mission & Vision', href: '/about/mission' },
              { label: 'Core Values', href: '/about/values' },
              { label: 'Company Timeline', href: '/about/timeline' }
            ]
          },
          {
            id: 'leadership',
            title: 'Leadership',
            services: [
              { label: 'Executive Team', href: '/about/executives' },
              { label: 'Board of Directors', href: '/about/board' },
              { label: 'Practice Leaders', href: '/about/practice-leaders' },
              { label: 'Regional Leaders', href: '/about/regional-leaders' }
            ]
          },
          {
            id: 'global-presence',
            title: 'Global Presence',
            services: [
              { label: 'Office Locations', href: '/about/locations' },
              { label: 'North America', href: '/about/north-america' },
              { label: 'Europe', href: '/about/europe' },
              { label: 'Asia Pacific', href: '/about/asia-pacific' }
            ]
          },
          {
            id: 'responsibility',
            title: 'Corporate Responsibility',
            services: [
              { label: 'Sustainability', href: '/about/sustainability' },
              { label: 'Community Engagement', href: '/about/community' },
              { label: 'Diversity & Inclusion', href: '/about/diversity' },
              { label: 'Awards & Recognition', href: '/about/awards' }
            ]
          }
        ],
        banner: {
          text: 'Learn more about our commitment to making a positive impact',
          link: '/about/impact',
          icon: 'heart'
        }
      }
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
      imageUrl: '/TaskImages/digitization.jpg',
      linkUrl: '/services/digital-transformation',
      category: 'Strategy'
    },
    {
      id: '2',
      title: 'Strategic Consulting Excellence',
      description: 'Delivering measurable results through data-driven insights and proven methodologies.',
      imageUrl: '/TaskImages/services.jpg',
      linkUrl: '/services/strategy',
      category: 'Consulting'
    },
    {
      id: '3',
      title: 'Technology Solutions',
      description: 'Building scalable, secure, and innovative technology platforms that drive business value.',
      imageUrl: '/TaskImages/crm.jpg',
      linkUrl: '/services/technology',
      category: 'Technology'
    },
    {
      id: '4',
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across financial services, healthcare, retail, and technology sectors.',
      imageUrl: '/TaskImages/meet.jpg',
      linkUrl: '/industries',
      category: 'Industries'
    },
    {
      id: '5',
      title: 'Partnership Excellence',
      description: 'Strategic alliances with leading technology providers to deliver comprehensive solutions.',
      imageUrl: '/TaskImages/cloud.jpg',
      linkUrl: '/partnerships',
      category: 'Partnerships'
    }
  ];

  // Grid items data
  // Grid items data - separate arrays for each type
  const imageItems: ImageGridItem[] = [
    {
      id: 'img-1',
      imageUrl: '/TaskImages/services.jpg',
    },
    {
      id: 'img-2',
      imageUrl: '/TaskImages/digitization.jpg',
    },
    {
      id: 'img-3',
      imageUrl: '/TaskImages/solutions.jpg',
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
      videoUrl: '/videos/video1.mp4',
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

  // Partner section data
  const staticPartnerCard: StaticPartnerCard = {
    title: 'Strategic Partnerships',
    subtitle: 'Driving Innovation Together',
    description: 'Our strategic partnerships with leading technology providers enable us to deliver comprehensive, best-in-class solutions. From cloud platforms to analytics tools, we leverage these relationships to accelerate your digital transformation journey.',
    ctaText: 'View All Partnerships',
    ctaLink: '/partnerships',
    backgroundImage: '/images/partnership-bg.jpg'
  };

  const partnerCards: PartnerCard[] = [
    {
      id: 'salesforce-partnership',
      title: 'Salesforce Implementation Excellence',
      description: 'Complete CRM transformation delivering 300% increase in sales productivity and seamless customer experience across all touchpoints.',
      imageUrl: '/TaskImages/crm.jpg',
      linkUrl: '/case-studies/salesforce-transformation',
      category: 'CRM Transformation',
      partnerLogo: '/images/partners/salesforce-logo.svg',
      partnerName: 'Salesforce',
      serviceArea: 'Customer Relationship Management',
      resultMetrics: [
        { label: 'Sales Productivity Increase', value: '300%' },
        { label: 'Implementation Time', value: '6 Months' }
      ]
    },
    {
      id: 'aws-cloud-migration',
      title: 'Enterprise Cloud Migration Success',
      description: 'Large-scale AWS migration reducing infrastructure costs by 40% while improving system performance and scalability.',
      imageUrl: '/TaskImages/cloud.jpg',
      linkUrl: '/case-studies/aws-migration',
      category: 'Cloud Migration',
      partnerLogo: '/images/partners/aws-logo.svg',
      partnerName: 'Amazon Web Services',
      serviceArea: 'Cloud Infrastructure',
      resultMetrics: [
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Performance Improvement', value: '200%' }
      ]
    },
    {
      id: 'microsoft-digital-workplace',
      title: 'Microsoft 365 Digital Workplace',
      description: 'Complete digital workplace transformation using Microsoft 365, enhancing collaboration and productivity across global teams.',
      imageUrl: '/TaskImages/m365.jpg',
      linkUrl: '/case-studies/microsoft-workplace',
      category: 'Digital Workplace',
      partnerLogo: '/images/partners/microsoft-logo.svg',
      partnerName: 'Microsoft',
      serviceArea: 'Productivity & Collaboration',
      resultMetrics: [
        { label: 'User Adoption Rate', value: '95%' },
        { label: 'Collaboration Increase', value: '150%' }
      ]
    },
    {
      id: 'tableau-analytics',
      title: 'Advanced Analytics with Tableau',
      description: 'Data visualization and analytics platform implementation enabling real-time insights and data-driven decision making.',
      imageUrl: '/TaskImages/data.jpg',
      linkUrl: '/case-studies/tableau-analytics',
      category: 'Data Analytics',
      partnerLogo: '/images/partners/tableau-logo.svg',
      partnerName: 'Tableau',
      serviceArea: 'Business Intelligence',
      resultMetrics: [
        { label: 'Faster Reporting', value: '75%' },
        { label: 'Data Accuracy', value: '99.5%' }
      ]
    }
  ];

  // What We Do Section Data
  const whatWeDoData = {
    title: "What We Do",
    subtitle: "Comprehensive Solutions for Digital Success",
    description: "We deliver end-to-end consulting and technology solutions that drive measurable business outcomes across industries and markets.",
    items: [] as WhatWeDoItem[] // Placeholder for items if needed
  };

  // Solutions Section Data
  const solutionsData = {
    solutions: [
      {
        id: "1",
        title: "Cloud & Infrastructure",
        description: "Scalable cloud solutions that transform your infrastructure and optimize operational efficiency. Our expert team delivers robust, secure, and flexible cloud environments tailored to your business needs.",
        imageUrl: "/TaskImages/cloud.jpg",
        linkUrl: "/solutions/cloud-infrastructure"
      },
      {
        id: "2",
        title: "Data & Analytics",
        description: "Harness the power of your data with advanced analytics and AI-driven insights. We help you make data-informed decisions that drive growth and competitive advantage.",
        imageUrl: "/TaskImages/data.jpg",
        linkUrl: "/solutions/data-analytics"
      },
      {
        id: "3",
        title: "Digital Transformation",
        description: "Complete digital overhaul services that modernize your operations and enhance customer experiences. We guide you through every step of your digital journey.",
        imageUrl: "/TaskImages/digitization.jpg", 
        linkUrl: "/solutions/digital-transformation"
      }
    ]
  };

  // Meet & Join Section Data
  const meetJoinData = {
    meetSection: {
      title: "Meet",
      description: "Get to know the talented professionals who make our success possible. Our diverse team brings together expertise from across industries and disciplines.",
      imageUrl: "/TaskImages/meet.jpg", // Add this image path
      viewAllLink: "/about/team"
    },
    joinSection: {
      title: "Join",
      description: "Become part of a team that's passionate about solving complex challenges and creating meaningful impact for our clients and communities.",
      imageUrl: "/TaskImages/join.jpg", // Add this image path
      viewAllLink: "/careers"
    }
  };

  // Footer Section Data
  const footerData = {
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'Digital Transformation', href: '/services/digital-transformation' },
          { label: 'Data & Analytics', href: '/services/data-analytics' },
          { label: 'Cloud Solutions', href: '/services/cloud' },
          { label: 'Cybersecurity', href: '/services/cybersecurity' },
          { label: 'Customer Experience', href: '/services/customer-experience' },
          { label: 'Technology Consulting', href: '/services/technology' }
        ]
      },
      {
        title: 'Industries',
        links: [
          { label: 'Financial Services', href: '/industries/financial-services' },
          { label: 'Healthcare', href: '/industries/healthcare' },
          { label: 'Retail & Consumer', href: '/industries/retail' },
          { label: 'Technology', href: '/industries/technology' },
          { label: 'Energy & Utilities', href: '/industries/energy' },
          { label: 'Public Sector', href: '/industries/public-sector' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Team', href: '/about/team' },
          { label: 'Careers', href: '/careers' },
          { label: 'Locations', href: '/about/locations' },
          { label: 'News & Events', href: '/news' },
          { label: 'Contact', href: '/contact' }
        ]
      }
    ] as FooterColumn[],
    socialLinks: [
      {
        platform: 'LinkedIn',
        href: 'https://linkedin.com/company/credera',
        iconUrl: '/icons/linkedin.svg'
      },
      {
        platform: 'Twitter',
        href: 'https://twitter.com/credera',
        iconUrl: '/icons/twitter.svg'
      },
      {
        platform: 'Facebook',
        href: 'https://facebook.com/credera',
        iconUrl: '/icons/facebook.svg'
      },
      {
        platform: 'YouTube',
        href: 'https://youtube.com/c/credera',
        iconUrl: '/icons/youtube.svg'
      }
    ] as SocialMediaLink[],
    copyright: '© {{year}} Credera. All rights reserved.',
    logoUrl: '/images/credera-logo-white.svg'
  };

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
      <RightPartnerSection
        staticCard={staticPartnerCard}
        partnerCards={partnerCards}
        animationSpeed={3000}
      />

      <WhatWeDoSection
        title={whatWeDoData.title}
        subtitle={whatWeDoData.subtitle}
        description={whatWeDoData.description}
        items={whatWeDoData.items}
      />

      <SolutionsSection
        solutions={solutionsData.solutions}
        scrollBehavior="smooth"
      />

      <MeetJoinSection
        meetSection={meetJoinData.meetSection}
        joinSection={meetJoinData.joinSection}
      />

      <FeaturedInsightsSection />

      <ContactUsSection />

      <FooterSection />
    </main>
  );
}
