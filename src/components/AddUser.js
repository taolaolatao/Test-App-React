import React, { Component } from 'react';

class AddUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statusAddUser: false,
			id           : "",
			name         : "",
			phone        : "",
			permission   : ""
		}
		this.handleClickAddUser = this.handleClickAddUser.bind(this);
		this.isChange           = this.isChange.bind(this);
	}

	handleClickAddUser(e) {
		this.setState({
			statusAddUser: !this.state.statusAddUser
		})
	}

	isChange(event) {
		const name  = event.target.name,
		      value = event.target.value;

		this.setState({
			[name]: value
		})
	}

	sendData() {
		const items            = Object.create(null);
		      items.id         = this.state.id;
		      items.name       = this.state.name;
		      items.phone      = this.state.phone;
		      items.permission = +this.state.permission;

		return items;
	}

	handleStatusAddUser() {
		if (this.state.statusAddUser) {
			return (
				<div>
					<button type="button" onClick={this.handleClickAddUser} className="btn btn-block btn-danger">X</button>
					<form>
						<div className="card bg-light mb-3">
							<div className="card-header">Thêm mới user vào hệ thống</div>
							<div className="card-body">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">@</span>
									</div>
									<input type="text" className="form-control" placeholder="Username..." onChange={this.isChange} name="name" />
								</div>
								<p className="card-text">
								</p><div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">@</span>
									</div>
									<input type="text" className="form-control" placeholder="Your phone..." onChange={this.isChange} name="phone" />
								</div>
								<p />
								<p className="card-text">
								</p><div className="input-group mb-3">
									<select className="custom-select" id="selectPermission" name="permission" onChange={this.isChange}>
										<option defaultValue>Choose permission...</option>
										<option value={1}>Admin</option>
										<option value={2}>Monderator</option>
										<option value={3}>Normal User</option>
									</select>
								</div>
								<p />
								<p className="card-text">
									<button type="reset" className="btn btn-block btn-primary" onClick={() => this.props.data(this.sendData())}>Thêm user</button>
								</p>
							</div>
						</div>
					</form>
				</div>
			);
		} else {
			return <button type="button" onClick={this.handleClickAddUser} className="btn btn-block btn-outline-primary">Thêm mới</button>;
		}
	}

	render() {
		return (
			<div className="col-12 col-sm-12 col-md-3">
				{this.handleStatusAddUser()}
			</div>
		);
	}
}

export default AddUser;

