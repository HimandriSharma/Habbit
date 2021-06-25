import React from "react";
import {Link} from 'react-router-dom';
import './ProjectForm.css';
const initialState = {
  id: "",
  name: "",
  description: "",
  image: "",
  nameError: "",
  descriptionError: "",
  imageError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;
  
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let descriptionError = "";
    let imageError = "";

    if (!this.state.name) {
      nameError = "Project Name cannot be blank";
    }

    if (this.state.description.length<150) {
      descriptionError = "Description length ";
    }
    if (!this.state.image.includes(":")) {
      imageError = "Image URL Error";
    }
    if (descriptionError || nameError || imageError) {
      this.setState({ descriptionError, nameError ,imageError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    var oldItems = JSON.parse(localStorage.getItem("Projects")) || [];
    if (isValid) {
      this.state.id = Math.random().toString(36).substr(2, 9);
      console.log(this.state);
      const json = JSON.stringify(this.state);
      oldItems.push(this.state);
      localStorage.setItem("Projects",JSON.stringify(oldItems));
      
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",height:'100vh',width:'100vw'}}> 
        <div style={{padding:"30px",fontSize:"50px"}}>Add Project!</div>
        <div>
          <input
            name="name"
            placeholder="Project Name"
            value={this.state.name}
            onChange={this.handleChange}
            className="input"
          />
          <div style={{ fontSize: 17, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            type="textarea"
            name="description"
            placeholder="Project Description"
            value={this.state.description}
            onChange={this.handleChange}
            className="descrip"
          />
          <div style={{ fontSize: 17, color: "red" }}>
            {this.state.descriptionError}
          </div>
        </div>
        <div>
          <input
            name="image"
            placeholder="Image URL"
            value={this.state.image}
            onChange={this.handleChange}
            className="image"
          />
          <div style={{ fontSize: 17, color: "red" }}>
            {this.state.imageError}
          </div>
        </div>
        <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}