import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Reservation = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Submitted",
      description: "We'll contact you shortly to confirm your reservation.",
    });
  };

  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-restaurant-dark text-center mb-8">
            Make a Reservation
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-restaurant-dark mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                className="w-full"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-restaurant-dark mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                className="w-full"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-restaurant-dark mb-2">
                Date
              </label>
              <Input
                id="date"
                type="date"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-restaurant-dark mb-2">
                Time
              </label>
              <Input
                id="time"
                type="time"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-restaurant-dark mb-2">
                Number of Guests
              </label>
              <Input
                id="guests"
                type="number"
                required
                min="1"
                max="10"
                className="w-full"
                placeholder="2"
              />
            </div>
            <Button type="submit" className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90">
              Reserve Table
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;