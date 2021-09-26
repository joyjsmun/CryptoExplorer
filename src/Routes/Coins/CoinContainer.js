import React from "react";
import CoinPresenter from "./CoinPresenter";

export default class extends React.Component{
    state={
        coins:null,
        loading:true,
        error:null

    };
    render(){
        const {coins,loading,error} = this.state;
        return (
            <CoinPresenter 
            coins={coins}
            loading={loading}
            error={error}
            />
        )
    }
}