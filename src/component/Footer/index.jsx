import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 4, md: 6 },
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 0 },
        zIndex:4,
        opacity:'100%',
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,0.08)",
                  position: "relative",

      }}
    >
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: { xs: "0.85rem", sm: "0.9rem" },
          lineHeight: 1.6,
          color: "rgba(0,0,0,0.6)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <strong>Anteure Younes</strong> — Full-Stack Web Developer.  
        <Box component="span" sx={{ display: { xs: "block", sm: "inline" } }}>
          {" "}
          All rights reserved.
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
