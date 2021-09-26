import React from "react";
import ExchangePresenter from "./ExchangePresenter";
import { exchangeApi } from "../../api";

export default class extends React.Component{
    state={
        exchanges:null,
        loading:true,
        error:null

    };
    
    async componentDidMount(){
        try {
            const {data} = await exchangeApi.exchanges();
            this.setState({
                exchanges:data
            })
        } catch{
            this.setState({
                error:"Can't get the exchanges lsit"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }


    render(){
        const {exchanges,loading,error} = this.state;
        console.log(this.state);
        return (
            <ExchangePresenter 
            exchanges={exchanges}
            loading={loading}
            error={error}
            />
        )
    }
}