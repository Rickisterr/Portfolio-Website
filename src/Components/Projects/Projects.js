import Contact from "../Contact";
import PFP from '../Resources/ProfilePic.jpeg';
import './Projects.css';

import SACup_Interview_Pic from '../Resources/ProjectsPage/SACup_Interview.png';
import DiabetesPrediction_Pic from '../Resources/ProjectsPage/DiabetesPrediction_Pic.png';
import Game2048_Pic from '../Resources/ProjectsPage/2048_Game_Pic.png';


function Projects() {
    // Wrapping whole page in a column to allow each project to be viewed
    // one below the other. Each subsequent element inside the project
    // sections are arranged in a row next to each other, alternating
    // between picture on the right, explanation on the left and vice versa

    return (
        <div className='Wrapper' style={{ height: 'min-content' }}>
            <div>

                {/* Flex wrapping whole viewport to allow each section to flex arrange automatically */}
                <div className='ColFlexWrap' id="SammardWorksid" style={{ paddingInline: '7vw', paddingBlockStart: '10vh', gap: '10vmin' }}>



                    {/* Page Title */}

                    <h1 className='Title' style={{ color: '#f0ffff', fontFamily: 'Arial, Helvetica, sans-serif' }}>PROJECTS</h1>



                    {/* Project 1 */}



                    <div className='BoxWrap' style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '0vmin' }}>
                        {/* Textbox for explanation of project 1 */}
                        <div style={{ width: '60%', backgroundColor: '#36454f', gap: '5vmin', paddingBlock: '5vmin', paddingInline: '9vmin', borderStyle: 'solid', borderWidth: '0.25vmin', borderRadius: '1rem', borderColor: '#f4f1de', minHeight: '50vh' }}>
                            <h1 className='WhiteNormText Headings'>Team Sammard Works</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: 'maxContent' }}>
                                Previously improved and helped develop an in-house flight software system for a
                                sounding rocket as a part of Team Sammard for the Spaceport America Cup competition
                                2023. Software was built on an ESP32 Development board manufactured by the team and
                                programmed in embedded C. Additionally programmed the first deployable version of the team
                                website for the 2023 team using the ReactJS framework. Physically represented the team 
                                along with 7 other team members at the competition venue at Las Cruces, New Mexico. 
                            </p>
                        </div>


                        {/* Image to right of textbox */}
                        <div>
                            <img alt="Representing Team Sammard in an Interview" src={SACup_Interview_Pic} loading="lazy" style={{ width: '37.5vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                        </div>
                    </div>



                    {/* Project 2 */}



                    <div className='BoxWrap' id="Diabetes-Model" style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '15vmin' }}>
                        {/* Image to left of textbox */}
                        <div>
                            <a href="https://github.com/smartinternz02/SI-GuidedProject-589113-1697035124">
                                <img alt="Picture of the Diabetes Prediction Website" src={DiabetesPrediction_Pic} loading="lazy" style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                            </a>
                        </div>


                        {/* Textbox for explanation of project 2 */}
                        <div style={{ width: '60%', backgroundColor: '#36454f', gap: '5vmin', paddingBlock: '5vmin', paddingInline: '9vmin', borderStyle: 'solid', borderWidth: '0.25vmin', borderRadius: '1rem', borderColor: '#f4f1de', minHeight: '50vh' }}>
                            <h1 className='WhiteNormText Headings'>Diabetes Prediction Model</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: 'maxContent' }}>
                                Developed a model for prediction of diabetes using a model trained by a public dataset
                                available on Kaggle and integrated it onto a deployable website. The model was made and trained 
                                using Sci-Kit libraries and integrated onto a basic website using Flask. This project was done 
                                for the Smartinternz externship program during the year 2023 in collaboration with two other 
                                team members from the same major. The public github repository for the same can be accessed by 
                                clicking the adjacent image.
                            </p>
                        </div>
                    </div>



                    {/* Project 3 */}



                    <div className='BoxWrap' id="Game-2048" style={{ gap: '5vmin', marginBottom: '4vmin', paddingTop: '15vmin' }}>
                        {/* Textbox for explanation of project 3 */}
                        <div style={{ width: '60%', backgroundColor: '#36454f', gap: '5vmin', paddingBlock: '6vmin', paddingInline: '9vmin', borderStyle: 'solid', borderWidth: '0.25vmin', borderRadius: '1rem', borderColor: '#f4f1de', minHeight: '50vh' }}>
                            <h1 className='WhiteNormText Headings'>2048 Game</h1>
                            <p className='WhiteNormText Paragraphs' style={{ textAlign: 'justify', maxWidth: 'maxContent' }}>
                                Developed a 2048 game in Python. Movement is performed by arrow keys and causes all tiles on the
                                board to fall all the way in the direction specified until a not possible. Adjacent Tiles with 
                                same values, when shifted in the direction of each other, combine. The game ends when a 2048 tile
                                is created or no playable moves are left. The game was programmed fully in basic Python language. 
                                using a main class GameBoard that simulates the board as a 2-D array and contains all the functions
                                performable on the game board.
                            </p>
                        </div>


                        {/* Image to right of textbox */}
                        <div>
                            <a href="https://github.com/Rickisterr/2048-Game">
                                <img alt="Sample working output of 2048 Game" src={Game2048_Pic} loading="lazy" style={{ width: '25vw', minWidth: '25vmax', borderRadius: '1rem' }} />
                            </a>
                        </div>
                    </div>



                </div>
            </div>




            {/* Contact Me Footer at the very end of the page's viewport */}
            <Contact />

        </div>
    );
}

export default Projects;