import React, { Component } from 'react';

class Search extends Component{
  render(){
    return (
        <div>
          <div className="col-12">
            <div className="form-group">
              <div className="btn-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{width: '745px'}} />
                <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
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