# portfolio-react
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Useage](#useage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  I built this portfolio to showcase my work and the skills I've acquired in web development. I created a react app and made components to fill the page. I used tailwindcss to style this project. I really enjoyed using it and would 100% recommend others to try it out. I installed a npm for the icons I used in the footer.


This code snippet is the start of my grid layout for my projects. I could have done flexbox and such but grid was so easy to implement I just had to use it here. I made the grid to be three columns with a gap inbetween the elements. Inside I contained the project element in a div that contains on hoover effect. The images are anchors that will open the repo for the respective project. I then Made another div to wrap the project name and its type. This div is set to be in the top left of the project container. 

  ```javascript

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
  </div>
  ```
  You can view the repo here:
  [Github](https://github.com/johnfrom209/the-social-network)

  ## Installation
  NA
  ## Useage
  NA 
  ## Contribute
  NA
  ## Test
  NA
  ## Questions
  Github repo: [johnfrom209](https://github.com/johnfrom209)

  [Linkedin](https://www.linkedin.com/in/johnfrom209/)

  ## License
  The license used for this project is MIT. Get more information by checking out the repo.
