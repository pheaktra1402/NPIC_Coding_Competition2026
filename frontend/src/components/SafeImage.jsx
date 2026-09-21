import React, { useState } from 'react';
import { getOfflineIllustration } from '../data/localImages';

export default function SafeImage({ src, alt = 'Cambodia Tourism', className = '', eager = false }) {
  const [failed, setFailed] = useState(false);

  // If missing or failed, fall back to offline SVG illustration vector
  const fallbackSvg = getOfflineIllustration('General', alt);
  const imageSrc = failed || !src ? fallbackSvg : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => {
        if (!failed) setFailed(true);
      }}
    />
  );
}
