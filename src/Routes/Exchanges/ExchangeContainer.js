import React from "react";
import ExchangePresenter from "./ExchangePresenter";


export default class extends React.Component{
    state={
        exchanges:null,
        loading:true,
        error:null

    };
    render() {
        const {exchanges,loading,error} = this.state;
        return(
            <ExchangePresenter
                exchanges={exchanges}
                loading={loading}
                error={error}
                />
        )
    }
}