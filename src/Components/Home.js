import React,{useState,useEffect} from 'react';

import Card from './Card';
import './Home.css'
import {
    Link
  } from "react-router-dom";
function Home() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem("Projects");
        const savedProjects = JSON.parse(json);
        if (savedProjects) {
          setProjects(savedProjects);
        }
      }, []);
    const deleteProject = (idToDelete) => {
    const filteredProjects = projects.filter((project) => project.id !== idToDelete);
    setProjects(filteredProjects);
    };
    return (
            <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                <div style={{display:'flex',flexDirection:'row'}}>
                <button className="create-button">
                    <Link to='/create' style={{color:'#F86726'}}>Create new Project</Link>
                </button>
                <button className="create-button">
                    <Link to='/view' style={{color:'#F86726'}}>View all Projects</Link>
                </button>
                </div>
                {projects.map((project) =>(
                    <div key={project.id} >
                        <Link to={'/project/'+project.id}><Card title={project.name} body={project.description} image={project.image}/></Link>
                        <button className="del-button" onClick={() => deleteProject(project.id)}>Delete</button>
                    </div>
                ))}
            </div>
    )
}

export default Home
