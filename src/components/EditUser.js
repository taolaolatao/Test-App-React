import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 0,
            name : "",
            phone : "",
            permission: 0
        }

        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(){
        const obj            = Object.create(null);
              obj.id         = this.props.userEdit.id;
              obj.name       = this.refs.name.value;
              obj.phone      = this.refs.phone.value;
              obj.permission = +this.refs.permission.value;

        document.querySelector('[data-dismiss="modal"].btn-close').click();
        
        return obj;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.userEdit.id,
            name : nextProps.userEdit.name,
            phone : nextProps.userEdit.phone,
            permission: nextProps.userEdit.permission
        });
        document.getElementById('name').value = nextProps.userEdit.name;
        document.getElementById('phone').value = nextProps.userEdit.phone;
        document.getElementById('permission').value = nextProps.userEdit.permission;
    }
    
    render() {
        return (
            <form>
                <div className="modal fade" id="openModalEdit" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit user</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mr-3">
                                    <label htmlFor="name" className="col-form-label">Tên:</label>
                                    <input type="text" className="form-control" name="name" id="name" defaultValue={this.state.name} ref="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="col-form-label">Điện thoại:</label>
                                    <input type="number" className="form-control"  name="phone" id="phone" defaultValue={this.state.phone} ref="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="permission">Quyền user:</label>
                                    <select className="form-control" name="permission" id="permission" defaultValue={this.state.permission} ref="permission">
                                        <option value={1}>Admin</option>
                                        <option value={2}>Monderator</option>
                                        <option value={3}>Normal User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-close" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.userUpdate(this.updateUser())}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditUser;