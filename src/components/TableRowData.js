import React, { Component } from 'react';

class TableRowData extends Component {
    checkPermission(){
        switch (this.props.permission) {
            case 1:
            case "1":
                return "Admin";
            case 2:
            case "2":
                return "Moderator";
            case 3:
            case "3":
                return "Normal user";
            default:
                break;
        }
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    {this.checkPermission()}
                </td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger">
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