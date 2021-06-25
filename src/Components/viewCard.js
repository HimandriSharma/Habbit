import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './viewCard.css';
function ViewCard() {
    const {id} = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem("Projects");
        const savedProjects = JSON.parse(json);
        if (savedProjects) {
          setProjects(savedProjects);
        }
      }, []);
    return (
        <div className="items">
            
            {projects.map((project) =>(
                    <div key={project.id} >
                       {project.id===id ?(
                           <div>
                           <div className="title"> {project.name}</div>
                           <br/>
                           <div className="description"> {project.description}</div>
                           <br/>
                           <img src={project.image} alt="image URL Err"/>
                           </div>
                       ):(<div/>)}
                    </div>
                ))}
        </div>
    )
}

export default ViewCard
