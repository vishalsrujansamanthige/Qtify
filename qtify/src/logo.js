import { Avatar } from "@mui/material";
import logopng from "./assets/logo.svg";
export default function Logo() {
  return (
    <>
      <img
        src={logopng}
        alt="logo"
        style={{
          margin: "14px",
        }}
      />
    </>
  );
}
