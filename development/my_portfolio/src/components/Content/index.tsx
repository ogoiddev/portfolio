import React, { useState } from "react";
import { Container, SkillSection } from './styles';
import fottoPassG from "../../images/password_generator.jpg";

import ReactPlayer from 'react-player';
import VideoTrivia from "../../videos/app.mp4";
import VideoTriunfo from "../../videos/simpsons_triunfo.mp4"
import './style.css';

interface inserI {
    nameFrom: string;
    emailFrom: string;
    textFrom: string;
}

const INITIAL_STATE_FORM = {
        nameFrom: '',
        emailFrom: '',
        textFrom: '',
    }

function Content() {
    const [insertForm, setInsertForm] = useState<inserI>(INITIAL_STATE_FORM);


    
    ReactPlayer.removeCustomPlayers();
    return (
        <Container>
            <SkillSection>
            <h2>SKILLS</h2>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
            <a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored-dark.svg" width="36" height="36" alt="Express" /></a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
            <a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" /></a>
            <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored-dark.svg" width="36" height="36" alt="Photoshop" /></a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
            </SkillSection>

            
            {/* <h1>A seguir estão listados projetos que desenvolvi ou participei </h1> 
            <h1><i>Below are listed projects that I developed or participated in</i></h1> */}
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <a href="http://www.natture.com.br/cgi-sys/suspendedpage.cgi" className="trivia" target="blank">

                            <ReactPlayer
                                url={ VideoTriunfo }
                                type="video/mp4"
                                className='react-player'
                                controls
                                />
                        </a>
                    </div>

                    <div className="carousel-item">
                        <a href="https://pass-generator-ogoiddev.netlify.app/" className="password_generator" target="blank">    
                            <img src={fottoPassG} className="d-block w-100" alt="opa" />
                        </a>              
                    </div>

                    <div className="carousel-item">
                        <a href="https://trivia-g28.netlify.app/" className="trivia" target="blank">

                            <ReactPlayer
                                url={ VideoTrivia }
                                type="video/mp4"
                                className='react-player'
                                controls
                                />
                        </a>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#111" className="bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </button>
                        
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#111" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                    <span className="visually-hidden">Next</span>
                </button>


            </div>
            
            <h1 className="tile-contact">CONTACT</h1>
            <div className="contact">

                <form className="form">
                    <div className="mb-3">
                        
                        <input
                            onChange={({ target: element }) =>                                 
                                setInsertForm(
                                    (prev) => ({
                                        ...prev,
                                        nameFrom: element.value,
                                    }))
                            }
                            value={insertForm.nameFrom}
                            className="form-control"
                            type="text"
                            placeholder="Your name or Company"
                            />
                        
                        <input
                            onChange={({ target: element }) =>                                 
                                setInsertForm(
                                    (prev) => ({
                                        ...prev,
                                        emailFrom: element.value,
                                    }))
                            }
                            value={insertForm.emailFrom}
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Email address - name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Here you text to me:</label>
                        <textarea
                            onChange={({ target: element }) =>                                 
                                setInsertForm(
                                    (prev) => ({
                                        ...prev,
                                        textFrom: element.value,
                                    }))
                            }
                            value={insertForm.textFrom}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}></textarea>
                    </div>

                    <button
                        onClick={ () => setInsertForm(INITIAL_STATE_FORM)}
                        type="button"
                        className="btn btn-outline-success">Send to me</button>
                </form>
                
                <aside className="letter_show">
                    <span><strong>From:</strong>{insertForm.nameFrom}</span>
                    <span><strong>E-mail:</strong>{insertForm.emailFrom}</span>
                    <span><strong>Content:</strong>{insertForm.textFrom}</span>
                </aside>
            </div>
        </Container>
    );
}

export default Content;
