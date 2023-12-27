import { Avatar } from "@mui/material";
import logosvg from "./assets/logo.svg";
export default function Logo() {
  return (
    <>
      <img src={logosvg} alt="logo" style={{
         marginLeft:'2rem'
        
      }} />
    </>
  );
}
