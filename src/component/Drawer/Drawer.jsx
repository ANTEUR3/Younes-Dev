import { styled } from "@mui/material/styles";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaUser } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { LiaBuromobelexperte } from "react-icons/lia";
import { GoProject } from "react-icons/go";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import useNavBarItemStore from "../../store/navBarItemStore";
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const CustomDrawer = ({ isOpenDrawer, setIsOpenDrawer }) => {
  const theme = useTheme();
  const itemsList = [
    { name: "About", link: "/", icon: <FaUser /> },
    { name: "Skills", link: "/skills", icon: <BsStars /> },
    { name: "Experiences", link: "", icon: <LiaBuromobelexperte /> },
    { name: "Projects", link: "/projects", icon: <GoProject /> },
  ];
  const {setSelectedItem , selectedItem}=useNavBarItemStore()

  return (
    <Drawer
      sx={{
        width: "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          pt: "70px",
        },
      }}
      variant="persistent"
      open={isOpenDrawer}
    >
      <Divider />
      <List
        sx={{
          "& .MuiListItem-root": {
            mb: 4,
          },
        }}
      >
        {itemsList?.map((item, index) => (
          <MuiLink

            component={Link}
            to={item.link}
            underline="none"
            onClick={() =>{
               setSelectedItem(item.name)
               setIsOpenDrawer(false)
            } }
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.05rem",
                lg: "1.6rem",
              },
              cursor: "pointer",
              color:
                selectedItem === item.name
                  ? "rgba(34, 90, 175, 1)"
                  : "rgba(0, 0, 0, 0.75)",
              position: "relative",
              transition: "color 0.25s ease",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 1,

              "&:hover": {
                color: "rgba(34, 90, 175, 1)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: selectedItem === item.item ? "100%" : "0%",
                height: "2px",
                backgroundColor: "rgba(34, 90, 175, 1)",
                transition: "width 0.25s ease",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </MuiLink>
        ))}
      </List>
    </Drawer>
  );
};
