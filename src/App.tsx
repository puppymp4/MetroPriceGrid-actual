import React, { useState, useMemo } from 'react';
import { Search, Phone, Smartphone, Apple, Info, CheckCircle2, ArrowRightLeft, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONES, PhonePrice } from './data';

type PlanType = 'newNumberWId' | 'portWId';
type PlanPrice = '$40' | '$50' | '$60' | '$65';
type SortOption = 'price' | 'name';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [planType, setPlanType] = useState<PlanType>('newNumberWId');
  const [planPrice, setPlanPrice] = useState<PlanPrice>('$40');
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'ANDROID' | 'APPLE'>('ALL');
  const [sortBy, setSortBy] = useState<SortOption>('price');

  const parsePrice = (priceStr: string): number => {
    if (priceStr === 'FREE') return 0;
    if (priceStr === 'N/A') return Infinity;
    return parseFloat(priceStr.replace(/[$,]/g, ''));
  };

  const filteredPhones = useMemo(() => {
    const filtered = PHONES.filter((phone) => {
      const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'ALL' || phone.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price') {
        const priceA = parsePrice(a[planType][planPrice]);
        const priceB = parsePrice(b[planType][planPrice]);
        
        if (priceA !== priceB) {
          return priceA - priceB;
        }
        // Secondary sort by name if prices are equal
        return a.name.localeCompare(b.name);
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }, [searchQuery, activeCategory, planType, planPrice, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Smartphone className="text-white w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Metro <span className="text-purple-600">Price Finder</span>
              </h1>
            </div>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search phones (e.g. iPhone, Samsung)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Plan Type Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" /> 1. Plan Type
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPlanType('newNumberWId')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                  planType === 'newNumberWId'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                }`}
              >
                <UserPlus className="w-5 h-5 mb-1" />
                <span className="text-sm font-medium leading-tight">New Number</span>
              </button>
              <button
                onClick={() => setPlanType('portWId')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                  planType === 'portWId'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                }`}
              >
                <ArrowRightLeft className="w-5 h-5 mb-1" />
                <span className="text-sm font-medium leading-tight">Port-In</span>
              </button>
            </div>
          </div>

          {/* Plan Price Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" /> 2. Plan Price
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {(['$40', '$50', '$60', '$65'] as PlanPrice[]).map((price) => (
                <button
                  key={price}
                  onClick={() => setPlanPrice(price)}
                  className={`py-3 rounded-xl border-2 transition-all font-bold ${
                    planPrice === price
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" /> 3. Category
            </h2>
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'ANDROID', 'APPLE'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sorting Control */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 rotate-90" /> 4. Sort By
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setSortBy('price')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm ${
                  sortBy === 'price'
                    ? 'border-purple-600 bg-purple-50 text-purple-700 font-bold'
                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                }`}
              >
                <span>Price (Free First)</span>
                {sortBy === 'price' && <CheckCircle2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl border-2 transition-all text-sm ${
                  sortBy === 'name'
                    ? 'border-purple-600 bg-purple-50 text-purple-700 font-bold'
                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                }`}
              >
                <span>Alphabetical (A-Z)</span>
                {sortBy === 'name' && <CheckCircle2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhones.map((phone) => {
              const price = phone[planType][planPrice];
              const isFree = price === 'FREE';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={phone.name}
                  className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all relative overflow-hidden flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${phone.category === 'APPLE' ? 'bg-slate-100' : 'bg-green-50'}`}>
                      {phone.category === 'APPLE' ? (
                        <Apple className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                      ) : (
                        <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      )}
                    </div>
                    {isFree && (
                      <span className="bg-green-100 text-green-700 text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full uppercase tracking-tighter">
                        Free
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-slate-800 leading-tight mb-1 group-hover:text-purple-700 transition-colors line-clamp-2 min-h-[2rem] sm:min-h-0">
                    {phone.name}
                  </h3>
                  <p className="hidden sm:block text-xs text-slate-400 mb-4">{phone.category} Phone</p>

                  <div className="flex items-end justify-between mt-auto pt-2">
                    <div>
                      <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-bold tracking-wider">Price</p>
                      <p className={`text-base sm:text-2xl font-black ${isFree ? 'text-green-600' : 'text-slate-900'}`}>
                        {price}
                      </p>
                    </div>
                    <div className="hidden sm:block bg-slate-50 group-hover:bg-purple-600 p-2 rounded-full transition-colors">
                      <CheckCircle2 className={`w-5 h-5 ${isFree ? 'text-green-500' : 'text-slate-300'} group-hover:text-white`} />
                    </div>
                  </div>

                  {/* Decorative background element */}
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 sm:w-24 sm:h-24 bg-slate-50 rounded-full -z-10 group-hover:bg-purple-50 transition-colors" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredPhones.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No phones found</h3>
            <p className="text-slate-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </main>

      {/* Footer / Disclaimer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 mb-2">
            Prices based on Metro Price Grid 4.05.26. ID verification required for all listed plans.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> ID Verified</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> AutoPay Included</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Instant Discount</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
