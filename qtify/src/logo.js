import { Avatar } from "@mui/material";
import logopng from "./assets/Group 1.png";
export default function Logo() {
  return (
    <>
      <img
        src={logopng}
        alt="logo"
        style={{
          marginLeft: "14px",
        }}
      />
    </>
  );
}
