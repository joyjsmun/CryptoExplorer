import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";


const Container = styled.div``

const List = styled.ul``

const Item = styled.li``

const ExchangePresenter = ({exchanges,loading,error}) => loading ? "Loading..." :
<Container>
    {exchanges && exchanges.length > 0 && <Section title="Exchanges List">
         {/* {exchanges.map(exchange => 
        <List>
            <Item>
                {exchange.id}
            </Item>
        </List>
         )} */}
        </Section>}
</Container>


ExchangePresenter.propTypes = {
    exchanges:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}

export default ExchangePresenter;