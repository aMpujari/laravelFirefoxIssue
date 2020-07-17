import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Dashboard extends Component {

constructor(props) {
    super(props)

    this.state = {
         
    }
}

    render() {
        return (
            <div>
            <h1>Hi</h1>   
            </div>
        );
    }
}

export default Dashboard;

if (document.getElementById('root')) {
    ReactDOM.render(<Dashboard />, document.getElementById('root'));
}

