import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import robots from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
});

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []  //state
    //         // searchfield: ''
    //     }
    // }
    // no more state, 剩下props

    static propTypes = {
        onRequestRobots: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.onRequestRobots();
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    //     // console.log(event.target.value);
    // }

    render() {
        const { searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return isPending
            ? <h1>Loading</h1>
            : (
                <div className="tc">
                    <h1 className="f1"> Myfriends </h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
