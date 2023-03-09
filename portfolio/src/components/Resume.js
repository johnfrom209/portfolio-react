import React from "react";
import resume from "../jonathanMorenoResume.pdf";
function Resume() {

    return (

        <div className="text-white ml-10 md:ml-24">
            <h2 className="text-4xl xl:text-7xl border-b-8 border-double border-mColorll w-fit pb-4 mb-4 ">Jonathan Moreno</h2>
            <h3 className="text-2xl">Full Stack Developer | <a className="hover:shadow-mColorll hover:shadow-md" href={resume}>Resume</a></h3>

            <div className="text-lg mt-5 bg-sColorll rounded-xl w-fit block mr-10 p-5 border-4 border-mColord">
                <h4 className="inline-block underline mb-8">Skills:</h4>
                <ul className="grid xl:grid-cols-4 gap-2 ml-20 md:ml-32 gap-x-2">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose ODM</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>JSON</li>
                    <li>Web APIs</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>Command Line</li>
                    <li>Object Oriented Programming</li>
                    <li>Agile</li>
                    <li>Test Driven Development</li>
                    <li>Unit Testing w/ JEST</li>
                    <li>Responsive Design</li>
                    <li>Progressive Web Applications</li>
                    <li>Model View Controller</li>
                    <li>Object Relational Mapping</li>
                    <li>Imperative Programming</li>
                    <li>Declarative Programming</li>
                    <li>Relational Databases</li>
                    <li>Non Relational Databases</li>
                    <li>Handlebars.js</li>
                    <li>Sequelize</li>
                    <li>React Hooks</li>
                    <li>React Router</li>
                    <li>Momentjs</li>
                    <li>IndexDB</li>
                    <li>JSX</li>
                    <li>Insomnia/Postman</li>
                    <li>bcrypt</li>
                    <li>JWT JavaScript Web Token</li>
                    <li>AJAX</li>
                    <li>Fetch</li>
                    <li>Pseudocode</li>
                    <li>Problem Solving</li>
                    <li>Express Sessions</li>
                    <li>Rest API</li>
                    <li>Server Side API</li>
                    <li>Third Party API</li>
                    <li>Debugging</li>
                    <li>Web Accessibility</li>
                    <li>Web Performance</li>
                    <li>Developer Tools (Elements, Console, Network, Sources, Applications, etc)</li>
                    <li>Tailwindcss</li>
                </ul>
            </div>
        </div >

    )

}

export default Resume;