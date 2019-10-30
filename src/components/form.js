import React from "react";

class Form extends React.Component{

    render(){

        return(
        	<div className= 'brick'>
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Type ZA for country name..."/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form;
