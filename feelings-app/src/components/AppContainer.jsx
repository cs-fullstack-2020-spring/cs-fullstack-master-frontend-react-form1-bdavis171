import React, { Component, Fragment } from 'react';
import PersonStats from './PersonStats';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>Feelings App</h1>
                <PersonStats/>
            </Fragment>
         );
    }
}
 
export default AppContainer;