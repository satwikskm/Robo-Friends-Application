import './App.css';
import Cardlist from './Cardlist'
import { robots } from './robots';
import Searchbox from './Searchbox';
import React,{ Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      robots:robots,
      searchfield:''
    }
  }
  onSearchChange =(event)=>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value)
    
    
  }
  render(){
    const filterrobots =this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
  return (
    
    <div className="App">

      <h1>Robo Friends</h1>
      <Searchbox searchChange={this.onSearchChange}/>
      <Cardlist robots={filterrobots} />
      
    </div>
  )};
}

export default App;
