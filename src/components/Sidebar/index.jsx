import Navbar from "../Navbar";
import Profile from "./profile";
import sidebar from "../../utils/sidebar.js";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Arrow,
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
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState([3]);
  const navigate = useNavigate();

  const onClickParent = (id) => {
    if (open.includes(id)) {
      let data = open.filter((val) => val !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };

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
            const active = open.includes(value.id);
            return (
              <div key={value.id}>
                <MenuItem
                  key={value?.id}
                  onClick={() => onClickParent(value.id)}
                >
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {value.title}
                  </MenuItem.Title>
                  {value?.children?.length && <Arrow active={active} />}
                </MenuItem>
                <ChildWrapper active={active}>
                  {value?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child?.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </div>
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

export default Sidebar;
