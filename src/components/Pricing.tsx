import { Check } from 'lucide-react';

const plans = [
  { name: 'Basic', price: '29', features: ['Gym Access', 'Lockers', 'Standard Equipment'] },
  { name: 'Pro', price: '59', features: ['24/7 Access', 'Personal Trainer', 'Nutrition Plan'], popular: true },
  { name: 'Elite', price: '99', features: ['All Access', 'Private Spa', 'Guest Passes'] },
];

const Pricing = () => {
  return (
    <section id="membership" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Pricing Plans</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-16 uppercase">Choose Your Level</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-2xl border ${plan.popular ? 'border-orange-500 bg-orange-500/5 scale-105' : 'border-white/10 bg-black'} flex flex-col items-center`}>
              <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
              <div className="text-5xl font-black mb-6">${plan.price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-4 mb-8 text-left w-full">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-gray-400">
                    <Check size={18} className="text-orange-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-bold rounded-lg ${plan.popular ? 'bg-orange-500' : 'bg-white text-black'}`}>
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;