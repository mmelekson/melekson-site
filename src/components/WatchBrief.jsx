import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { content } from '../data/content';
import { useSEO } from '../hooks/useSEO';

function renderInline(text) {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;
  const nodes = [];
  let last = 0;
  let match;
  let key = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith('**')) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('[')) {
      const linked = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const label = linked[1];
      const href = linked[2];
      nodes.push(
        href.startsWith('/') ? (
          <Link key={key} to={href} className="text-accent hover:underline">{label}</Link>
        ) : (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{label}</a>
        )
      );
    } else {
      nodes.push(
        <a key={key} href={token} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">{token}</a>
      );
    }
    last = match.index + token.length;
    key += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function blocksFrom(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3) });
      i += 1;
      continue;
    }
    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', text: line.slice(2) });
      i += 1;
      continue;
    }
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }
    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('# ') &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('- ')
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: 'p', text: paragraph.join(' ') });
  }
  return blocks;
}

export function BriefBody({ markdown }) {
  return (
    <div className="space-y-5 text-warm-700 leading-relaxed">
      {blocksFrom(markdown).map((block, index) => {
        if (block.type === 'h1') {
          return (
            <h1 key={index} className="font-heading text-4xl sm:text-5xl text-warm-900 leading-tight">
              {renderInline(block.text)}
            </h1>
          );
        }
        if (block.type === 'h2') {
          return (
            <h2 key={index} className="font-heading text-2xl text-warm-900 pt-4">
              {renderInline(block.text)}
            </h2>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={index} className="list-disc pl-5 space-y-3">
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}

export default function WatchBrief() {
  const { slug } = useParams();
  const brief = content.aventuraWatch.briefs.find((item) => item.slug === slug);
  const canonical = brief ? `https://melekson.com/aventura-watch/${brief.slug}` : 'https://melekson.com/aventura-watch';

  useSEO(
    brief
      ? {
          title: `${brief.title} — Myron Melekson`,
          description: brief.excerpt,
          ogUrl: canonical,
        }
      : {}
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!brief) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-heading text-2xl text-warm-900 mb-4">Brief not found</p>
          <Link to="/aventura-watch" className="text-accent font-medium hover:underline">
            &larr; Aventura Watch
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/aventura-watch" className="inline-flex text-sm text-warm-500 hover:text-accent mb-8">
          &larr; Aventura Watch
        </Link>
        <p className="text-sm text-warm-400 mb-8">{brief.date}</p>
        <BriefBody markdown={brief.body} />
      </div>
    </article>
  );
}
