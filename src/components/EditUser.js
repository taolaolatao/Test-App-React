import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);  
        this.isChange = this.isChange.bind(this);
    }
 
    isChange(event){
        const name  = event.target.name,
              value = event.target.value;

        this.setState({
            [name] : value
        });
    }

    getData(){
        const items            = Object.create(null);
              items.id         = this.state.id;
              items.name       = this.state.name;
              items.phone      = this.state.phone;
              items.permission = +this.state.permission;
        return items;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data){
            this.setState({
                id        : this.props.data.id,
                name      : this.props.data.name,
                phone     : this.props.data.phone,
                permission: +this.props.data.permission
            });
        }
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
                                    <input type="text" className="form-control" name="name" defaultValue={this.props.data.name} onChange={this.isChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="col-form-label">Điện thoại:</label>
                                    <input type="number" className="form-control"  name="phone" defaultValue={this.props.data.phone} onChange={this.isChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="permission">Quyền user:</label>
                                    <select value={this.props.data.permission} className="form-control" name="permission" onChange={this.isChange} >
                                        <option value={1}>Admin</option>
                                        <option value={2}>Monderator</option>
                                        <option value={3}>Normal User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.getData(this.getData())}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditUser;