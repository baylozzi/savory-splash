import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-restaurant-dark text-center mb-8">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-restaurant-gold mb-4">Get in Touch</h2>
              <div className="space-y-4 text-restaurant-muted">
                <p>
                  <strong>Address:</strong><br />
                  123 Restaurant Street<br />
                  City, State 12345
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  (555) 123-4567
                </p>
                <p>
                  <strong>Email:</strong><br />
                  info@gusto.com
                </p>
                <p>
                  <strong>Hours:</strong><br />
                  Mon-Sun: 11:00 AM - 10:00 PM
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label htmlFor="message" className="block text-sm font-medium text-restaurant-dark mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;