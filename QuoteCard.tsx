
import React from 'react';
import type { Quote } from '../types';

interface QuoteCardProps {
  quote: Quote;
  className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, className }) => {
  return (
    <figure className={`w-full max-w-2xl text-center fade-in ${className ?? ''}`}>
      <blockquote className="text-2xl md:text-3xl font-light italic text-stone-700 leading-relaxed">
        “{quote.text}”
      </blockquote>
      <figcaption className="mt-6 text-right">
        <span className="text-lg font-medium text-stone-600">— {quote.author}</span>
      </figcaption>
    </figure>
  );
};

export default QuoteCard;