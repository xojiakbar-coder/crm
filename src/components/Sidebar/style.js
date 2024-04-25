import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
`;

const Side = styled.div`
  ${flex}
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  height: 100vh;
  background-color: white;
  border: 2px solid red;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  margin: 16px;
  border: 2px solid teal;
  background-color: white;
`;

const Logo = styled.div`
  position: sticky;
  top: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--activeColor);
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
  background-color: white;
`;

const LogOut = styled(Logo)`
  bottom: 0;
  margin-top: auto;
  width: 100%;
  color: var(--backgroundColor);
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: none;
`;

// Profile ============

const ProfileContainer = styled.div`
  ${flex}
  justify-content: center;
  align-items: center;
`;

export { Container, Side, Body, Wrapper, Logo, LogOut, ProfileContainer };
