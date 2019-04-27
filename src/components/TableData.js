import React, { Component } from 'react';

class TableData extends Component{
  render(){
    return (
        <div className="col-9">
		  <table className="table">
		    <thead className="thead-dark">
		      <tr>
		        <th scope="col">#</th>
		        <th scope="col">Tên</th>
		        <th scope="col">Điện thoại</th>
		        <th scope="col">Quyền</th>
		        <th scope="col">Thao tác</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <th scope="row">1</th>
		        <td>Mark</td>
		        <td>01238912491</td>
		        <td>@mdo</td>
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
		      <tr>
		        <th scope="row">2</th>
		        <td>Jacob</td>
		        <td>0914912491</td>
		        <td>@fat</td>
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
		      <tr>
		        <th scope="row">3</th>
		        <td>Larry</td>
		        <td>0838912491</td>
		        <td>@twitter</td>
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
		    </tbody>
		  </table>
		</div>
    );
  }
}

export default TableData;