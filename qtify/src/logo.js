import { Avatar } from "@mui/material";
import logosvg from "./assets/logo.svg";
export default function Logo({ style }) {
  return <Avatar variant='square'  sx={style} src={logosvg} />;
}
