import React from "react";
import Typewriter from 'typewriter-effect';
import SocialIcons from "./SocialIcons";
import Profile from '../assets/Profile.png';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-between pl-20 pr-20">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between w-full">
                <div className="avatar online mb-6 lg:mb-0 lg:mr-14">
                    <div className="w-40 h-40 lg:w-60 lg:h-60 rounded-full border-2 border-[var(--icon-border-color)]">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>

                </div>
                <div className="text-center lg:text-left lg:flex-1">
                    <h1 className="text-4xl font-bold lg:text-5xl">
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
                        <p className="py-6 px-4 lg:px-0">
                            A <b>Computer Science Student</b> specializing in <b>Software Engineering</b> at Bina Nusantara University, dedicated to crafting <b>innovative and creative</b> solutions that make a difference. As a <b>movie enthusiast</b>, I enjoy exploring diverse narratives and genres, appreciating storytelling from various perspectives. I dream of traveling the world to continue my <b>journey of discovery</b>.
                        </p>
                    </div>

                    <a href="https://drive.google.com/file/d/1Y0-z_g_jHn09Z_uccNcpTf6cm_RLijt4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-neutral">
                            See My CV
                        </button>
                    </a>

                </div>
            </div>
            <SocialIcons />
        </div>
    );
};

export default Hero;
