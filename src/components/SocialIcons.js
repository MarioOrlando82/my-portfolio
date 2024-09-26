import React from 'react';
import { Icon } from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiGmail, mdiInstagram } from '@mdi/js';

const SocialIcons = () => {
    const iconStyle = "flex items-center justify-center w-12 h-12 rounded-full transition border border-[var(--icon-border-color)] bg-[var(--icon-bg)] hover:bg-[var(--icon-hover-bg)]";
    const svgStyle = "fill-[var(--icon-color)]";

    return (
        <div className="flex space-x-6 lg:space-x-0 lg:flex-col lg:space-y-4 mt-8 lg:mt-0">
            <a
                href="https://github.com/MarioOrlando82"
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyle}
            >
                <Icon path={mdiGithub} size={1} className={svgStyle} />
            </a>
            <a
                href="https://www.linkedin.com/in/mario-orlandoo/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyle}
            >
                <Icon path={mdiLinkedin} size={1} className={svgStyle} />
            </a>
            <a
                href="mailto:mario796gt@gmail.com"
                className={iconStyle}
            >
                <Icon path={mdiGmail} size={1} className={svgStyle} />
            </a>
            <a
                href="https://www.instagram.com/mario.orlando_/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyle}
            >
                <Icon path={mdiInstagram} size={1} className={svgStyle} />
            </a>
        </div>
    );
};

export default SocialIcons;
