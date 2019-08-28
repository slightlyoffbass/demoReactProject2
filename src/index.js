import React from 'react';
import ReactDOM from 'react-dom';

//problem: getting latatude is takeing some time...

class App extends React.Component{
    render(){
        // Function to determine geolocation
        window.navigator.geolocation.getCurrentPosition(
            (position)=> console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: </div>
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

