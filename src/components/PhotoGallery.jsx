import { useState } from 'react';
import available from '../data/available-photos.json';

const ready = new Set(available);

export function PhotoSlot({ file, caption, alt }) {
  const [broken, setBroken] = useState(false);
  const show = ready.has(file) && !broken;
  if (!show) return null;

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-warm-200 bg-[#efe8df]">
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
      <figcaption className="relative flex h-full items-end bg-gradient-to-t from-warm-900/70 to-transparent p-4 text-sm text-warm-50">
        {caption}
      </figcaption>
    </figure>
  );
}

export function PhotoGallery({ items = [] }) {
  const visible = items.filter((item) => ready.has(item.file));
  if (visible.length === 0) return null;

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {visible.map((item) => (
        <PhotoSlot key={item.file} file={item.file} caption={item.caption} alt={item.alt} />
      ))}
    </div>
  );
}
