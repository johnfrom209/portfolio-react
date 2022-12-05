import React from "react";
import jsQuiz from "../images/jsQuizRun.png";
import cityGrader from "../images/eventsexample.PNG"
import employeeRecords from "../images/employeeRecordsExample.PNG"

function Portfolio() {

    return (

        <div className="grid grid-cols-3 gap-8 mx-10 mt-10">

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
                <a href="https://github.com/johnfrom209/city-grader" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-md min-h-full" src={cityGrader} alt="Modal shows nearby events"></img>
                </a>
                <div className="bg-sColorMain text-mColorll text-xl rounded-b-md absolute left-0 top-0">
                    <h4 className="block">Project: CityGrader</h4>
                    <h5 className=" block">Type: JS/HTML/CSS/API </h5>
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



        </div >

    )

}

export default Portfolio;