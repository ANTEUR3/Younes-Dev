import { Typography } from "@mui/material";
import React from "react";

const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
  const component =
    typeof variant === "string"
      ? variant
      : variant.xl ||
        variant.lg ||
        variant.md ||
        variant.sm ||
        variant.xs ||
        "h6";

  return (
    <Typography
      sx={{
        ...sx,
        typography: variant,
        fontWeight: "bold", 
        fontFamily: "'Helvetica', 'Arial', sans-serif",      
      }}
      component={component}
      {...props}
    >
        {children}
    </Typography>
  )
};

export default Title;
