import React, { Component } from 'react';
import { Fragment } from 'react';
import '../App.css';

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            age:0,
            feeling:''
         }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value});
        }
        else if (event.target.name === 'age') {
            this.setState({age: event.target.value});
        }
        else if (event.target.name === 'feeling') {
            this.setState({feeling: event.target.value});
        }
    }

    //handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let statLog = document.querySelector('#stats');
        statLog.innerText = `Name: ${this.state.name}\nAge: ${this.state.age}\nFeeling: ${this.state.feeling}`;
        this.setState({
            name:'',
            age:0,
            feeling:''
        })        
    }
    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Your Stats</legend>

                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' onChange={this.handleChange} value={this.state.name}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="age">Age:</label>
                            <input type="number" name='age' id='age' onChange={this.handleChange} value={this.state.age}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="feeling">Feeling:</label><br/>
                            <textarea name="feeling" id="feeling" onChange={this.handleChange} value={this.state.feeling} cols="30" rows="10"></textarea>
                        </div>

                        <div className="formGroup">
                           <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>

                <div id='stats'>

                </div>
            </Fragment>
         );
    }
}
 
export default PersonStats;