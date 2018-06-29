import React, { Component } from 'react';

class InfoWindow extends Component {

  constructor(props){
    super(props);
    this.data = null;
    this.id = null;
  }
  render() {
    this.data = this.props.data;
    this.id = this.props.id;
    return (
      <div className="row" style={{
        width: '10rem',
        minHeight: '4rem',
      }}>
        <div className="col-12">
          <h4 className="text-center">{this.data.name}</h4>
            {
              Object.keys(this.data).map((field, i) => {
                if(field !== 'location' && field !== 'enabled' && field !== 'name'){
                  return(
                    <p key={i+1}>
                      <strong>{field}:</strong> {this.data[field]}
                    </p>
                  )
                }else{
                  return(
                    <span key={i+1}></span>
                  )
                }
                  
              })
            }
        </div>
      </div>
    );
  }
}

export default InfoWindow;
