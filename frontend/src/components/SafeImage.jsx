import React, { useState } from 'react';

export default function SafeImage({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-slate-800 via-slate-900 to-amber-950 flex items-center justify-center`}
        role="img"
        aria-label={alt}
      >
        <span className="px-3 text-center text-[11px] font-bold uppercase tracking-wider text-amber-200/80">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
