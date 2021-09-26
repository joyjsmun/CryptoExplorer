import React from "react";
import CoinPresenter from "./CoinPresenter";
import { coinApi } from "../../api";

export default class extends React.Component{
    state={
        coins:null,
        loading:true,
        error:null

    };
    
    async componentDidMount(){
        try {
            const {data} = await coinApi.coins();
            this.setState({
                coins:data
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
        const {coins,loading,error} = this.state;
        console.log(this.state)
        return (
            <CoinPresenter 
            coins={coins}
            loading={loading}
            error={error}
            />
        )
    }
}