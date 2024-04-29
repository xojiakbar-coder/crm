import Navbar from "../Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar.js";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Body,
  ChildWrapper,
  Container,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
  Wrapper,
} from "./style";

const Sideber = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    navigate("/");
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain.crm</Logo>
        <Profile />
        <Menu>
          {sidebar.map((value) => {
            const { icon: Icon } = value;
            return (
              <>
                <MenuItem key={value.id}>
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {value.title}
                  </MenuItem.Title>
                </MenuItem>
                <ChildWrapper>
                  {value?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child?.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>
        <LogOut onClick={onClickLogOut}>Chiqish</LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sideber;
