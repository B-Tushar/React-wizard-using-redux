import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveRecord} from '../actions';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Panel} from 'react-bootstrap';

 class Account extends Component{

  nextStep(e) {
    e.preventDefault()

    var data = {
      name     : this.refs.name.value,
      password : this.refs.password.value,
      email    : this.refs.email.value,
    }

    this.props.saveRecord(data);
  }
  render() {
    return (
      <div className="container">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading"><b>Register User</b></div>
                    <div className="panel-body">
                     <form className="form-horizontal">
                        <div className="form-group form-group-md">
                       
                         <div className="row">
                              <label className="col-sm-2 control-label">Name:</label>
                              <div className="col-md-6">
                                 <input type="text" className ="form-control" ref="name" defaultValue={this.props.fieldValues.name} required/>
                              </div>
                          </div><br/>

                          <div className="row">
                              <label className="col-sm-2 control-label" >Password:</label>
                              <div className="col-md-6">
                                <input type="password" className ="form-control" ref="password" defaultValue={this.props.fieldValues.password} required/>
                              </div>
                          </div><br/>

                          <div className="row">
                              <label className="col-sm-2 control-label" >Email:</label>
                               <div className="col-md-6">
                                  <input type="email" className ="form-control" ref="email" defaultValue={this.props.fieldValues.email} required/>
                                </div>
                              </div>
                         </div><br/>

                         <div className="row">
                          <div className="col-sm-2" ></div>
                               <div className="col-md-6">
                                 <input type="submit" className="btn btn-primary" onClick={this.nextStep.bind(this)} value="Save & Continue"/>
                                </div>
                         </div><br/>
   
                      </form>
                    </div>
              </div>
            </div>
        </div>
      )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveRecord},dispatch);
}

const mapStateToProps = (state) =>{
  return {fieldValues:state}
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);

