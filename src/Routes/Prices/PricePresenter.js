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

const PricePresenter = ({prices,loading,error}) => loading ? "Loading...":
    <Container>
        {prices && prices.length > 0 && <Section title="Prices List">
            {prices.map(ticker => 
                <List>
                    <Item>{ticker.name}/{ticker.symbol}:${ticker.quotes.USD.price}</Item>
                </List>
            )}
            </Section>} 
    </Container>;


PricePresenter.propTypes = {
    prices:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}

export default PricePresenter;