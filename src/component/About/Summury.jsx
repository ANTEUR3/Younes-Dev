import React from "react";
import { Typography } from "@mui/material";

const Summury = () => {
  return (
    <Typography
      component={"h5"}
      variant={"h6"}
      sx={{ marginTop: '5px', maxWidth: 1000, typography: "h6", lineHeight: 2, fontWeight: 700,    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
}}
    >
      Fullstack Frontend-focused Developer with a strong foundation in
      JavaScript, Node.js, React.js, Experienced in building scalable,
      accessible applications. Passionate about performance optimization,
      internationalization, through thoughtful engineering
    </Typography>
  );
};

export default Summury;
