import React from "react";
import Typewriter from 'typewriter-effect';
import SocialIcons from "./SocialIcons";
import Profile from '../assets/Profile.png';
import Meteors from "./Meteors";
import ShimmerButton from "./ShimmerButton";

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-between pl-6 pr-6 lg:pl-20 lg:pr-20 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between w-full z-10">
                <div className="avatar online mb-4 lg:mb-0 lg:mr-6">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 border-[var(--icon-border-color)]">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left lg:flex-1">
                    <h1 className="text-3xl font-bold lg:text-4xl">
                        <Typewriter
                            options={{
                                strings: ["Hi! I'm Mario Orlando"],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 100,
                            }}
                        />
                    </h1>
                    <div className="flex justify-center">
                        <p className="py-4 px-2 lg:px-0 text-sm lg:text-base">
                            A <b>Computer Science Student</b> specializing in <b>Software Engineering</b> at Bina Nusantara University, dedicated to crafting <b>innovative and creative</b> solutions that make a difference. As a <b>movie enthusiast</b>, I enjoy exploring diverse narratives and genres, appreciating storytelling from various perspectives. I dream of traveling the world to continue my <b>journey of discovery</b>.
                        </p>
                    </div>
                    <a href="https://drive.google.com/file/d/1oGmkg7VI5j4GzfhHbj2jdGzGA5ZQl-v_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <ShimmerButton className="text-sm lg:text-base block sm:inline-block sm:mx-0 mx-auto">
                            See My CV
                        </ShimmerButton>


                    </a>
                </div>
            </div>
            <SocialIcons />
            <Meteors number={40} />
        </div>
    );
};

export default Hero;