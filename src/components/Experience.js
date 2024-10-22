import React from "react";

const Experience = () => {
    return (
        <>
            <div className="divider text-xl font-bold text-left mb-5">Experiences</div>
            <div className="bg-base-200 pl-5 pr-5 md:pl-20 md:pr-20">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-5 md:mb-10">
                            <time className="font-mono italic text-sm md:text-base">??? - ???</time>
                            <div className="text-lg font-black md:text-xl">New Experiences Await...</div>
                            <ul className="list-disc ml-5 md:text-base">
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-5 md:mb-10 md:text-start">
                            <time className="font-mono italic text-sm md:text-base">Mar 2024 - Present</time>
                            <div className="text-lg font-black md:text-xl">Associate Software Engineer - Bina Nusantara IT Division</div>
                            <ul className="list-disc ml-5 md:text-base">
                                <li>Developed an internal knowledge management portal using Flutter and ASP.NET, designed for use by over 300 employees. In the future, this portal will be used by all internal members of Bina Nusantara University as documentation of all projects in BINUS.</li>
                                <li>Researched and implemented Redis Sentinel, enhancing system reliability and increasing concurrent user capacity to 20.000 through coding optimization and load testing.</li>
                                <li>Optimized scalability and performance for BINUS API Management using ASP.NET, improving system reliability under high-traffic conditions.</li>
                                <li>Utilized the Scrum framework and implemented Git branching strategies to efficiently manage code changes.</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end mb-5 md:mb-10">
                            <time className="font-mono italic text-sm md:text-base">Oct 2023 - Nov 2024</time>
                            <div className="text-lg font-black md:text-xl">Creative Director - Filemagz</div>
                            <ul className="list-disc ml-5 md:text-base">
                                <li>Standardized content creation and publication across FILE’s social media platforms.</li>
                                <li>Managed quality control for six weekly content pieces, maintaining brand consistency.</li>
                                <li>Managed quality control for six weekly content pieces, maintaining brand consistency.</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-5 md:mb-10 md:text-start">
                            <time className="font-mono italic text-sm md:text-base">Nov 2022 - Nov 2024</time>
                            <div className="text-lg font-black md:text-xl">Committee & Activist - Bina Nusantara Computer Club</div>
                            <ul className="list-disc ml-5 md:text-base">
                                <li>Contributed to the subdivision/DPI work program.</li>
                                <li>Guided BNCC activists as a mentor.</li>
                                <li>Participated in various training sessions.</li>
                                <li>Worked in the Event Division, Sponsorship Divison, and Public & Registration Division.</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Experience;
