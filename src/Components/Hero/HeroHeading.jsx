import React from "react";

const HeroHeading = ({ activeTab, setActiveTab }) => {
    return (
        <>
            {/* Heading */}
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                Find Your Home in Abu Dhabi.
            </h1>

            {/* Tabs */}
            <div className="flex justify-center space-x-3 mb-6 flex-wrap">
                {["buy", "rent", "offplan"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full text-base md:text-lg transition ${activeTab === tab
                            ? "bg-white text-black shadow-lg"
                            : "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/40"
                            }`}
                    >
                        {tab === "buy" ? "Buy" : tab === "rent" ? "Rent" : "Off Plan"}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HeroHeading;
