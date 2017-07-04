import React, {Component} from 'React';
import {connect} from 'react-redux';

class Success extends Component{
  render() {
    return (
     <div className="container">
            <div className="panel-group">
              <div className="panel panel-info">
                <div className="panel-heading"><b>Successfully Registered</b></div>
                    <div className="panel-body">
                     <form className="form-horizontal">
                        <div className="form-group form-group-md">
                         <center><h4>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</h4></center>
                         </div>
                      </form>
                    </div>
              </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {fieldValues:state}
}
export default connect(mapStateToProps,null)(Success);