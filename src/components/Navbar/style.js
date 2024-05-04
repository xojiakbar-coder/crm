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
  /* border: 2px solid blue; */
  background-color: white;
  height: 60px;
`;

const InputWrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: center;
  width: fit-content;
  flex: 1;
  max-width: 400px;
  height: 40px;
  border: 1px solid var(--primaryColor);
  background: rgb(255, 255, 255);
  border-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  max-width: 400px;
  width: 100%;
  border: none;
  outline: none;
  height: 38px;
  border-radius: 8px;
  &::placeholder {
    color: rgba(187, 195, 205, 1);
    font-family: var(--font-family);
    font-size: 0.88rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0%;
    text-align: left;
  }
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`;

// Section | navbar wrapper / time wrapper
const Section = styled.div`
  ${flex}
  align-items: center;
  column-gap: 16px;
`;

const Timer = styled.div`
  color: ${({ status }) =>
    status ? "var(--primaryColor)" : "var(--backgroundColor)"};
  font-size: 24px;
  font-weight: 600;
  line-height: 32;
`;

export { Container, InputWrapper, Input, SearchIcon, Section, Timer };
