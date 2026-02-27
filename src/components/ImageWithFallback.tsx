'use client';

import { useState } from 'react';
import Image from 'next/image';

const gradients: Record<string, string> = {
  games:    'linear-gradient(135deg, #0f2744 0%, #0d1117 100%)',
  reviews:  'linear-gradient(135deg, #2d1458 0%, #0d1117 100%)',
  nieuws:   'linear-gradient(135deg, #0a2d3d 0%, #0d1117 100%)',
  tech:     'linear-gradient(135deg, #0a2d20 0%, #0d1117 100%)',
  hardware: 'linear-gradient(135deg, #2d1e08 0%, #0d1117 100%)',
  video:    'linear-gradient(135deg, #2d0a0a 0%, #0d1117 100%)',
};

const labels: Record<string, string> = {
  games: 'Games', reviews: 'Reviews', nieuws: 'Nieuws',
  tech: 'Tech', hardware: 'Hardware', video: 'Video',
};

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  category?: string;
}

export default function ImageWithFallback({
  src, alt, fill, className, sizes, priority, category,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const gradient = (category && gradients[category]) ?? 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)';
    const label = (category && labels[category]) ?? '';
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: gradient }}
      >
        {label && (
          <span className="text-xs font-black uppercase tracking-[0.25em] text-white/20 select-none">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
