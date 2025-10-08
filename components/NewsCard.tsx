'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsCardProps } from '@/types';
import CountdownTimer from './CountdownTimer';

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  publishedAt,
  imageUrl,
  readTime,
  tags
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'blog': return 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]';
      case 'article': return 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]';
      case 'news': return 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]';
      case 'event': return 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]';
      default: return 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]';
    }
  };

  return (
    <Link href={`/newsroom/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white" style={{ maxWidth: '600px', maxHeight: '550px' }}>
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Category Badge and Timer */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex flex-col items-end space-y-1 sm:space-y-2">
            <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-sm font-semibold uppercase tracking-wide ${getCategoryColor(category)}`}>
              {category}
            </div>
            {category === 'event' && (
              <CountdownTimer eventDate={publishedAt} className="text-[8px]" />
            )}
          </div>
          
          {/* Initial Title Overlay - positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-4 md:p-6 bg-black/70 to-transparent text-white">
            <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold leading-tight mb-1 sm:mb-2 line-clamp-2">
              {title}
            </h3>
          </div>
          
          {/* Hover Overlay - slides up from bottom */}
          <div className="absolute inset-0 bg-[color:var(--color-foreground)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex flex-col justify-center items-center h-full p-3 sm:p-4 md:p-6 text-white text-center">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-3 md:mb-4 line-clamp-3">
                {description}
              </p>
              
              {/* Date, Time and Author */}
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-80">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <span>{formatDate(publishedAt)}</span>
                  <span>•</span>
                  <span>{formatTime(publishedAt)}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full overflow-hidden">
                    <Image
                      src={author.profileImage}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{author.name}</span>
                </div>
                
                <div className="text-xs">
                  {readTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;