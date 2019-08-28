import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {lat:null, errorMessage:''};
        window.navigator.geolocation.getCurrentPosition(
            position=> {
                        this.setState({ lat: position.coords.latitude });
            },
            err =>{
                this.setState({ errorMessage: err.message })
            }
        );
    }    
    
    render(){

        if (this.state.errorMessage && !this.state.lat){
            return( <div>Error: {this.state.errorMessage}</div> );
        }

        if (!this.state.errorMessage && this.state.lat){
            return(<div> Latitude: {this.state.lat} </div>)
        }

        return(
            <div>loading....</div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// Rules of state:
//      Only usable iwht class components
//      You will confuse props with state
//      'state' is a JS object that contains data relevant to a component
//      Update 'state' causes the component to almost instantly render
//      State must be initialized when a component is created
//      State can only be updated using the functioon 'setState'

