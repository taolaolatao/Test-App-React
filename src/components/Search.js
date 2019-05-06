import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      wordSearch : ""
    }
    this.isChangeText = this.isChangeText.bind(this);
  }
  
  isChangeText(event){
    this.setState({
      wordSearch: event.target.value
    })
    this.props.words(event.target.value)
  }

  render(){
    return (
        <div>
          <div className="col-12 col-sm-12 col-md-3">
            <div className="form-group">
              <div className="btn-group">
                <input className="form-control" type="search" placeholder="Search..." aria-label="Search" style={{width: '745px'}} onChange={this.isChangeText} />
                <button type="button" className="btn btn-info my-2 my-sm-0" onClick={() => this.props.words(this.state.wordSearch)}>Search</button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
    );
  }
}

export default Search;