import React,{useEffect,useState} from 'react'
import './Project.css';
function Project(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem("Projects");
        const savedProjects = JSON.parse(json);
        if (savedProjects) {
          setProjects(savedProjects);
        }
      }, []);
    return (
        <div className="project">
            <div className="head">Projects</div>
             {projects.map((project) =>(
                <div key={project.id} className="items">
                   <div className="title">{project.name}</div>
                   <div className="description">{project.description}</div>
                   <img src={project.image}/>
                </div>
            ))}
        </div>
    )
}

export default Project
