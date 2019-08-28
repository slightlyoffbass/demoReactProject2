import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// goal to show season display
class App extends React.Component{
    state = {lat:null, errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }) 
        );
    }


    render(){

        if (this.state.errorMessage && !this.state.lat){
            return( <div>Error: {this.state.errorMessage}</div> );
        }

        if (!this.state.errorMessage && this.state.lat){
            // pass prop to child component
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return(
           <Spinner message="Please Accept Location Request"/>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);



