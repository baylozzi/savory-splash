import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-restaurant-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-6 animate-fade-down">
            Welcome to Gusto
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up">
            Experience culinary excellence in every bite
          </p>
          <Link 
            to="/reservation" 
            className="inline-flex items-center px-6 py-3 bg-restaurant-gold text-white rounded hover:bg-restaurant-gold/90 transition-colors animate-fade-up"
          >
            Reserve a Table
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="section-fade">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-restaurant-dark">
                Culinary Excellence
              </h2>
              <p className="text-restaurant-muted mb-6 leading-relaxed">
                Our passionate chefs create extraordinary dishes using the finest ingredients, 
                bringing you a dining experience that celebrates both tradition and innovation.
              </p>
              <Link 
                to="/menu" 
                className="inline-flex items-center text-restaurant-gold hover:text-restaurant-gold/80 transition-colors"
              >
                Explore Our Menu
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="section-fade">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Signature dish" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-restaurant-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 section-fade">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Special Experiences</h2>
            <p className="text-white/80">Discover our carefully curated dining experiences</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chef's Table",
                description: "An intimate dining experience with our executive chef",
                image: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Wine Pairing",
                description: "Expert-curated wine selections for your meal",
                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Tasting Menu",
                description: "A journey through our most celebrated dishes",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((offer, index) => (
              <div key={index} className="section-fade">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-full">
                      <Link 
                        to="/reservation" 
                        className="px-6 py-2 bg-restaurant-gold text-white rounded hover:bg-restaurant-gold/90 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif mt-4 mb-2">{offer.title}</h3>
                <p className="text-white/80">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;