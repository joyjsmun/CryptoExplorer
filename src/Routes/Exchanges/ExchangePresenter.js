import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ExchangePresenter = ({exchanges,loading,error}) => null;

ExchangePresenter.propTypes = {
    exchanges:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.bool.isRequired
}


export default ExchangePresenter;