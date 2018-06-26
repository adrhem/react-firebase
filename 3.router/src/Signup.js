import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
    };
  }
  render() {
    return (

      <div className="container" id="signup-page">
        <div className="row h-100 d-flex align-items-center">
          <div className="col-md-6 mx-auto text-center">
            <h1 className="text-center">Signup to access</h1>
              <form method="POST" className="col-12" onSubmit={this.submitLogin}>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <button className="btn btn-block btn-primary" type="submit">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch(name){
      case 'username':
        if(/\W+/g.test(value)){
          return;
        }
      break;
      case 'password':
        if(/\s+/g.test(value)){
          return;
        }
      break;
      default:
        alert("Error!");
        return;
    }

    this.setState({
      [name]: value
    });
  }

  submitLogin = (event) => {
    event.preventDefault();
  }
}

export default Signup;
