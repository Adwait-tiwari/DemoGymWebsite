import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Bodybuilder",
    content: "The equipment here is top-notch. I've been to many gyms, but IronPulse has the best atmosphere for serious gains.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    name: "Sarah Miller",
    role: "Yoga Enthusiast",
    content: "I love the diversity of classes. The trainers actually care about your form and progress, not just your membership fee.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Marathon Runner",
    content: "The 24/7 access is a lifesaver for my busy schedule. Clean, professional, and highly motivating environment.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Model",
    content: "IronPulse isn't just a gym; it's a community. The lighting, the music, and the people—everything is perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase mt-4 text-white"
          >
            What Our <span className="text-orange-500">Members</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative group hover:bg-zinc-900 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-orange-500/20 group-hover:text-orange-500/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-gray-400 italic mb-8 leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-orange-500 text-xs uppercase font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action below testimonials */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-orange-500 p-12 rounded-[2rem] text-center flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-black uppercase mb-6">
            Ready to write your own story?
          </h3>
          <button className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;