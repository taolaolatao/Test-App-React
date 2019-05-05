import React, { Component } from 'react';
import '../App.css';
import Search 	 from './Search';
import TableData from './TableData';
import AddUser 	 from './AddUser';
import DataUser  from './Data.json';
import uuidv4    from 'uuid/v4';

class App extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      data       : DataUser,
      wordsSearch: ""
    }
    this.getText = this.getText.bind(this);
    this.getData = this.getData.bind(this);
  }
  
  getText(words){
    this.setState({
      wordsSearch : words
    })
  }

  getData(data){
    // data.id = (this.state.data.length + 1);
    data.id = uuidv4();

    this.state.data.push(data);
    
    this.setState({
      data : this.state.data
    });
  }

  searchByName(){
    const result = [];
    this.state.data.forEach(e => {
      if(e.name.toLowerCase().includes(this.state.wordsSearch.toLowerCase()) || 
          e.name.toUpperCase().includes(this.state.wordsSearch.toUpperCase())){
        result[result.length] = e;
      }
    });

    return result;
  }

  render(){
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <Search words={this.getText} />
            <TableData data={this.searchByName()} />
            <AddUser data={this.getData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
