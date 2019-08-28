import React from 'react';

const Spinner = (props) =>{
return(
<div class="ui active dimmer">
    <div class="ui big text loader">{props.message}</div>
</div>
);
}

// used if props not added to parent component
Spinner.defaultProps = {
    message: 'loading...'
}

export default Spinner;