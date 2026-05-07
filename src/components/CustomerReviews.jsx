import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../data/testimonials';

const CustomerReviews = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Customer Review" background='linear-gradient(316.11deg, rgba(251, 211, 0, 0.5) 0.4%, rgba(255, 255, 255, 0.5) 110.43%)'/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
