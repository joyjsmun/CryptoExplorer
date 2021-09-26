import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CoinPresenter = ({exchanges,loading,error}) => null;

CoinPresenter.propTypes = {
    coins:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}


export default CoinPresenter;