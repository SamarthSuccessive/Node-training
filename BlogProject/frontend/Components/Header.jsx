/* eslint-disable react/prop-types */
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "../Context/Createcontext";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const LinksContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const AccountName = styled(Typography)`
  font-weight: bold;
  color: #000;
  padding-left: 20px;
`;

const Header = ({ setauth }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("tokenExpiry");
    setauth(false);
    navigate("/");
  };

  const { accountname } = useContext(Mycontext);

  return (
    <Component>
      <Container>
        <AccountName variant="h6">{accountname}</AccountName>
        <LinksContainer>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/myblogs">MY BLOGS</Link>
          <Link to="/create">CREATE BLOGS</Link>
        </LinksContainer>
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "#FFFFFF", fontWeight: "bold" }}
          onClick={handleClick}
        >
          LOGOUT
        </Button>
      </Container>
    </Component>
  );
};

export default Header;
