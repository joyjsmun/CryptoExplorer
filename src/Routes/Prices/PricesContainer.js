import React from "react";
import PricePresenter from "./PricePresenter";
import {priceApi} from "../../api";


export default class extends React.Component{
    state ={
        prices:null,
        loading:true,
        error:null
    };

    async componentDidMount(){
        try{
            const {data} = await priceApi.tickers();
            this.setState({
                prices : data
            })
        }catch{
            this.setState({
                error:"Can't get price list"
            })
            
        }finally{
            this.setState({
                loading:false
            })
        }
    }


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