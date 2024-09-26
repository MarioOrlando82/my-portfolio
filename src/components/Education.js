import React from "react";

const Education = () => {
    return (
        <>
            <div className="divider text-lg font-bold text-left mb-5">Education</div>
            <div className="flex justify-center items-center">
                <div className="mockup-browser bg-base-100 border mx-5 md:mx-20 w-full lg:w-full h-auto">
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://mario-orlando.com</div>
                    </div>
                    <div className="p-8 flex justify-center">
                        <ul className="steps steps-vertical lg:steps-horizontal items-start gap-4">
                            <li className="step step-primary">
                                <div className="text-left">
                                    <p className="text-center text-xs md:text-sm">Jul 2019 – Jul 2022</p>
                                    <h3 className="font-semibold text-center text-sm md:text-lg">SMA Xaverius 1 Palembang</h3>
                                    <p className="text-center text-xs md:text-sm">High School Diploma (MIPA)</p>
                                    <p className="text-center text-xs md:text-sm">GPA: 90.4/100</p>
                                </div>
                            </li>
                            <li className="step step-primary">
                                <div className="text-left">
                                    <p className="text-center text-xs md:text-sm">Sep 2022 – 2026</p>
                                    <h3 className="font-semibold text-center text-sm md:text-lg">Bina Nusantara University</h3>
                                    <p className="text-center text-xs md:text-sm">Computer Science</p>
                                    <p className="text-center text-xs md:text-sm">GPA: 3.89/4.00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
