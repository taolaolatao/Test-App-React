import React, { Component } from 'react';
import '../App.css';
import Search 	 from './Search';
import TableData from './TableData';
import AddUser 	 from './AddUser';

class App extends Component{
  render(){
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <Search />
            <TableData />
            <AddUser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
