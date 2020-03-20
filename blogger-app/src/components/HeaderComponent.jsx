import React, { Component, Fragment } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>My Blog</h1>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;