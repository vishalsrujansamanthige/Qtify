import { Button } from "@mui/material";

export default function ButtonComp({ text,style }) {
  return (
    <Button
    size="large"
      sx={
      style}
    >
     {text}
    </Button>
  );
}
