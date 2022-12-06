import React from "react";
import resume from "../jonathanMorenoResume.pdf";
function Resume() {

    return (

        <div className="text-white ml-24 mb-10">
            <h2 className="text-7xl border-b-8 border-double border-mColorll w-fit pb-4 mb-4 ">Jonathan Moreno</h2>
            <h3 className="text-3xl">Full Stack Developer | <a href={resume}>Resume</a></h3>

            <div className="text-2xl mt-5 bg-sColorll rounded-xl w-fit block m-auto p-5">
                <h4 className="inline-block underline mb-8">Skills:</h4>
                <ul className="grid grid-cols-3 gap-4 ml-60 gap-x-24">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>JSON</li>
                    <li>APIs</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>Command Line</li>
                    <li>Object Oriented Programming</li>
                    <li>Agile</li>
                    <li>Test Driven Development</li>
                    <li>Responsive Design</li>
                    <li>Progressive Web Applications</li>
                    <li>Model View Controller</li>
                    <li>Object Relational Mapping</li>
                    <li>Tailwindcss</li>
                </ul>
            </div>
        </div >

    )

}

export default Resume;