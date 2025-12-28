import { Container, IconButton, Link, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const DesktopItems = () => {
  const style = {
    color: 'black',
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#707572ff", 
    },
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="start"
      spacing={6}
    >
      <Link href="#"  variant="h4" underline="none" sx={style}>
        {" "}
        Home
      </Link>

      <Link href="#"  variant="h4" underline="none" sx={style}>
        About
      </Link>
      <Link href="#"  variant="h4" underline="none" sx={style}>
        Projects
      </Link>
      <Link href="#"  variant="h4" underline="none" sx={style}>
        Education
      </Link>
    </Stack>
  );
};

export const MobileMenu = ({ setOpenDrawer, isOpenDrawer }) => {
  return (
    <IconButton
      onClick={() => {
        setOpenDrawer(!isOpenDrawer);
      }}
    >
      {isOpenDrawer ? (
        <ChevronRightIcon />
      ) : (
        <MenuIcon sx={{ color: "text.secondary" }} />
      )}
    </IconButton>
  );
};
