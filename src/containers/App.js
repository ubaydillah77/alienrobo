import React,{Component} from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users#")
        .then(response => {
            return response.json();
        })
        .then(users =>{
            this.setState({robots:users})
        })
        
    }


    onSearchChange =(event) =>{
        this.setState({searchField: event.target.value})
    }

    render(){
        const {robots , searchField} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //ternary operator
        return !robots.length ? <h1>Loading</h1>:
             (
                <div className="tc">
                    <h1 className="header">alienrobo</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                    
                </div>
            );
        
        
    }
}

export default App;