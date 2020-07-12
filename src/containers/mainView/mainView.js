import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    constructor() {
        super();
        this.showValue = this.showValue.bind(this);
    }

    showValue(){
        this.props.onStoreResult(this.nameValue.value)
        //  alert('name '+ this.nameValue.value)
    }

    render () {
        return (
            <div>
                <h2>Add a new list</h2>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="input-group mb-3">
                            
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Add item here"
                                ref={el => this.nameValue=el} >
                            </input>
                            <button type="button" className="btn btn-primary" label="Add" onClick={this.showValue}>Add</button>
                        </div>       
                    </div>    
                </div>   
            
            <hr />
            
            <h3>Current list</h3>
            <ul className="col">
                {this.props.storedResults.map(strResult => (
                    <ul 
                        className="d-flex justify-content-start" 
                        key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}
                    >{strResult.name} </ul>
                ))}
                
            </ul>
                <button className="btn btn-secondary">SAVE List</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: (el) => dispatch({type: actionTypes.STORE_RESULT, result: el}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);