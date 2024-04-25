import { Outlet, useNavigate } from "react-router-dom";
import { Body, Container, LogOut, Logo, Side, Wrapper } from "./style";
import Navbar from "../Navbar";
import Profile from "./profile";

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
        <h3>Sidebar</h3>
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
