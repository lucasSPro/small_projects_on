import React, {Component} from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
        ]
    };
    //get change on input 'onChange' of input component
    handleInputChange = e => {
        this.setState({newTech: e.target.value});
    }
    handleSubmit = e =>{
        e.preventDefault();
        // ... add all current array techs, then add newTech by last
        if (this.state.newTech !== ""){
            this.setState({ 
                techs: [...this.state.techs, this.state.newTech],
                newTech: ''
            });
        } 
    }

    handleDelete = (tech) => {
        
        this.setState({techs: this.state.techs.filter(t => t !== tech)});
    }
    
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>  
            <ul>
               {this.state.techs.map(tech => (
                   <li key= {tech} >
                   {tech}
                   <button onClick= {() => this.handleDelete(tech)}type="button" >remove</button>
                   </li>
               ))}
            </ul>
                <input type= "text" 
                onChange={this.handleInputChange}
                value={this.state.newTech}
            />
            <button type= "submit"> Add </button>
            </form>
        );
    }
}

export default TechList;
