import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    // Function to determine geolocation
window.navigator.geolocation.getCurrentPosition(
    (position)=> console.log(position),
    (err) => console.log(err)
 );

return(
    <div>Hi Theire</div>
)
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

