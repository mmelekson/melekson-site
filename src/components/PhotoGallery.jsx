import { useState } from 'react';
import available from '../data/available-photos.json';

const ready = new Set(available);

export function PhotoSlot({ file, caption, alt }) {
  const [broken, setBroken] = useState(false);
  const show = ready.has(file) && !broken;

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-warm-200 bg-[#efe8df]">
      {show ? (
        <img
          src={`/photos/${file}`}
          alt={alt || caption}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setBroken(true)}
        />
      ) : null}
      <figcaption className={`relative flex h-full items-end p-4 text-sm ${show ? 'bg-gradient-to-t from-warm-900/70 to-transparent text-warm-50' : 'text-warm-600'}`}>
        {caption}
      </figcaption>
    </figure>
  );
}

export function PhotoGallery({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <PhotoSlot key={item.file} {...item} />
      ))}
    </div>
  );
}
