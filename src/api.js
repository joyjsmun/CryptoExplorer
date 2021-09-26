import axios from "axios";

const api = axios.create({
    baseURL:" https://api.coinpaprika.com/v1/"
})

export const priceApi = {
    tickers:() => api.get("tickers")
}


export const exchangeApi = {
    exchanges:() => api.get("exchanges")
}


export const coinApi = {
    coins:() => api.get("coins")
}