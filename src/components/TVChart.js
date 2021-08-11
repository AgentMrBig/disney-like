import React from "react";
import { useEffect } from "react";
import TradingViewWidget from "react-tradingview-widget";
import styled from "styled-components";

function TVChart() {
  return (
    <Container>
      <TradingViewWidget symbol="NASDAQ:AAPL" />
    </Container>
  );
}

export default TVChart;

const Container = styled.div``;
