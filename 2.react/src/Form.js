import React, { Component } from 'react';

class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: '',
      country: ''
    };
  }
  render() {
    return (
      <div style={ { marginTop: '2rem'} }>
        <form method="POST" onSubmit={this.submitLogin}>
          <div>
            <label>Login</label>
            <input type="text" name="login" value={this.state.login} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Country</label>
            <select name="country" required >
              <option value="">Select a country</option>
              {
                this.props.states.map((country, key) => {
                  return(
                    <option key={key+1} value={country.value}>{country.display}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    //console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch(name){
      case 'login':
        if(/\W/g.test(value)){
          alert("The login field cannot contains special chars.");
          return;
        }
      break;
      case 'password':
        if(/\d+/.test(value)){
          alert("The password field cannot contains numbers.");
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
    //alert("Before submiting");
    event.preventDefault();
    //alert("Canceled");
  }
}

export default Form;
