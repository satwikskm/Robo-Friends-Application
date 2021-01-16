import './App.css';
import Cardlist from '../components/Cardlist'
import { robots } from '../components/robots';
import Searchbox from '../components/Searchbox';
import React,{ Component} from 'react';
import Scroll from '../components/Scroll';

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
    const {robots,searchfield} = this.state ;
    const filterrobots =this.state.robots.filter(robot =>{
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    if (!robots.length){
      return <h1>Loading....</h1>
    }
    else{
        return (
          
          <div className="App">

            <h1>Robo Friends</h1>
            
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
            <Cardlist robots={filterrobots} />
            </Scroll>
            
          </div>
        )};
  }
}

export default App;
