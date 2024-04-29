import styled, { css } from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";

const flex = css`
  display: flex;
`;

const Arrow = styled(arrow)`
  ${flex}
  margin-left: auto;
  transform: ${({ active }) => active && `rotate(91deg)`};
  transition: all 100ms;
`;

const Container = styled.div`
  ${flex}
`;

const Body = styled.div`
  flex: 1;
`;

// Sidebar
const Side = styled.div`
  ${flex}
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  height: 100vh;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
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

// Profile

const ProfileContainer = styled.div`
  ${flex}
  align-items: center;
  margin: 23px 24px 32px 24px;
  column-gap: 16px;
`;

ProfileContainer.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

ProfileContainer.Name = styled.div`
  width: 168px;
  font-weight: 600;
  size: 14px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--backgroundColor);
`;

ProfileContainer.Email = styled.div`
  width: 168px;
  font-weight: 500;
  size: 12px;
  line-height: 20px;
  color: var(--pirmaryColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Menu
const Menu = styled.div`
  ${flex}
  flex-direction: column;
`;

const MenuItem = styled.div`
  ${flex}
  align-items: center;
  padding-right: 12px;
  &:hover {
    cursor: pointer;
    background-color: rgba(248, 250, 252, 1);
  }
`;

MenuItem.Title = styled.div`
  ${flex}
  align-items: center;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 0 12px 24px;

  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  .icon {
    margin-right: 16px;
  }
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active ? "auto" : "0px")};
  overflow: hidden;
`;

export {
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  Menu,
  MenuItem,
  ChildWrapper,
  Arrow,
};
