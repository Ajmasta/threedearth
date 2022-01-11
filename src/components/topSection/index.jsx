import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  z-index: 99;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  font-weight: 700;
  font-size: 55px;
`;
const Slogan = styled.h4`
  margin: 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 1em;
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Metapass</Logo>
      <Slogan>Access the metaverse on your own terms.</Slogan>
    </TopSectionContainer>
  );
}
