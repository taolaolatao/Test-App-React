import React, { Component } from 'react';
import TableRowData from './TableRowData';

class TableData extends Component{
	showData(){
		const data = this.props.dataSearch !== null ? this.props.dataSearch : this.props.data;

		return data.map((val, key) => 
			<TableRowData editData={() => this.props.editData(val)} userDelete={() => this.props.userDelete(val.id)} key={key} id={key} name={val.name} phone={val.phone} permission={val.permission} />
		)
	}

  render(){
    return (
			<div className="col-12 col-sm-12 col-md-9">
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
						{this.showData()}
					</tbody>
				</table>
			</div>
    );
  }
}

export default TableData;