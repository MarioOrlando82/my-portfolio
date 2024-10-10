import React from "react";
import { Icon } from '@mdi/react';
import { mdiFaceMan, mdiFaceWoman } from '@mdi/js';

const Skill = () => {
    return (
        <>
            <div className="divider text-xl font-bold">Skills</div>
            <div className="bg-base-200 pl-20 pr-20">
                <div className="chat chat-start">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceWoman} className="rounded-full" size={2} />
                        </div>
                    </div>
                    <div className="chat-header">
                        You
                        <time className="text-xs opacity-50 ml-1">12:45</time>
                    </div>
                    <div className="chat-bubble">What are your hard skills?</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceMan} className="rounded-full" size={2} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Mario Orlando
                        <time className="text-xs opacity-50 ml-1">12:46</time>
                    </div>
                    <div className="chat-bubble">C, HTML, CSS, JavaScript, Laravel, PHP, Java, Python, SQL, Bootstrap, React, Tableau, SSIS, C#, ASP .NET, TypeScript, Flutter, Dart, Tailwind, Redis, Firebase.</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceWoman} className="rounded-full" size={2} />

                        </div>
                    </div>
                    <div className="chat-header">
                        You
                        <time className="text-xs opacity-50 ml-1">12:47</time>
                    </div>
                    <div className="chat-bubble">Whoa! Impressive! How about your soft skills?</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceMan} className="rounded-full" size={2} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Mario Orlando
                        <time className="text-xs opacity-50 ml-1">12:48</time>
                    </div>
                    <div className="chat-bubble">Creative Thinking, Collaboration, Well-Organized, Time Management, Public Speaking, Leadership, Critical Thinking, Decision Making, Good Communication.</div>
                    <div className="chat-footer opacity-50">Seen at 12:48</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceWoman} className="rounded-full" size={2} />

                        </div>
                    </div>
                    <div className="chat-header">
                        You
                        <time className="text-xs opacity-50 ml-1">12:49</time>
                    </div>
                    <div className="chat-bubble">Then, what software can you use?</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image">
                        <div className="w-10 rounded-full">
                            <Icon path={mdiFaceMan} className="rounded-full" size={2} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Mario Orlando
                        <time className="text-xs opacity-50 ml-1">12:50</time>
                    </div>
                    <div className="chat-bubble">Figma, Google Workspace, Postman, VS Code, Visual Studio, Microsoft Office, Clickup, Adobe Photoshop, Adobe Premiere Pro, GitHub, Azure DevOps, Jmeter.</div>
                    <div className="chat-footer opacity-50">Seen at 12:50</div>
                </div>
            </div>
        </>
    );
};

export default Skill;
