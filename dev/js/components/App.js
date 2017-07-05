import React from 'react';
import Account from './Account';
import Confirmation from './Confirmation';
import Success from './Success';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';

class App extends React.Component{

	showStep(){
		const step = this.props.stateInfo.currentStep;
		switch(step){
		case 1: return <Account />
		case 2: return <Confirmation/>
		case 3: return <Success/>
		}
	}

	render(){
		var style = {width : (this.props.stateInfo.currentStep / 3 * 100) + '%'}
		return(
			 <div className="container">
                         <center><h2>Account Details</h2></center><br/><br/>
                         <div className="row">
                           <div className="col-md-06" style={{marginLeft:"14px"}}>
				<div className="progress-step ">Step {this.props.stateInfo.currentStep}</div>
                           </div>
                           <div className="col-md-06" style={{marginLeft:"14px"}}>
				<progress className="progress" value={this.props.stateInfo.currentStep / 3 * 100} 
			                                                      max="100" style={style}></progress>
                           </div>
			</div>
		           <div className="row">
			     {this.showStep()}
		           </div>
			 </div>
			);
	}
}

const mapStateToProps = (state) => {return {stateInfo : state}}

export default connect(mapStateToProps,null)(App);
