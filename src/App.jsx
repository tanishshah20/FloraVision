import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TrendingPlants from './components/TrendingPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReviews from './components/CustomerReviews';
import O2Plants from './components/O2Plants';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <div 
        className="bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <Navbar />
        <main>
          <HeroBanner />
          <TrendingPlants />
        </main>
      </div>
      <main className="flex-grow">
        <TopSellingPlants />
        <CustomerReviews />
        <O2Plants />
      </main>
      <Footer />
    </div>
  );
}

export default App;
