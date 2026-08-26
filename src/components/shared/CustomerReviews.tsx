import React from 'react';
import { Star, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { FABRIC_REVIEWS } from '../../data/fabricData';
import { PERFUME_REVIEWS } from '../../data/perfumeData';
import { PortalType } from '../../types';

interface CustomerReviewsProps {
  currentPortal: PortalType;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  currentPortal,
}) => {
  const reviews = currentPortal === 'fabric' ? FABRIC_REVIEWS : PERFUME_REVIEWS;

  return (
    <section className="py-20 bg-[#fbf9f5]" id="customer-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ece1] border border-[#e2d5c3] text-[#7a5d20] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patron Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1f1a17]">
            Customer Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#6b6158] font-light leading-relaxed">
            Reflections from connoisseurs, tailors, and wedding families who have experienced our bespoke service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#fcfaf7] border border-[#e8ded1] hover:border-[#b38e44]/60 rounded-2xl p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              id={`review-card-${rev.id}`}
            >
              <div className="space-y-4">
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#ebd8c7] group-hover:text-[#c5a059] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4a413a] leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#f0e6d8] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif font-medium text-base text-[#1f1a17]">
                      {rev.author}
                    </h3>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2d6a4f]" title="Verified Patron" />
                    )}
                  </div>
                  <p className="text-xs text-[#5c5249]">
                    {rev.role} • {rev.location}
                  </p>
                </div>
                <span className="text-xs text-[#8c8177]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f4ece1] border border-[#e4d6c3] text-xs text-[#5c5249]">
            <span className="font-semibold text-[#1f1a17]">4.9 / 5.0 Rating</span>
            <span>•</span>
            <span>Based on 350+ Google & Showroom Verified Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
