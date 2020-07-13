import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class StartPage extends Component {


    render () {
        return (
            <div>
                <h1>MAIN PAGE</h1>
                <Link to="/MainView" ><button className="btn btn-primary"><h3>ADD new list</h3></button></Link>
                <hr />
                <Link to="/ListSelection" ><button className="btn btn-primary" href=""><h3>Existing lists</h3></button></Link>
            </div>
        );
    }
}


export default StartPage;