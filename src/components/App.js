import React, { Component } from 'react';
import '../App.css';
import Search 	  from './Search';
import TableData  from './TableData';
import AddUser 	  from './AddUser';
import EditUser   from './EditUser';
import DataUser   from './Data.json';
import Swal       from 'sweetalert2';
import uuidv4     from 'uuid/v4';

class App extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      data       : DataUser,
      wordsSearch: "",
      userEdit   : {}
    }
    this.getTextSearch = this.getTextSearch.bind(this);
    this.getData       = this.getData.bind(this);
    this.editUser      = this.editUser.bind(this);
    this.updateUser    = this.updateUser.bind(this);
    this.deleteUser    = this.deleteUser.bind(this);
  }

  checkStorage(){
    return typeof Storage !== 'undefined' ? true : false;
  }
  
  componentWillMount() {
    if(this.checkStorage()){
      if(localStorage.getItem('userData') === null){
        localStorage.setItem('userData', JSON.stringify(DataUser));
      } else{
        this.setState({
          data : JSON.parse(localStorage.getItem('userData'))
        });
      }
    }
  }
  
  isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
  }
  
  getData(data){
    data.id = uuidv4();
    this.state.data.push(data);
    
    if(this.checkStorage()){
      localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
    this.setState({
      data : this.state.data
    });
  }

  getTextSearch(words){
    this.setState({
      wordsSearch : words
    })
  }

  deleteUser(idUser){
    const data = this.state.data.filter(e => e.id !== idUser);

    Swal.fire({
      title: 'Delete user?',
      text: 'Bạn có muốn xóa user?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        if(this.checkStorage()){
          localStorage.setItem('userData', JSON.stringify(data));
        }
        this.setState({ data : data });
        Swal.fire({
          title: 'Deleted',
          text: 'User is deleted',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  editUser(userInfo){
    this.setState({
      userEdit : userInfo
    });
  }

  updateUser(data){
    this.state.data.forEach(e => {
      if(e.id === data.id){
        e.name       = data.name;
        e.phone      = data.phone;
        e.permission = data.permission;
      }
    })

    if(this.checkStorage()){
      localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
    this.setState({
      data : this.state.data
    });
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
            <Search words={this.getTextSearch} />
            <TableData editData={this.editUser} userDelete={this.deleteUser} data={this.state.data} dataSearch={this.searchByName()} />
            <EditUser userEdit={this.state.userEdit} userUpdate={this.updateUser} />
            <AddUser data={this.getData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
