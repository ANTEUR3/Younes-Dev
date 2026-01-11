import { Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const SocialButtons = () => {
  return (
    <Stack
      direction="row"             // horizontal layout
      spacing={2}                 // space between buttons
      justifyContent="center"     // center horizontally
      alignItems="start"
      mt={'60px'}
    >
      {/* LinkedIn */}
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/younes-anteur-76a094338/"
        target="_blank"
        rel="noopener"
        sx={{
          color: "#0A66C2",
          "&:hover": { color: "#084A8A", transform: "scale(1.1)" },
          transition: "all 0.2s ease",
        }}
      >
        <LinkedInIcon sx={{fontSize:'50px'}} />
      </IconButton>

      {/* GitHub */}
      <IconButton
        component="a"
        href="https://github.com/ANTEUR3"
        target="_blank"
        rel="noopener"
        sx={{
          color: "#171515",
          "&:hover": { color: "#333", transform: "scale(1.1)" },
          transition: "all 0.2s ease",
        }}
      >
        <GitHubIcon sx={{fontSize:'50px'}} />
      </IconButton>

      {/* Gmail */}
      <IconButton
        component="a"
        href="mailto:your-email@gmail.com"
        sx={{
          color: "#D44638",
          "&:hover": { color: "#A33229", transform: "scale(1.1)" },
          transition: "all 0.2s ease",
        }}
      >
        <EmailIcon sx={{fontSize:'50px'}} />
      </IconButton>
    </Stack>
  );
};

export default SocialButtons;
