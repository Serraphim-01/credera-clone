import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export interface SocialMediaLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

interface SocialMediaSidebarProps {
  links?: SocialMediaLink[];
}

const SocialMediaSidebar: React.FC<SocialMediaSidebarProps> = ({ links }) => {
  const defaultLinks: SocialMediaLink[] = [
    {
      platform: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tasksystems',
      icon: <FaLinkedin size={20} />,
      hoverColor: 'hover:text-[#0077B5]'
    },
    {
      platform: 'Twitter',
      href: 'https://twitter.com/credera',
      icon: <FaTwitter size={20} />,
      hoverColor: 'hover:text-[#1DA1F2]'
    },
    {
      platform: 'Facebook',
      href: 'https://www.facebook.com/credera',
      icon: <FaFacebook size={20} />,
      hoverColor: 'hover:text-[#1877F2]'
    },
    {
      platform: 'Instagram',
      href: 'https://www.instagram.com/credera',
      icon: <FaInstagram size={20} />,
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      platform: 'YouTube',
      href: 'https://www.youtube.com/credera',
      icon: <FaYoutube size={20} />,
      hoverColor: 'hover:text-[#FF0000]'
    }
  ];

  const socialLinks = links || defaultLinks;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 py-4 px-2">
        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-gray-600 transition-all duration-300 ease-in-out
                transform hover:scale-110 hover:shadow-md
                p-2 rounded-full hover:bg-gray-50
                ${link.hoverColor}
              `}
              aria-label={`Follow us on ${link.platform}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
        
        {/* Decorative line */}
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default SocialMediaSidebar;