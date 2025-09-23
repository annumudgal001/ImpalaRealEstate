import React, { useState } from "react";
import heroBg from "../../assets/HeroBG.jpg";
import HeroHeading from "./HeroHeading";
import HeroSearch from "./HeroSearch";

const Hero = () => {
    const [activeTab, setActiveTab] = useState("buy");

    return (
        <section
            className="bg-cover bg-center flex items-center justify-center text-white relative"
            style={{
                backgroundImage: `url(${heroBg})`,
                minHeight: "calc(100vh - var(--header-h))", // ✅ dynamic height
                paddingTop: "var(--header-h)", // ✅ ensures no overlap with header
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <HeroHeading activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeroSearch />
            </div>
        </section>
    );
};

export default Hero;
