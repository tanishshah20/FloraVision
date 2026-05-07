import React from 'react';
import SectionTitle from './SectionTitle';
import TrendyPlantCard from './TrendyPlantCard';

const TrendingPlants = () => {
  const trendingPlantsData = [
    {
      id: 1,
      imageSrc: "/rosegold1.png",
      title: "For Your Desks Decorations",
      description: "Elevate your workspace with our carefully selected desktop companions. Designed to thrive indoors and boost your productivity.",
      price: "Rs. 599/-",
      imagePosition: "left"
    },
    {
      id: 2,
      imageSrc: "/rosegold2.png",
      title: "For Your Desks Decorations",
      description: "These resilient beauties are perfect for low-light environments, bringing a touch of nature to any corner of your room.",
      price: "Rs. 399/-",
      imagePosition: "right"
    }
  ];

  return (
    <section className="bg-transparent px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Trendy Plants" background='linear-gradient(316.11deg, rgba(251, 211, 0, 0.5) 0.4%, rgba(255, 255, 255, 0.5) 110.43%)'/>

        <div className="grid grid-cols-1 gap-8 mt-12">
          {trendingPlantsData.map((plant) => (
            <TrendyPlantCard
              key={plant.id}
              imageSrc={plant.imageSrc}
              title={plant.title}
              description={plant.description}
              price={plant.price}
              imagePosition={plant.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
