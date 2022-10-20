import { AppBar, styled, Toolbar } from "@mui/material";
import { flexbox } from "@mui/system";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
})

function Header() {
  return (
    <>
        <AppBar position="stick">
            <StyledToolbar>Header</StyledToolbar>
        </AppBar>
    </>
  );
}

export default Header;
