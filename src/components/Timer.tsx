import React, {useState, useEffect, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


type Project = {
    description?: string
    name: string
    id: number
  };


const projects: Project[] = [
    {name: 'project1', description: undefined, id: 1},
    {name: 'work', description: 'working hard', id: 2},
]



function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);

    function start(){
        setIsRunning(true);
    }

    function stop(){
        setIsRunning(false);
    }

    return(
        <div className="stopwatch">
            <div className="fw-bold">00:00:00</div>
            <div className="controls">
                {
                    isRunning ?
                    <button type="button" onClick={stop} className="btn btn-dark">Stop</button>
                    : <button type="button" onClick={start} className="btn btn-dark">Start</button>
                }
            </div>
        </div>
    );

}


function ProjectsSelector() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Project
            </button>
            <ul className="dropdown-menu">
                {
                    projects.map(
                        project => <li><a className="dropdown-item" href="#">{project.name}</a></li>
                    )
                }
            </ul>
            <Stopwatch/>
        </div> 
    )
}


function Timer() {
    return (
        <div><ProjectsSelector/></div>
    )
}


export default Timer;