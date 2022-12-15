import React from "react";
import jsQuiz from "../images/jsQuizRun.png";
// import cityGrader from "../images/eventsexample.PNG"
import employeeRecords from "../images/employeeRecordsExample.PNG"
import backendRetail from "../images/backendRetailExample.PNG"
import notepadExpress from "../images/notepadexample.png"
import jmPortfolio from "../images/jmPortfolio.PNG"
import pokemonPrime from "../images/ppChallengeStyle.PNG"

function Portfolio() {

    return (

        <div className="grid grid-cols-3 gap-4 auto-rows-auto mx-10 mt-2">

            <div className="hover:shadow-mColorll hover:shadow-xl relative border-sColorl rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/js_Pop_Quiz" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md min-h-full" src={jsQuiz} alt="Quiz in progress"></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: JsQuiz</h4>
                    <h5 className=" block">Type: JS/HTML/CSS </h5>
                </div>
            </div>

            <div className="hover:shadow-mColorll hover:shadow-xl relative border-sColorl rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/Pokemon-Prime" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md min-h-full" src={pokemonPrime} alt="Pokemon Challenge"></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: Pokemon Prime</h4>
                    <h5 className=" block">Type: JS/HTML/CSS/API/React </h5>
                </div>
            </div>

            <div className="hover:shadow-mColorll hover:shadow-xl relative border-sColorl rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/Employee-Records" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md min-h-full" src={employeeRecords} alt=""></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: Employee Records</h4>
                    <h5 className=" block">Type:JS/MYSQL/CL </h5>
                </div>
            </div>

            <div className="hover:shadow-mColorll hover:shadow-xl relative border-sColorl h-64  rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/Backend-Retail" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md h-64 w-full" src={backendRetail} alt=""></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: Backend Retail</h4>
                    <h5 className=" block">Type:JS/MYSQL/Sequelize </h5>
                </div>
            </div>

            <div className="hover:shadow-mColorll hover:shadow-xl h-64 relative border-sColorl  rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/Notepad-Express" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md h-64 min-h-full max-h-80 w-full" src={notepadExpress} alt=""></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: Notepad Express</h4>
                    <h5 className=" block">Type:JS/MYSQL/Sequelize </h5>
                </div>
            </div>

            <div className="hover:shadow-mColorll hover:shadow-xl h-64 relative border-sColorl  rounded-md border-solid border-2">
                <a href="https://github.com/johnfrom209/JohnDMoreno-Portfolio" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md h-64 min-h-full max-h-80 w-full" src={jmPortfolio} alt=""></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: Portfolio</h4>
                    <h5 className=" block">Type: HTML/CSS/JS </h5>
                </div>
            </div>

        </div >

    )

}

export default Portfolio;