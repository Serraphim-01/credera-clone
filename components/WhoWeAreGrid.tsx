"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhoWeAreGridProps, ImageGridItem, VideoGridItem, TextGridItem } from '@/types';

const WhoWeAreGrid: React.FC<WhoWeAreGridProps> = ({
  title,
  description,
  imageItems,
  videoItems,
  textItems,
}) => {
  // Grid layout definition: [row, column] -> type
  // Desktop: 3x3 grid, Mobile: 2x4 grid
  const desktopGridLayout = [
    ['image', 'video', 'text'],    // Row 1
    ['video', 'text', 'image'],    // Row 2  
    ['text', 'image', 'video']     // Row 3
  ];

  // Mobile layout: 2 columns, 4 rows
  const mobileGridLayout = [
    ['image', 'video'],    // Row 1
    ['text', 'image'],     // Row 2
    ['video', 'text'],     // Row 3
    ['image', 'video']     // Row 4
  ];

  // Counters to track which item to use for each type
  let imageIndex = 0;
  let videoIndex = 0;
  let textIndex = 0;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-credera-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left aligned and half width on large screens */}
        <div className="mb-12 md:mb-16 lg:w-1/2 lg:text-left text-center">
          <h2 className="text-2xl md:text-4xl font-normal text-credera-dark mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-credera-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Desktop: 3x3 Grid Container */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 relative">
          {desktopGridLayout.map((row, rowIndex) =>
            row.map((cellType, colIndex) => {
              const cellKey = `desktop-${rowIndex}-${colIndex}`;

              // Get the appropriate item based on cell type
              let item: ImageGridItem | VideoGridItem | TextGridItem | undefined;
              switch (cellType) {
                case 'image':
                  item = imageItems[imageIndex % imageItems.length];
                  imageIndex++;
                  break;
                case 'video':
                  item = videoItems[videoIndex % videoItems.length];
                  videoIndex++;
                  break;
                case 'text':
                  item = textItems[textIndex % textItems.length];
                  textIndex++;
                  break;
              }

              // Apply vertical displacement for desktop only
              let verticalDisplacement = '';
              if (colIndex === 0) {
                verticalDisplacement = 'translate-y-20';
              } else if (colIndex === 2) {
                verticalDisplacement = '-translate-y-20';
              }

              // Type guards to ensure item exists and is of correct type
              const isImageItem = (item: any): item is ImageGridItem => 
                item && cellType === 'image' && 'imageUrl' in item;
              
              const isVideoItem = (item: any): item is VideoGridItem => 
                item && cellType === 'video' && 'videoUrl' in item;
              
              const isTextItem = (item: any): item is TextGridItem => 
                item && cellType === 'text' && 'title' in item && 'iconSrc' in item;

              return (
                <div
                  key={cellKey}
                  className={`w-full h-[350px] ${verticalDisplacement} transition-transform duration-300`}
                >
                  {isImageItem(item) && (
                    <ImageCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  {isVideoItem(item) && (
                    <VideoCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  {isTextItem(item) && (
                    <TextCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  
                  {/* Fallback for missing items */}
                  {!item && (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No {cellType} available</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Mobile: 2-column, 4-row Grid Container */}
        <div className="grid grid-cols-2 grid-rows-4 gap-3 md:hidden">
          {mobileGridLayout.map((row, rowIndex) =>
            row.map((cellType, colIndex) => {
              const cellKey = `mobile-${rowIndex}-${colIndex}`;

              // Get the appropriate item based on cell type
              let item: ImageGridItem | VideoGridItem | TextGridItem | undefined;
              switch (cellType) {
                case 'image':
                  item = imageItems[imageIndex % imageItems.length];
                  imageIndex++;
                  break;
                case 'video':
                  item = videoItems[videoIndex % videoItems.length];
                  videoIndex++;
                  break;
                case 'text':
                  item = textItems[textIndex % textItems.length];
                  textIndex++;
                  break;
              }

              // Type guards to ensure item exists and is of correct type
              const isImageItem = (item: any): item is ImageGridItem => 
                item && cellType === 'image' && 'imageUrl' in item;
              
              const isVideoItem = (item: any): item is VideoGridItem => 
                item && cellType === 'video' && 'videoUrl' in item;
              
              const isTextItem = (item: any): item is TextGridItem => 
                item && cellType === 'text' && 'title' in item && 'iconSrc' in item;

              return (
                <div
                  key={cellKey}
                  className="w-full h-[160px] transition-transform duration-300"
                >
                  {isImageItem(item) && (
                    <ImageCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  {isVideoItem(item) && (
                    <VideoCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  {isTextItem(item) && (
                    <TextCell item={item} row={rowIndex} col={colIndex} />
                  )}
                  
                  {/* Fallback for missing items */}
                  {!item && (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">No {cellType}</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

// Image Cell Component - Responsive sizes
const ImageCell: React.FC<{ item: ImageGridItem; row: number; col: number }> = ({ item }) => {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden group">
      <Image
        src={item.imageUrl}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 350px"
      />
    </div>
  );
};

// Video Cell Component - Responsive sizes
const VideoCell: React.FC<{ item: VideoGridItem; row: number; col: number }> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Enhanced autoplay function
  const attemptPlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Autoplay prevented:', error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set up event listeners
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      // Immediately restart when video ends
      video.currentTime = 0;
      attemptPlay();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Attempt to play when component mounts
    const playVideo = async () => {
      try {
        // Ensure video is muted for autoplay compliance
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';
        
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Initial autoplay failed:', error);
        setIsPlaying(false);
      }
    };

    playVideo();

    // Intersection Observer to play/pause when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            attemptPlay();
          } else if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden group">
      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster={item.imageUrl}
      >
        <source src={item.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Text Cell Component - Responsive sizes
const TextCell: React.FC<{ item: TextGridItem; row: number; col: number }> = ({ item }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg p-4 md:p-8 flex flex-col justify-center items-center group transition-all duration-300 hover-lift">
      {/* Icon at the top */}
      {item.iconSrc && (
        <div className="mb-3 md:mb-6">
          <div className="w-12 h-12 md:w-32 md:h-32 relative">
            <Image
              src={item.iconSrc}
              alt=""
              fill
              className="object-contain transition-all duration-300"
              sizes="(max-width: 768px) 48px, 128px"
            />
          </div>
        </div>
      )}
      
      {/* Title only */}
      <h3 className="text-lg md:text-5xl font-bold text-credera-dark transition-colors duration-200 text-center">
        {item.title}
      </h3>
    </div>
  );
};

export default WhoWeAreGrid;