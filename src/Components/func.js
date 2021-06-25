import React from 'react'
import {useState} from 'react'

function Func() {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [projectNameErr, setProjectNameErr] = useState({});
    const [descriptionErr, setDescriptionErr] = useState({});
    const onSubmit =(e) =>{
        e.preventDefault();
        const isValid = formValidation();
    }
    const formValidation = () =>{
        const projectNameErr = {}
        const descriptionErr = {}
        let isValid = true;
        if(!projectName){
            projectNameErr = "Project Name Required";
            isValid = false;
        }
        if(description.trim().length < 150){
            descriptionErr = "Description length should be at least 150";
            isValid = false;
        }
        setProjectNameErr(projectNameErr);
        setDescriptionErr(descriptionErr);
        return isValid;
    }
    return (
       <form onSubmit={onSubmit}>
           <input placeholder="Project Name" type="text" value={projectName} onChange={(e)=>{setProjectName(e.target.value)}}/>
           <br/>
           {Object.keys(projectNameErr).map((key)=>{
               return <div style={{color:"red"}}>{projectNameErr[key]}</div>
           })}
           <input placeholder="Description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
           <br/>
           {Object.keys(descriptionErr).map((key)=>{
               return <div style={{color:"red"}}>{descriptionErr[key]}</div>
           })}
           <button type="submit">Submit</button>
       </form>
    )
}

export default Func
