import React, { Component } from 'react';
import '../App.css';
import Search 	 from './Search';
import TableData from './TableData';
import AddUser 	 from './AddUser';
import EditUser  from './EditUser';
import DataUser  from './Data.json';
import uuidv4    from 'uuid/v4';

class App extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      data       : DataUser,
      wordsSearch: "",
      userEdit   : {}
    }
    this.getText         = this.getText.bind(this);
    this.getData         = this.getData.bind(this);
    this.editUser        = this.editUser.bind(this);
    this.getDataEditUser = this.getDataEditUser.bind(this);
  }
  
  getText(words){
    this.setState({
      wordsSearch : words
    })
  }

  getData(data){
    data.id = uuidv4();
    this.state.data.push(data);
    
    this.setState({
      data : this.state.data
    });
  }

  editUser(userInfo){
    console.log(userInfo);
    this.setState({
      userEdit : userInfo
    });
  }

  getDataEditUser(data){
    console.log(data);
    
  }

  searchByName(){
    const result = [];
    this.state.data.forEach(e => {
      if(e.name.toLowerCase().includes(this.state.wordsSearch.toLowerCase())){
        result[result.length] = e;
      }
    });

    return result;
  }

  render(){
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <Search words={this.getText} />
            <TableData edit={this.editUser} data={this.searchByName()} />
            <EditUser data={this.state.userEdit} getData={this.getDataEditUser}  />;
            <AddUser data={this.getData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
