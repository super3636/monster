import React from 'react';
import {CardList} from './component/card-list/card-list.component';
import './index.css'
import './App.css'
import {SearchBox} from './component/search-box/search-box.component';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchfield:''
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e)
    {
        this.setState({
            searchfield:e.target.value
        })
    }
    componentDidMount(){
        fetch('https:\\jsonplaceholder.typicode.com/users')
        .then(response=>response.json()).then(users=>this.setState({
            monsters:users
        }));
    }
    render(){
        const {monsters,searchfield} = this.state;
        const filterMonsters=monsters.filter(monster=>
            monster.name.toLowerCase().includes(searchfield.toLowerCase())
        );
        return(
            
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Search Monster"handleChange={this.handleChange}/>
                <CardList monsters={filterMonsters}/>
   
            </div>
        );
    }
}
export default App;

