import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" 
          className="w-full h-full object-cover opacity-60" 
          alt="Gym"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black leading-tight uppercase">
            WORK <span className="text-orange-500">HARDER</span><br />
            GET <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>STRONGER</span>
          </h1>
          <p className="text-gray-300 max-w-lg mt-6 text-lg">
            Stop making excuses. Start making progress with the most advanced training facility in the city.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-orange-500 hover:bg-white hover:text-black transition-all px-8 py-4 font-black flex items-center gap-2">
              GET STARTED <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;