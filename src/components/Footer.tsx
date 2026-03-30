import {Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-3xl font-black italic tracking-tighter text-white">
              IRON<span className="text-orange-500">PULSE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ultimate destination for those who dare to push their limits. 
              Join the elite community and transform your life today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-orange-500 transition-colors">Programs</a></li>
              <li><a href="#membership" className="hover:text-orange-500 transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Personal Trainers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" /> 
                123 Fitness Ave, New York, NY
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" /> 
                +1 (555) 000-IRON
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" /> 
                contact@ironpulse.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Join Our Newsletter</h4>
            <p className="text-gray-400 text-xs mb-4 uppercase">Get fitness tips and gym updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 px-4 py-2 hover:bg-orange-600 transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 <span className="text-white font-bold">IRONPULSE</span>. Built for Champions.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors underline decoration-orange-500/50">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-orange-500/50">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;