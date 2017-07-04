import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {nextStep, prevStep} from '../actions';

class Confirmation extends Component{
  render() {
    return (
       <div className="container">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading"><b>Confirm Registration</b></div>
                    <div className="panel-body">
                     <form className="form-horizontal">
                        <div className="form-group form-group-md">

                         <div className="row">
                              <label style={{ marginLeft:'15%'}}>Name:</label>      {this.props.fieldValues.name}
                              <br/>
                              <label style={{ marginLeft:'15%'}}>Email:</label>      {this.props.fieldValues.email}
                          </div>
                              <br/>

                          <div className="row">
                                <input type="button" className="btn btn-primary" onClick={()=>this.props.prevStep()} value="Back" style={{ marginLeft:'15%'}}/>
                                <input type="button" className="btn btn-primary" onClick={()=>this.props.nextStep()} value="Submit Registration" style={{ marginLeft:'2%'}}/>
                          </div><br/>

                          </div>
                      </form>
                    </div>
              </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {fieldValues:state}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({nextStep,prevStep},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Confirmation);