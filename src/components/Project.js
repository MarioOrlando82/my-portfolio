import React, { useEffect, useRef } from "react";


import cardImage1 from '../assets/PunyaLoker.png';
import cardImage2 from '../assets/OceanWell.png';
import cardImage3 from '../assets/LaCineMAHH.png';
import cardImage4 from '../assets/JeTFlix.png';
import cardImage5 from '../assets/Medicare.png';
import cardImage6 from '../assets/Calculator.png';
import cardImage7 from '../assets/Warehouse.png';
import cardImage8 from '../assets/Todolist.png';

const Project = () => {
    const carouselRef = useRef(null);

    const cards = [
        { id: 1, name: "PunyaLoker", description: "PunyaLoker simplifies job searching in Indonesia by providing an accessible, user-friendly platform with updated and relevant listings.", techStack: "HTML, CSS, JavaScript", image: cardImage1, link: "https://github.com/MarioOrlando82/punya-loker" },
        { id: 2, name: "OceanWell", description: "OceanWell promotes marine conservation through donations, volunteering, and education, aiming to raise awareness and engage global communities.", techStack: "Laravel", image: cardImage2, link: "https://github.com/MarioOrlando82/oceanwell-be" },
        { id: 3, name: "LaCineMAHH", description: "LaCineMAHH simplifies movie ticket booking with a user-friendly platform, enhancing the cinema experience through technology and feedback.", techStack: "Laravel", image: cardImage3, link: "https://github.com/MarioOrlando82/LACinemAHH" },
        { id: 4, name: "JeTFlix", description: "JetFlix offers diverse movies, including children's films, with a user-friendly platform for seamless family entertainment and convenience.", techStack: "HTML, CSS, JavaScript", image: cardImage4, link: "https://github.com/MarioOrlando82/jetflix" },
        { id: 5, name: "Medicare", description: "MediCare's website boosts product visibility, online registration, and access to healthcare supplies, addressing pandemic challenges and enhancing engagement.", techStack: "HTML, CSS, JavaScript", image: cardImage5, link: "https://github.com/MarioOrlando82/medicare" },
        { id: 6, name: "Calculator", description: "Replicates the iPhone calculator, offering an intuitive interface for basic and advanced calculations, enhancing accessibility for all users.", techStack: "TypeScript", image: cardImage6, link: "https://github.com/MarioOrlando82/simple-calculator" },
        { id: 7, name: "Warehouse", description: "Warehouse management system that optimizes inventory control, enhances productivity, and streamlines operations with real-time tracking features.", techStack: "ASP .NET", image: cardImage7, link: "https://github.com/MarioOrlando82/warehouse" },
        { id: 8, name: "Todolist", description: "Intuitive to-do list app that helps users organize tasks, prioritize effectively, and enhance productivity through collaboration.", techStack: "Flutter", image: cardImage8, link: "https://github.com/MarioOrlando82/simple-to-do-list-app" },
    ];

    useEffect(() => {
        const carousel = carouselRef.current;
        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        const scrollInterval = 20;

        const autoScroll = () => {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= carousel.scrollWidth / 2) {
                scrollAmount = 0;
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(autoScroll, scrollInterval);

        return () => clearInterval(interval);
    }, []);

    const renderCardCard = (Card, index) => (
        <div key={index} className="flex-shrink">
            <div className="card bg-base-100 shadow-xl h-96 w-64">
                <figure>
                    <img
                        src={Card.image}
                        alt={Card.name}
                        className="w-45 mx-auto"
                    />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title text-sm">{Card.name}</h2>
                    <h6 className="text-xs text-gray-500 mb-2">{Card.techStack}</h6>
                    <p className="text-xs">{Card.description}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => window.open(Card.link, '_blank')}
                        >
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="divider text-xl font-bold">Projects</div>
            <div className="overflow-hidden p-20">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 p-2 overflow-x-hidden"
                    style={{
                        width: "calc(100% + 70px)",
                        marginLeft: "-30px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        marginBottom: "30px"
                    }}
                >
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                    {cards.map((Card, index) => renderCardCard(Card, index))}
                </div>
            </div>
        </>
    );
};

export default Project;
