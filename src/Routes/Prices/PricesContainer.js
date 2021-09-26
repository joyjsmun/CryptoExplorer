import React from "react";
import PricePresenter from "./PricePresenter";

export default class extends React.Component{
    state ={
        prices:null,
        loading:true,
        error:null
    };
    render(){
        const {prices,loading, error} = this.state
        console.log(this.state);
        return( 
        <PricePresenter 
            prices={prices}
            loading={loading}
            error={error}
        />
        )}
}