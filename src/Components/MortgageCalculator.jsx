import React, { useState } from 'react';

const MortgageCalculator = () => {
    const [price, setPrice] = useState(1000000);
    const [downPayment, setDownPayment] = useState(25);
    const [interest, setInterest] = useState(4.5);
    const [term, setTerm] = useState(25);

    const loanAmount = price * (1 - downPayment / 100);
    const monthlyRate = interest / 1200;
    const months = term * 12;
    const monthly = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalInterest = (monthly * months) - loanAmount;
    const totalPayment = monthly * months;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Mortgage Calculator</h2>
                    <p className="text-gray-500">Calculate your monthly mortgage payments and explore different scenarios for your Abu Dhabi property investment.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Left: Inputs with Sliders */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2">Property Price</label>
                            <input type="number" value={price} onChange={e => setPrice(+e.target.value)} className="w-full px-4 py-2 border rounded-md mb-2" />
                            <input type="range" min={100000} max={5000000} value={price} onChange={e => setPrice(+e.target.value)} className="w-full" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>AED 100K</span>
                                <span>AED 5M</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Down Payment: {downPayment}%</label>
                            <input type="number" value={downPayment} onChange={e => setDownPayment(+e.target.value)} className="w-full px-4 py-2 border rounded-md mb-2" />
                            <input type="range" min={5} max={50} value={downPayment} onChange={e => setDownPayment(+e.target.value)} className="w-full" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>5%</span>
                                <span>50%</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Interest Rate: {interest}%</label>
                            <input type="number" step={0.1} value={interest} onChange={e => setInterest(+e.target.value)} className="w-full px-4 py-2 border rounded-md mb-2" />
                            <input type="range" min={1} max={10} step={0.1} value={interest} onChange={e => setInterest(+e.target.value)} className="w-full" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>1%</span>
                                <span>10%</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Loan Term: {term} years</label>
                            <input type="number" value={term} onChange={e => setTerm(+e.target.value)} className="w-full px-4 py-2 border rounded-md mb-2" />
                            <input type="range" min={5} max={30} value={term} onChange={e => setTerm(+e.target.value)} className="w-full" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>5 years</span>
                                <span>30 years</span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Outputs */}
                    <div className="space-y-4">
                        <div className="bg-orange-500 text-white p-4 rounded-md text-center">
                            <p className="text-sm">Monthly Payment</p>
                            <h3 className="text-3xl font-bold">${monthly.toFixed(0)}</h3>
                            <p className="text-xs">Principal & Interest</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-md shadow">
                                <p className="text-sm text-gray-500">Loan Amount</p>
                                <h4 className="font-bold">${loanAmount.toLocaleString()}</h4>
                            </div>
                            <div className="bg-white p-4 rounded-md shadow">
                                <p className="text-sm text-gray-500">Down Payment</p>
                                <h4 className="font-bold">${(price - loanAmount).toLocaleString()}</h4>
                            </div>
                            <div className="bg-white p-4 rounded-md shadow">
                                <p className="text-sm text-gray-500">Total Interest</p>
                                <h4 className="font-bold">${totalInterest.toLocaleString()}</h4>
                            </div>
                            <div className="bg-white p-4 rounded-md shadow">
                                <p className="text-sm text-gray-500">Total Payment</p>
                                <h4 className="font-bold">${totalPayment.toLocaleString()}</h4>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md shadow">
                            <p className="text-sm font-bold mb-2">Important Notes</p>
                            <ul className="text-xs text-gray-500 list-disc pl-4 space-y-1">
                                <li>Rates shown are estimates and may vary based on your credit profile</li>
                                <li>Additional costs may include insurance, taxes, and fees</li>
                                <li>UAE residents may qualify for different rates and terms</li>
                                <li>Contact our mortgage specialists for personalized advice</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500 text-sm">
                    Ready to get pre-approved? Our mortgage specialists are here to help.
                    <button className="ml-2 px-6 py-2 bg-orange-500 text-white rounded-md">Speak with a Mortgage Specialist</button>
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;