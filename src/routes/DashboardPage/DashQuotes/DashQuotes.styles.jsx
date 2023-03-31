import styled from "styled-components";

export const DQNewContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 0 2rem;
  display: flex;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const DQTop = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: var(--sidebar-dark-menu-item-color);
  margin-right: 10px;
`;