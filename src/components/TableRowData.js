import React, { Component } from 'react';

class TableRowData extends Component {
    constructor(props) {
        super(props);
        
        this.editUser = this.editUser.bind(this);
    }  

    checkPermission() {
        switch (this.props.permission) {
            case 1:
                return "Admin";
            case 2:
                return "Moderator";
            case 3:
                return "Normal user";
            default:
                throw new Error();
        }
    }

    editUser(){
        this.props.edit();
    }

    render() {
        return (
            <tr className="tr-user">
               <th scope="row">{this.props.id + 1}</th> 
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.checkPermission()}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger" onClick={this.editUser} data-toggle="modal" data-target="#openModalEdit">
                            <i className="fas fa-user-edit" />
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <i className="fa"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRowData;