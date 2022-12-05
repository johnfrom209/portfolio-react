import React from "react";
import selfie from "../images/selfie.jpg";

function AboutMe() {

    return (

        <div className="mx-56 mt-40 font-bold">
            <h4 className="text-5xl text-mColord  mb-5 flex">AboutMe</h4>
            <img className="max-h-56 flex rounded-full border-4 border-mColord" src={selfie} alt="Selfie of Jonathan Moreno"></img>
            <p className="text-2xl text-white leading-loose font-semibold"> I like to code. Recently I have been doing HTML and CSS at UCB coding bootcamp as I want to be a
                Full Stack Developer.
                While you are here why not check out my work below. I also experienced Java at Merced Community College and C# inside of Unity Engine. I
                live in Central Valley California. During my off time I enjoy drawing as it acts as meditation, though
                I'm still new to it all.</p>
        </div >

    )

}

export default AboutMe;