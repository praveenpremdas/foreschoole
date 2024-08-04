'use client'
import React from 'react';
import './pricing.css'; // Create and import your CSS file for styling

const Pricing = () => {
  return (
    <div className="pricing-container bg-gray-200 p-6">
      <hr className="h-0.5 mx-auto my-2 bg-slate-300 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h1 className="main-heading text-center font-bold text-black mb-8">Pricing starts as low as ₹149/- per class</h1>
      <div className="pricing-sections grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="pricing-section text-center">
          <img src="/qualityprice.png" alt="Quality & Price" className="section-image mb-8" />
          <p className="description font-mono font-semibold">Incomparable quality & price</p>
        </div>
        <div className="pricing-section text-center">
          <img src="/flexible.png" alt="Flexible Plans" className="section-image mb-4" />
          <p className="description font-mono font-semibold">Flexible & transparent plans</p>
        </div>
        <div className="pricing-section text-center">
          <img src="/refund.png" alt="Refund Policy" className="section-image mb-4" />
          <p className="description font-mono font-semibold">No-questions-asked refund policy</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
