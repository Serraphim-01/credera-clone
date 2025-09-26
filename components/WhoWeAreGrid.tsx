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
  const gridLayout = [
    ['image', 'video', 'text'],    // Row 1
    ['video', 'text', 'image'],    // Row 2  
    ['text', 'image', 'video']     // Row 3
  ];

  // Counters to track which item to use for each type
  let imageIndex = 0;
  let videoIndex = 0;
  let textIndex = 0;

  return (
    <section className="py-20 px-8 bg-credera-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left aligned and half width on large screens */}
        <div className="mb-16 lg:w-1/2 lg:text-left text-center">
          <h2 className="text-4xl font-normal text-credera-dark mb-6">
            {title}
          </h2>
          <p className="text-lg text-credera-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3x3 Grid Container */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6 relative">
          {gridLayout.map((row, rowIndex) =>
            row.map((cellType, colIndex) => {
              const cellKey = `${rowIndex}-${colIndex}`;

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

              // Apply vertical displacement
              let verticalDisplacement = '';
              if (colIndex === 0) {
                verticalDisplacement = 'translate-y-20'; // First column displaced 20px down
              } else if (colIndex === 2) {
                verticalDisplacement = '-translate-y-20'; // Third column displaced 20px up
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
                  className={`w-[350px] h-[350px] ${verticalDisplacement} transition-transform duration-300`}
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
      </div>
    </section>
  );
};

// Image Cell Component - Clean version without any badges
const ImageCell: React.FC<{ item: ImageGridItem; row: number; col: number }> = ({ item }) => {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden group">
      <Image
        src={item.imageUrl}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="350px"
      />
    </div>
  );
};

// Video Cell Component - Clean version without any indicators
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

// Text Cell Component - Only icon and title, no description or links
const TextCell: React.FC<{ item: TextGridItem; row: number; col: number }> = ({ item }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg p-8 flex flex-col justify-center items-center group hover:bg-credera-navy hover:text-white transition-all duration-300 hover-lift">
      {/* Icon at the top */}
      {item.iconSrc && (
        <div className="mb-6">
          <div className="w-32 h-32 relative">
            <Image
              src={item.iconSrc}
              alt=""
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        </div>
      )}
      
      {/* Title only */}
      <h3 className="text-5xl font-bold text-credera-dark group-hover:text-white transition-colors duration-200 text-center">
        {item.title}
      </h3>
    </div>
  );
};

export default WhoWeAreGrid;