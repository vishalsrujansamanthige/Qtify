import { AppBar, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./logo";
import theme from "./theme";
import ButtonComp from "./ButtonComp";

export default function Navbar() {
  return (
    <AppBar
      position="absolute"
      sx={{
        height: "74px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo
        
      />

      <TextField
        variant="outlined"
        id="outlined-basic"
        placeholder="search a song of your choice"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            backgroundColor: theme.palette.primary.light,
            width: "568px",
            color: "dark",
            borderRadius: "8px",
          },
        }}
      />
      <ButtonComp
        text="Give Feedback"
        style={{
         
          backgroundColor: (theme) => theme.palette.primary.dark,
          textTransform: "none",
          borderRadius: "8px",
          mr: "2rem",
        }}
      />
    </AppBar>
  );
}
