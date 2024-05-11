import styled, { css } from "styled-components";
import search from "../../assets/icons/search.svg?react";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  background-color: white;
  height: 60px;
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`;

// Section | navbar wrapper / time wrapper
const Section = styled.div`
  ${flex}
  align-items: center;
  column-gap: 5px;
`;

const Timer = styled.div`
  color: ${({ status }) =>
    status ? "var(--primaryColor)" : "var(--backgroundColor)"};
  font-size: 24px;
  font-weight: 600;
  line-height: 32;
`;

export { Container, SearchIcon, Section, Timer };
