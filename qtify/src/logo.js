import { Avatar } from "@mui/material";
import logosvg from "./assets/logo.svg";
export default function Logo() {
  return (
    <Avatar
      variant="square"
      sx={{
        marginLeft: "2rem",
        height: "36px",
        width: "67px",
  
      }}
      src={logosvg}
    />
  );
}
