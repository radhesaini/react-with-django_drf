// import logo from './logo.svg';
import React, { PureComponent } from 'react';
import { getapi } from './helper/Api';
import './App.css';

export class App extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
        data:[]
    }
  }

  componentDidMount(){
    getapi('/users/').then(response=>{
      console.log(response.data)
      this.setState({data:response.data.results});}
      ).catch(error=>error.response.data);
  }
  render() {
    return (
      <div>App
        <h1>Users Details</h1>
        {this.state.data.length>0 && this.state.data.map((item,index)=>{
          return <div key={index} style={{display: 'grid',
          gridTemplateColumns: 'auto auto'}}><p>{item.username}</p><p>{item.email}</p></div>
        })}
      </div>
    )
  }
}

export default App;
