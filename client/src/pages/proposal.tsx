import { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  AlertTriangle,
  Clock,
  Target,
  TrendingUp,
  PhoneCall,
  FileText,
  CheckCircle2,
  BarChart3,
  Building2,
  DollarSign,
  Users,
  ArrowRight,
  Calendar,
  Rocket,
  Handshake,
  BadgeDollarSign
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CTA_LINK = 'https://cal.com/revryze';

const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function ProposalPage() {
  const [studioOpenings, setStudioOpenings] = useState(20);
  const [membersAcquired, setMembersAcquired] = useState(250);
  const [monthlyValue, setMonthlyValue] = useState(150);
  const [lifetimeMonths, setLifetimeMonths] = useState(14);
  const [rebateAmount, setRebateAmount] = useState(0);

  const MEMBER_GUARANTEE = 250;
  const STANDARD_FEE = 40000;
  const VOLUME_FEE = 30000;
  const VOLUME_THRESHOLD = 10;
  const ROYALTY_RATE = 0.08;

  const effectiveFee = studioOpenings >= VOLUME_THRESHOLD ? VOLUME_FEE : STANDARD_FEE;
  const isVolumeDiscount = studioOpenings >= VOLUME_THRESHOLD;

  const franchiseeTotalCost = effectiveFee + rebateAmount;

  const ltvPerMember = monthlyValue * lifetimeMonths;
  const revenuePerStudio = membersAcquired * ltvPerMember;
  const roiMultiple = franchiseeTotalCost > 0 ? revenuePerStudio / franchiseeTotalCost : 0;

  const royaltyPerStudio = revenuePerStudio * ROYALTY_RATE;
  const hqIncomePerStudio = royaltyPerStudio + rebateAmount;
  const totalHQIncome = hqIncomePerStudio * studioOpenings;

  const perMemberCost = effectiveFee / MEMBER_GUARANTEE;
  const refundExampleShort = 50;
  const refundExampleAmount = refundExampleShort * perMemberCost;

  const handleRebateChange = (value: number) => {
    setRebateAmount(Math.max(0, Math.min(10000, value)));
  };

  return (
    <div className="min-h-screen pb-0 bg-[#0a0a0a] text-white font-sans selection:bg-strongBlue selection:text-black">

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto" data-testid="section-hero">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 text-sm font-semibold mb-8" data-testid="badge-executive-briefing">
            <Zap size={16} className="text-strongBlue" />
            <span className="text-gray-300 tracking-wide">STRONG PILATES x REVRYZE</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]" data-testid="text-hero-title">
            250 MEMBERS.<br />
            <span className="text-strongBlue">OR YOU GET REFUNDED.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed" data-testid="text-hero-subtitle">
            Dedicated US-based sales team. Guaranteed member acquisition. Dollar-for-dollar prorated refund if we miss.
          </p>
        </div>

        {/* OPERATIONAL COMPARISON */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Box 1: The Problem */}
          <Card className="relative bg-neutral-900 border-neutral-800 group hover:border-red-500/30" data-testid="card-boulder-reality">
            <div className="absolute top-4 right-4 opacity-20">
              <AlertTriangle className="text-red-500" size={40} />
            </div>
            <CardContent className="p-6">
              <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4" data-testid="text-boulder-header">The Problem</h3>
              <p className="text-2xl font-bold mb-6" data-testid="text-boulder-tagline">Slow Ramp. Missed Royalties.</p>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3" data-testid="text-boulder-item-0">
                  <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
                  Franchisees distracted by build-out and studio operations.
                </li>
                <li className="flex gap-3" data-testid="text-boulder-item-1">
                  <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  Slow member acquisition = delayed royalty revenue for HQ.
                </li>
                <li className="flex gap-3" data-testid="text-boulder-item-2">
                  <Target size={16} className="text-red-500 shrink-0 mt-0.5" />
                  Result: longer path to profitability, frustrated franchisees.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Box 2: The Solution */}
          <Card className="relative bg-neutral-900/50 border-strongBlue/30 group" data-testid="card-revryze-standard">
            <div className="absolute top-4 right-4 opacity-20">
              <Zap className="text-strongBlue" size={40} />
            </div>
            <CardContent className="p-6">
              <h3 className="text-strongBlue font-bold uppercase tracking-widest text-xs mb-4" data-testid="text-revryze-header">The Solution</h3>
              <p className="text-2xl font-bold mb-6" data-testid="text-revryze-tagline">Revenue First. Fees Second.</p>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3" data-testid="text-revryze-item-0">
                  <Zap size={16} className="text-strongBlue shrink-0 mt-0.5" />
                  100% dedicated US-based sales team per studio opening.
                </li>
                <li className="flex gap-3" data-testid="text-revryze-item-1">
                  <CheckCircle2 size={16} className="text-strongBlue shrink-0 mt-0.5" />
                  250-member guarantee. Dollar-for-dollar prorated refund.
                </li>
                <li className="flex gap-3" data-testid="text-revryze-item-2">
                  <ShieldCheck size={16} className="text-strongBlue shrink-0 mt-0.5" />
                  <span>Faster royalty revenue for STRONG HQ.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-6 bg-neutral-950 border-t border-neutral-900" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white" data-testid="text-pricing-title">250 Members. Guaranteed.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Prorated refund if we miss. No risk for HQ.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Standard Rate */}
            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 flex flex-col" data-testid="card-standard-pricing">
              <div className="mb-6">
                <span className="bg-neutral-800 text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase" data-testid="badge-standard">Standard</span>
                <h3 className="text-4xl font-black mt-4 mb-1 text-white" data-testid="text-standard-price">$40,000</h3>
                <p className="text-gray-500 text-sm font-bold" data-testid="text-standard-desc">Per Studio (Franchisee Pays)</p>
              </div>
              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>250-member guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>Prorated refund protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>Dedicated US-based sales team</span>
                </div>
              </div>
              {/* Rebate Input */}
              <div className="mt-auto pt-6 border-t border-neutral-800">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">Your Rebate Add-On (per studio)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    step="500"
                    value={rebateAmount}
                    onChange={(e) => handleRebateChange(parseInt(e.target.value) || 0)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl py-3 pl-8 pr-4 text-white font-bold text-lg focus:outline-none focus:border-strongBlue"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">Added to franchisee fee. They see one total price.</p>
                <p className="text-sm text-strongBlue font-bold mt-2">Franchisee pays: {formatMoney(STANDARD_FEE + rebateAmount)}</p>
              </div>
            </div>

            {/* Volume Rate */}
            <div className="bg-neutral-900 p-8 rounded-3xl border-2 border-strongBlue/40 flex flex-col relative" data-testid="card-volume-pricing">
              <div className="mb-6">
                <span className="bg-strongBlue text-black text-xs font-bold px-3 py-1 rounded-full uppercase" data-testid="badge-volume">10+ Studios</span>
                <h3 className="text-4xl font-black mt-4 mb-1 text-strongBlue" data-testid="text-volume-price">$30,000</h3>
                <p className="text-gray-400 text-sm font-bold" data-testid="text-volume-desc">Per Studio (Franchisee Pays)</p>
              </div>
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>25% savings per studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>Same 250-member guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>Priority deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-strongBlue" />
                  <span>Requires franchisor agreement with STRONG HQ</span>
                </div>
              </div>
              {/* Rebate Input */}
              <div className="mt-auto pt-6 border-t border-neutral-800">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">Your Rebate Add-On (per studio)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    step="500"
                    value={rebateAmount}
                    onChange={(e) => handleRebateChange(parseInt(e.target.value) || 0)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl py-3 pl-8 pr-4 text-white font-bold text-lg focus:outline-none focus:border-strongBlue"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">Added to franchisee fee. They see one total price.</p>
                <p className="text-sm text-strongBlue font-bold mt-2">Franchisee pays: {formatMoney(VOLUME_FEE + rebateAmount)}</p>
              </div>
            </div>
          </div>

          {/* Prorated Refund Explainer */}
          <div className="mt-8 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 text-center">
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-white">How the refund works:</span> At {formatMoney(effectiveFee)}/studio, each member = {formatMoney(perMemberCost)}. Miss by 50 members = {formatMoney(refundExampleAmount)} refund.
            </p>
          </div>

          {/* Banner */}
          <div className="mt-8 bg-strongBlue/10 p-8 rounded-3xl border border-strongBlue/20 text-center" data-testid="card-guarantee-explainer">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">NO RESULTS = NO MONEY KEPT.</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
              250 members per studio or prorated dollar-for-dollar refund.<br />
              Revenue created. Royalties earned.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-12 px-6 bg-[#0a0a0a] border-t border-neutral-900" data-testid="section-calculator">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" data-testid="text-calculator-title">See the Numbers for STRONG Pilates</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-calculator-subtitle">Adjust the sliders to model your system. Watch the revenue and royalty upside in real time.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">

            {/* INPUTS (Left Side) */}
            <div className="lg:col-span-5 space-y-5">

              {/* Slider 1: Studio Openings */}
              <Card className="bg-neutral-900 border-neutral-800 border-l-4 border-l-strongBlue" data-testid="card-slider-studios">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Building2 size={14} className="text-strongBlue" />
                      Studio Openings (12 months)
                    </label>
                    <span className="text-2xl font-black text-white" data-testid="text-studios-value">{studioOpenings}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={studioOpenings}
                    onChange={(e) => setStudioOpenings(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-strongBlue"
                    data-testid="slider-studios"
                  />
                  {isVolumeDiscount ? (
                    <p className="text-xs text-[#00E87C] mt-2 font-semibold">10+ studios: $30,000/studio — volume rate applies</p>
                  ) : (
                    <p className="text-xs text-gray-600 mt-2">Standard rate: $40,000/studio</p>
                  )}
                </CardContent>
              </Card>

              {/* Slider 2: Members per Studio */}
              <Card className="bg-neutral-900 border-neutral-800" data-testid="card-slider-members">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <Users size={14} className="text-gray-400" />
                      Members per Studio
                    </label>
                    <span className="text-2xl font-black text-white" data-testid="text-members-value">{membersAcquired}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="500"
                    step="10"
                    value={membersAcquired}
                    onChange={(e) => setMembersAcquired(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-strongBlue"
                    data-testid="slider-members"
                  />
                  <p className="text-xs text-gray-500 mt-2">Guarantee: 250. Prorated refund if under.</p>
                </CardContent>
              </Card>

              {/* Slider 3: Avg Monthly Membership Value */}
              <Card className="bg-neutral-900 border-neutral-800" data-testid="card-slider-monthly">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <DollarSign size={14} className="text-gray-400" />
                      Avg Monthly Membership Value
                    </label>
                    <span className="text-2xl font-black text-white" data-testid="text-monthly-value">${monthlyValue}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    value={monthlyValue}
                    onChange={(e) => setMonthlyValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-strongBlue"
                    data-testid="slider-monthly"
                  />
                  <p className="text-xs text-gray-500 mt-2">Monthly revenue per active member</p>
                </CardContent>
              </Card>

              {/* Slider 4: Avg Member Lifetime */}
              <Card className="bg-neutral-900 border-neutral-800" data-testid="card-slider-lifetime">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Avg Member Lifetime</label>
                    <span className="text-2xl font-black text-white" data-testid="text-lifetime-value">{lifetimeMonths} <span className="text-sm font-normal text-gray-600">mo</span></span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="36"
                    step="1"
                    value={lifetimeMonths}
                    onChange={(e) => setLifetimeMonths(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-strongBlue"
                    data-testid="slider-lifetime"
                  />
                  <p className="text-xs text-gray-500 mt-2">Average months a member stays active</p>
                </CardContent>
              </Card>

              {/* Slider 5: Rebate Add-On */}
              <Card className="bg-neutral-900 border-neutral-800 border-l-4 border-l-strongBlue" data-testid="card-slider-rebate">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      <BadgeDollarSign size={14} className="text-strongBlue" />
                      Your Rebate Add-On (per studio)
                    </label>
                    <span className="text-2xl font-black text-white" data-testid="text-rebate-value">{formatMoney(rebateAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={rebateAmount}
                    onChange={(e) => handleRebateChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-strongBlue"
                    data-testid="slider-rebate"
                  />
                  <p className="text-xs text-gray-500 mt-2">Pure HQ income. Added to franchisee fee. They see one combined price.</p>
                </CardContent>
              </Card>
            </div>

            {/* OUTPUTS (Right Side) */}
            <div className="lg:col-span-7 flex flex-col gap-5">

              {/* PER-STUDIO ECONOMICS */}
              <Card className="border-strongBlue/30 bg-neutral-900 relative overflow-hidden" data-testid="card-studio-roi">
                <div className="absolute top-0 right-0 w-48 h-48 bg-strongBlue opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>
                <CardContent className="p-6">
                  <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Per-Studio Economics</h3>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-gray-500 text-xs font-bold uppercase mb-1">Revenue</div>
                      <div className="text-2xl font-black text-white" data-testid="text-revenue-per-studio">
                        {formatMoney(revenuePerStudio)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-xs font-bold uppercase mb-1">Investment</div>
                      <div className="text-2xl font-black text-gray-400" data-testid="text-investment-per-studio">
                        {formatMoney(franchiseeTotalCost)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-xs font-bold uppercase mb-1">ROI Multiple</div>
                      <div className="text-2xl font-black text-strongBlue" data-testid="text-roi-multiple">
                        {roiMultiple.toFixed(1)}x
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Revryze Fee</span>
                      <span>{formatMoney(effectiveFee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HQ Rebate Add-On</span>
                      <span>{formatMoney(rebateAmount)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-white pt-2 border-t border-neutral-800">
                      <span>Franchisee Total Cost</span>
                      <span>{formatMoney(franchiseeTotalCost)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HQ INCOME UPSIDE */}
              <Card className="flex-1 border-neutral-800 bg-neutral-900/80 relative overflow-hidden" data-testid="card-royalty-output">
                <CardContent className="p-6">
                  <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">HQ Income Upside</h3>
                  <p className="text-xs text-gray-600 mb-6">Franchisees pay all fees. STRONG HQ earns 8% royalty on gross member revenue, plus rebate income on every opening.</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-neutral-800/50 rounded-xl">
                      <div className="text-gray-500 text-xs font-bold uppercase mb-2">Royalty per Studio</div>
                      <div className="text-2xl font-black text-white" data-testid="text-royalty-per-studio">
                        {formatMoney(royaltyPerStudio)}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-neutral-800/50 rounded-xl">
                      <div className="text-gray-500 text-xs font-bold uppercase mb-2">Rebate per Studio</div>
                      <div className="text-2xl font-black text-white" data-testid="text-rebate-per-studio">
                        {formatMoney(rebateAmount)}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-neutral-800/50 rounded-xl mb-4">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-2 text-center">HQ Income per Studio</div>
                    <div className="text-2xl font-black text-white text-center" data-testid="text-hq-income-per-studio">
                      {formatMoney(hqIncomePerStudio)}
                    </div>
                  </div>

                  <div className="text-center p-6 bg-strongBlue/10 rounded-xl border border-strongBlue/20">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-2">Total HQ Income (12 months)</div>
                    <div className="text-4xl md:text-5xl font-black text-strongBlue" data-testid="text-total-hq-income">
                      {formatMoney(totalHQIncome)}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{studioOpenings} studios × {formatMoney(hqIncomePerStudio)} = {formatMoney(totalHQIncome)}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Live Refund Example */}
          <div className="mt-8 p-5 bg-neutral-900/50 rounded-2xl border border-neutral-800 text-center">
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-white">Refund example:</span> If Revryze delivers 200 of 250 members at {formatMoney(effectiveFee)}/studio — refund = 50 × {formatMoney(perMemberCost)} = {formatMoney(refundExampleAmount)}
            </p>
          </div>
        </div>
      </section>

      {/* PROOF VAULT */}
      <section className="py-20 px-4 bg-neutral-900/30 border-t border-neutral-900" data-testid="section-proof">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4" data-testid="text-proof-title">Real Results. Real Calls.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-proof-subtitle">Listen to live sales. See the case studies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/swet-call-to-share.wav" target="_blank" rel="noopener noreferrer" className="group" data-testid="link-listen-call">
              <Card className="h-full bg-neutral-900 border-neutral-800 group-hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:border-strongBlue/50">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-strongBlue group-hover:scale-110 transition-transform">
                    <PhoneCall size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" data-testid="text-listen-title">Live Sales Call</h4>
                  <p className="text-gray-400 text-sm" data-testid="text-listen-desc">Hear real-time lead conversion.</p>
                </CardContent>
              </Card>
            </a>

            <a href="/Case-Study-Building-Predictable-Franchise-Growth-copy.pdf" target="_blank" rel="noopener noreferrer" className="group" data-testid="link-beem-case">
              <Card className="h-full bg-neutral-900 border-neutral-800 group-hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:border-strongBlue/50">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-strongBlue group-hover:scale-110 transition-transform">
                    <FileText size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" data-testid="text-beem-title">Franchise Growth Study</h4>
                  <p className="text-gray-400 text-sm" data-testid="text-beem-desc">Predictable multi-location growth.</p>
                </CardContent>
              </Card>
            </a>

            <a href="/attached_assets/Swet-Studio-Recovery-Relaunch-2025.pdf" target="_blank" rel="noopener noreferrer" className="group" data-testid="link-swet-case">
              <Card className="h-full bg-neutral-900 border-neutral-800 group-hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:border-strongBlue/50">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-strongBlue group-hover:scale-110 transition-transform">
                    <BarChart3 size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" data-testid="text-swet-title">STRONG Studio Relaunch</h4>
                  <p className="text-gray-400 text-sm" data-testid="text-swet-desc">From 40 to 170+ members in 60 days.</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* NEXT STEPS SECTION */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-t border-neutral-800" data-testid="section-next-steps">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Ready to Fill Every Studio.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Here's how we move forward together.</p>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-0">
            {[
              {
                num: 1,
                icon: <Handshake size={20} />,
                title: 'ALIGN ON TERMS',
                desc: 'STRONG HQ and Revryze align on partnership structure. If 10+ studios are committed, the $30,000 rate is locked in network-wide via a franchisor agreement.',
              },
              {
                num: 2,
                icon: <Users size={20} />,
                title: 'FRANCHISEE ONBOARDING',
                desc: 'Each franchisee signs directly with Revryze. The franchisee pays one combined fee (Revryze base + HQ rebate add-on). Zero cost to STRONG HQ.',
              },
              {
                num: 3,
                icon: <Rocket size={20} />,
                title: 'SALES TEAM DEPLOYMENT',
                desc: 'Revryze deploys a dedicated US-based sales team 30\u201360 days before each studio opening. Pre-launch member acquisition begins immediately.',
              },
              {
                num: 4,
                icon: <ShieldCheck size={20} />,
                title: '250 MEMBERS OR REFUND',
                desc: 'We hit 250 members or issue a prorated dollar-for-dollar refund for every member short. No risk to the franchisee. No risk to HQ.',
              },
              {
                num: 5,
                icon: <TrendingUp size={20} />,
                title: 'ROYALTIES FLOW TO HQ',
                desc: 'As members join and pay monthly dues, STRONG HQ earns 8% royalty on all gross revenue \u2014 plus the full rebate add-on income from every opening.',
              },
            ].map((step, i) => (
              <div key={step.num} className="flex gap-6 relative">
                {/* Timeline line */}
                {i < 4 && (
                  <div className="absolute left-5 top-14 w-px h-[calc(100%-2rem)] bg-neutral-800"></div>
                )}
                {/* Step number circle */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-strongBlue/20 border border-strongBlue/40 flex items-center justify-center text-strongBlue font-black text-sm z-10">
                  {step.num}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-strongBlue">{step.icon}</span>
                    <h3 className="text-lg font-black uppercase tracking-wide text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
              Let's build the strongest launch system in Pilates.
            </p>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-strongBlue text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Schedule a Call with Revryze
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 text-center px-4" data-testid="section-footer">
        <p className="text-gray-600 text-sm font-bold uppercase tracking-widest mb-2" data-testid="text-footer-company">Growth Point Solutions LLC dba Revryze</p>
        <p className="text-gray-700 text-xs" data-testid="text-footer-confidential">Proprietary and Confidential. STRONG Pilates HQ Leadership Only.</p>
      </footer>
    </div>
  );
}
