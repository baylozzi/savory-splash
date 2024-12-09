import React from 'react';
import Navbar from '@/components/Navbar';

const Menu = () => {
  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-restaurant-dark text-center mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starters */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-restaurant-gold mb-4">Starters</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Bruschetta</h3>
                  <p className="text-restaurant-muted">Toasted bread with tomatoes and herbs</p>
                </div>
                <span className="text-restaurant-gold">$12</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Calamari</h3>
                  <p className="text-restaurant-muted">Crispy fried squid with aioli</p>
                </div>
                <span className="text-restaurant-gold">$16</span>
              </div>
            </div>
          </div>

          {/* Main Courses */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-restaurant-gold mb-4">Main Courses</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Grilled Salmon</h3>
                  <p className="text-restaurant-muted">With seasonal vegetables</p>
                </div>
                <span className="text-restaurant-gold">$32</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Beef Tenderloin</h3>
                  <p className="text-restaurant-muted">With truffle mashed potatoes</p>
                </div>
                <span className="text-restaurant-gold">$38</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;