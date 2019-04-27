import React, { Component } from 'react';

class AddUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      statusAddUser : false
    }
    this.handleClickAddUser = this.handleClickAddUser.bind(this);
  }

  handleClickAddUser(e){
  	this.setState({
		statusAddUser : !this.state.statusAddUser
	})
  }

  handleStatusAddUser(){
    if(this.state.statusAddUser){
      	return (
      		<div>
      			<button type="button" onClick={this.handleClickAddUser} className="btn btn-block btn-danger">X</button>
	      		<div className="card bg-light mb-3">
		          <div className="card-header">Thêm mới user vào hệ thống</div>
		          <div className="card-body">
		            <div className="input-group">
		              <div className="input-group-prepend">
		                <span className="input-group-text" id="basic-addon1">@</span>
		              </div>
		              <input type="text" className="form-control" placeholder="Username..." />
		            </div>
		            <p className="card-text">
		            </p><div className="input-group">
		              <div className="input-group-prepend">
		                <span className="input-group-text" id="basic-addon1">@</span>
		              </div>
		              <input type="text" className="form-control" placeholder="Your phone..." />
		            </div>
		            <p />
		            <p className="card-text">
		            </p><div className="input-group mb-3">
		              <select className="custom-select" id="selectPermission">
		                <option defaultValue>Choose permission...</option>
		                <option value={1}>One</option>
		                <option value={2}>Two</option>
		                <option value={3}>Three</option>
		              </select>
		            </div>
		            <p />
		            <p className="card-text">
		              <button type="button" className="btn btn-block btn-primary">Thêm user</button>
		            </p>
		          </div>
		        </div>
      		</div>
      	);
    } else{
    	return <button type="button" onClick={this.handleClickAddUser} className="btn btn-block btn-outline-primary">Thêm mới</button>;
    }
  }  

  render(){
    return (
      <div className="col-3">
        {this.handleStatusAddUser()}
      </div>
    );
  }
}

export default AddUser;

