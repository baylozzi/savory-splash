import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-restaurant-dark mb-8">Our Story</h1>
          <p className="text-lg text-restaurant-muted mb-8">
            Founded in 2010, Gusto has been serving exceptional cuisine in a warm and elegant atmosphere. 
            Our passion for culinary excellence and dedication to hospitality has made us a beloved destination 
            for food enthusiasts.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif text-restaurant-gold mb-4">Our Mission</h2>
              <p className="text-restaurant-muted">
                To create memorable dining experiences through exceptional food, impeccable service, 
                and an inviting atmosphere that brings people together.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-serif text-restaurant-gold mb-4">Our Values</h2>
              <p className="text-restaurant-muted">
                We believe in using the finest ingredients, supporting local producers, and treating 
                every guest like family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;