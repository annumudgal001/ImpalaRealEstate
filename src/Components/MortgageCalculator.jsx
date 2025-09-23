import React, { useState } from 'react';

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [downPayment, setDownPayment] = useState(20);
    const [interest, setInterest] = useState(4.5);
    const [term, setTerm] = useState(30);

    const calculateMonthly = () => {
        const principal = loanAmount * (1 - downPayment / 100);
        const monthlyRate = interest / 1200;
        const months = term * 12;
        const monthly = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        return monthly.toFixed(2);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Mortgage Calculator</h2>
                <div className="max-w-md mx-auto bg-neutral p-6 rounded-lg shadow-md">
                    <label className="block mb-4">
                        Loan Amount (AED): <input type="number" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
                    </label>
                    <label className="block mb-4">
                        Down Payment (%): <input type="number" value={downPayment} onChange={e => setDownPayment(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
                    </label>
                    <label className="block mb-4">
                        Interest Rate (%): <input type="number" value={interest} onChange={e => setInterest(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
                    </label>
                    <label className="block mb-4">
                        Term (Years): <input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full px-4 py-2 border rounded-md" />
                    </label>
                    <p className="text-center font-bold">Monthly Payment: AED {calculateMonthly()}</p>
                </div>
            </div>
        </section>
    );
};

export default MortgageCalculator;