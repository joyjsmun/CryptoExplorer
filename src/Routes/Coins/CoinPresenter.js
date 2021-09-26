import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
padding:0px 10px`;

const List = styled.ul`
padding-top:20px;
`

const Item = styled.li`
font-size:20px;
`


const CoinPresenter = ({coins,loading,error}) => loading ? "Loading..." :
<Container>
    {coins&&coins.length> 0 && <Section title="Coins List">
        {coins.map(coin =>
        <List>
            <Item>#{coin.rank} {coin.name}/{coin.symbol}</Item>
        </List>
        )}
        </Section>}
    
</Container>


CoinPresenter.propTypes = {
    coins:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}


export default CoinPresenter;