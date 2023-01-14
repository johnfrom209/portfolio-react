import React from "react";
import selfie from "../images/selfie.jpg";

function AboutMe() {

    return (

        <div className="mx-56 mt-10 font-bold bg-sColorll rounded-xl shadow-xl p-3">
            {/* <h4 className="text-2xl text-mColord  mb-5 flex">AboutMe</h4> */}
            <img className="max-h-56 inline-block rounded-full border-4 border-mColord" src={selfie} alt="Selfie of Jonathan Moreno"></img>
            <p className="text-2xl p-5 text-white leading-loose font-semibold inline-block">Hello, I'm Jonathan Moreno, <br></br>
            </p>
            <p className="text-lg indent-20 text-white leading-loose font-semibold">
                I like to code. The feeling of creating something from nothing is a feeling that I can't get enough of. I am a full stack web developer with a background in self management. I am a graduate of the University of California, Berkeley Extension Coding Bootcamp. I am currently looking for a full time position as a web developer. I am proficient in many skills relating to web Development, a full list is on the Resume page. I am a fast learner and I am always looking to improve my skills. I am a team player and I am always looking to collaborate with others. I am a problem solver and I am always looking for new challenges. Each problem is like a puzzle and I enjoy delving into them. I am a hard worker and I am always looking to improve myself. I am a creative thinker and I am always looking to create something new. Learning web development has opened my mind to the endless possibilities of things I can create.
            </p>
        </div >

    )

}

export default AboutMe;