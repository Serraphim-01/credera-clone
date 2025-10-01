import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import CompanyHistoryTimeline from '@/components/CompanyHistoryTimeline';
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
  ContentCard,
  ImageGridItem,
  VideoGridItem,
  TextGridItem,
  PartnerCard,
  StaticPartnerCard,
  WhatWeDoItem,
} from '@/types';

export default function HomePage() {

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

  return (
    <>
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

      {/* Partners Section */}
      <PartnersSection />

      <MeetJoinSection
        meetSection={meetJoinData.meetSection}
        joinSection={meetJoinData.joinSection}
      />

      <FeaturedInsightsSection />

      <ContactUsSection />
      
      {/* Footer */}
      <FooterSection />
    </>
  );
}
