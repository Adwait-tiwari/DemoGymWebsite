import Layout from './components/Layout';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

function App() {
  return (
    <Layout>
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h5 className="text-4xl font-black text-black">500+</h5><p className="text-black/70 font-bold uppercase text-xs">Members</p></div>
          <div><h5 className="text-4xl font-black text-black">20+</h5><p className="text-black/70 font-bold uppercase text-xs">Trainers</p></div>
          <div><h5 className="text-4xl font-black text-black">15+</h5><p className="text-black/70 font-bold uppercase text-xs">Programs</p></div>
          <div><h5 className="text-4xl font-black text-black">100%</h5><p className="text-black/70 font-bold uppercase text-xs">Results</p></div>
        </div>
      </section>

      <Pricing />

      {/* Simple Footer Placeholder */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 IRONPULSE GYM. ALL RIGHTS RESERVED.
      </footer>
    </Layout>
  );
}

export default App;