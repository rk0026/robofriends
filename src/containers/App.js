import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}   

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []  //state
    //         // searchfield: ''
    //     }
    // }
    // no more state, 剩下props

    componentDidMount() {
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users}));
    }   

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    //     // console.log(event.target.value);
    // }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter (robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase()); //都用小寫篩選
        })
        return isPending ?  // isRending ? true (false)

        // if (this.state.robots.length === 0) {
         <h1>Loading</h1> :
        // } else {
         (
            <div className = 'tc'>
                <h1 className = 'f1' > Robofriends </h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);