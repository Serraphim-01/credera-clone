import type { Metadata } from "next";
import { Poppins, Roboto, Exo } from "next/font/google";
import NavigationComponent from '@/components/NavigationComponent';
import SocialMediaSidebar from '@/components/SocialMediaSidebar';
import { NavigationItem, TopBarItem } from '@/types';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Task Systems Ltd| Unlock Extraordinary Opportunities",
  description: "Global consulting firm combining deep industry expertise with innovative technology solutions. We help clients achieve extraordinary results through strategic consulting, digital transformation, and technology services.",
  keywords: "consulting, digital transformation, strategy, technology solutions, business consulting, data analytics",
  authors: [{ name: "Task Systems Ltd" }],
  creator: "Task Systems Ltd",
  publisher: "Task Systems Ltd",
  openGraph: {
    title: "Task Systems Ltd | Unlock Extraordinary Opportunities",
    description: "Global consulting firm combining deep industry expertise with innovative technology solutions.",
    url: "https://tasksystems.com.ng",
    siteName: "Task Systems Ltd",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Task Systems Ltd | Unlock Extraordinary Opportunities",
    description: "Global consulting firm combining deep industry expertise with innovative technology solutions.",
    creator: "@tasksystems"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  viewport: {
    width: "device-width",
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Navigation data with mega menu content - same as home page
  const navigationItems: NavigationItem[] = [
    {
      label: 'SERVICES',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Services Overview',
          description: 'We deliver comprehensive consulting and technology solutions that drive measurable business outcomes. Our services span strategic consulting, digital transformation, and innovative technology implementations.',
          readMoreLink: '/services',
          image: '/TaskImages/services.jpg'
        },
        categories: [
          {
            id: 'consult',
            title: 'Consult',
            services: [
              { label: 'First Steps', href: '/consult/first-steps' },
              { label: 'Cloud TCO Assessment', href: '/consult/cloud-tco-assessment' },
              { label: 'Next Steps', href: '/consult/next-steps' },
              { label: 'Cloud Adoption Strategy', href: '/consult/cloud-adoption-strategy' },
              { label: 'Cloud Assessment', href: '/consult/cloud-assessment' }
            ]
          },
          {
            id: 'solutions',
            title: 'Solutions',
            services: [
              { label: 'Network Solutions', href: '/solutions/network-solutions' },
              { label: 'Enterprise Mobility', href: '/solutions/enterprise-mobility' },
              { label: 'Convergence Solutions', href: '/solutions/convergence-solutions' },
              { label: 'Collaboration Solutions', href: '/solutions/collaboration-solutions' },
              { label: 'Security Solutions', href: '/solutions/security-solutions' },
              { label: 'Enterprise Applications', href: '/solutions/enterprise-applications' },
              { label: 'Managed Support', href: '/solutions/managed-support' },
              { label: 'Cloud Solutions', href: '/solutions/cloud-solutions' }
            ]
          }
        ]
      }
    },
    {
      label: 'PARTNERSHIPS',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'Strategic Partnerships',
          description: 'Leveraging strategic alliances with industry leaders to deliver best-in-class solutions. Our partnerships enable us to provide comprehensive, cutting-edge technology implementations.',
          readMoreLink: '/partnerships',
          image: '/TaskImages/join.jpg'
        },
        categories: [
          {
            id: 'technology-partners',
            title: 'Technology Partners',
            services: [
              { label: 'Microsoft', href: '/partnerships/microsoft' },
              { label: 'AWS', href: '/partnerships/aws' },
              { label: 'Cisco', href: '/partnerships/cisco' },
              { label: 'IBM', href: '/partnerships/ibm' },
              { label: 'Google', href: '/partnerships/google' },
              { label: 'Oracle', href: '/partnerships/oracle' }
            ]
          },
          {
            id: 'hardware-partners',
            title: 'Hardware Partners',
            services: [
              { label: 'Dell', href: '/partnerships/dell' },
              { label: 'HP', href: '/partnerships/hp' },
              { label: 'HPE', href: '/partnerships/hpe' },
              { label: 'Apple', href: '/partnerships/apple' },
              { label: 'Samsung', href: '/partnerships/samsung' },
              { label: 'Lenovo', href: '/partnerships/lenovo' },
              { label: 'Asus', href: '/partnerships/asus' }
            ]
          },
          {
            id: 'infrastructure-partners',
            title: 'Infrastructure Partners',
            services: [
              { label: 'Schneider', href: '/partnerships/schneider' },
              { label: 'Neverfail', href: '/partnerships/neverfail' },
              { label: 'APC', href: '/partnerships/apc' },
              { label: 'D-Link', href: '/partnerships/d-link' },
              { label: 'NetApp', href: '/partnerships/netapp' }
            ]
          },
          {
            id: 'enterprise-security',
            title: 'Enterprise & Security',
            services: [
              { label: 'Checkpoint', href: '/partnerships/checkpoint' },
              { label: 'Kaspersky', href: '/partnerships/kaspersky' },
              { label: 'Nokia', href: '/partnerships/nokia' },
              { label: 'StarLink', href: '/partnerships/starlink' },
              { label: 'EMC', href: '/partnerships/emc' },
              { label: 'Zebra', href: '/partnerships/zebra' },
              { label: 'Logitech', href: '/partnerships/logitech' },
              { label: 'Huawei', href: '/partnerships/huawei' }
            ]
          }
        ]
      }
    },
    {
      label: 'NEWSROOM',
      href: '/newsroom',
      hasDropdown: true,
      megaMenuContent: {
        overview: {
          title: 'NewsRoom',
          description: 'Stay ahead of industry trends with our expert insights, research, and analysis. Access comprehensive resources covering emerging technologies, best practices, and strategic guidance.',
          readMoreLink: '/newsroom',
          image: '/TaskImages/crm.jpg'
        },
        categories: [
          {
            id: 'blog',
            title: 'Blog',
            services: []
          },
          {
            id: 'event',
            title: 'Events',
            services: []
          },
          {
            id: 'article',
            title: 'Articles',
            services: []
          },
          {
            id: 'news',
            title: 'Announcements',
            services: []
          }
        ]
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
          image: '/TaskImages/solutions.jpg'
        },
        categories: [
          {
            id: 'careers',
            title: 'Job Openings',
            services: []
          },
          {
            id: 'life-at-company',
            title: 'Life at Company',
            services: [
              { label: 'Company Culture', href: '/careers/life/culture' },
              { label: 'Employee Benefits', href: '/careers/life/benefits' },
              { label: 'Work-Life Balance', href: '/careers/life/balance' },
              { label: 'Team Stories', href: '/careers/life/stories' }
            ]
          }
        ]
      }
    },
    {
      label: 'COMPANY',
      href: '/company',
      hasDropdown: false
    }
  ];

  const topBarItems: TopBarItem[] = [
    { label: 'CONTACT', href: '/contact' },
    { label: 'SEARCH', href: '/search', icon: 'search' },
  ];

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${exo.variable} antialiased`}
      >
        {/* Social Media Sidebar */}
        <SocialMediaSidebar />
        
        {/* Global Navigation */}
        <NavigationComponent
          logoSrc="/TaskImages/logo.png"
          navigationItems={navigationItems}
          topBarItems={topBarItems}
        />
        
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
