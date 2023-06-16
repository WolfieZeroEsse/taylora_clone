import styled from "styled-components";

export const Desktop = styled.div`
  padding: 0;
  width: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Mobile = styled.div`
  padding: 0;
  width: 100%;
  @media (min-width: 1025px) {
    display: none !important;
  }
`;
