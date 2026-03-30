import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">
          IRON<span className="text-orange-500">PULSE</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-bold uppercase text-xs tracking-widest">
          {['Home', 'Programs', 'Membership', 'Testimonials'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-all">
            JOIN NOW
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 p-6 flex flex-col gap-4 text-center border-b border-orange-500">
          <a href="#" className="font-bold py-2">PROGRAMS</a>
          <a href="#" className="font-bold py-2">MEMBERSHIP</a>
          <button className="bg-orange-500 py-3 rounded-lg font-bold">JOIN NOW</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;