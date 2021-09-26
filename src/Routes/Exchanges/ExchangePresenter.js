import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";


const Container = styled.div`
padding:0px 10px`;

const List = styled.ul`
font-size:15px;
`

const Desc = styled.li`
width: 95%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

const Item1 = styled.li`
padding-bottom: 20px;
padding-top:20px;
font-size:18px;

`

const Item2 = styled.li`
padding-bottom: 20px;
padding-top:20px;

`

const Links = styled.a`
text-decoration:underline;

a:link{
    color:blue
}
a:visited {
    color: green;
  }
`


const ExchangePresenter = ({exchanges,loading,error}) => loading ? "Loading..." :
<Container>
    {exchanges && exchanges.length > 0 && <Section>
         {exchanges.map(exchange => 
        <List>
            <Item1>
                {exchange.name}
            </Item1>
            <Desc>
                {exchange.description}
            </Desc>
            <Item2> 
                <Links>{exchange.links && exchange.links.website ? <Links href={exchange.links.website}>{exchange.links.website}</Links> :
                "no website"    
            }</Links>
            </Item2>
        </List>
         )}
        </Section>}
</Container>


ExchangePresenter.propTypes = {
    exchanges:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}

export default ExchangePresenter;