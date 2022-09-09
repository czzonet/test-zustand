import React from "react";
import styled from "styled-components";
import { Hello } from "../components/Hello";
import { CounterFnComp } from "./CounterFnComp";

export const HomePage = () => {
  return (
    <Style>
      <Hello></Hello>
      <CounterFnComp></CounterFnComp>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  height: 100%;
`;
