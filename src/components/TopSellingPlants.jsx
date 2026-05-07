import React from 'react';
import SectionTitle from './SectionTitle';
import PlantCard from './PlantCard';
import plantsData from '../data/plants';

const TopSellingPlants = () => {
  return (
    <section className="bg-brand-dark px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Top Selling Plants" background='linear-gradient(316.11deg, rgba(251, 211, 0, 0.5) 0.4%, rgba(255, 255, 255, 0.5) 110.43%)'/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-16">
          {plantsData.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
