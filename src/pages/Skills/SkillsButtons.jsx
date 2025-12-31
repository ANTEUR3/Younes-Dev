import React from "react";
import { SkillsData } from "./SkillsData";
import { Button, Container, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import G from '../../assets/images/SkillsImages/GraphQL.png'
const SkillsButtons = () => {
  return (
    <Container>
      {SkillsData.map((item) => (
       
          <Button
            sx={{ mr: 1, mb: 3, p: 2, borderRadius: 3, fontWeight: 760,color:item.color,borderColor:item.color }}
            variant="outlined"
          >
             <Stack direction={'row'} alignItems={'center'} gap={1} >
                <img style={{width:35,height:35}} src={item.image} alt="" />
             {item.name}
             </Stack>
            
          </Button>
      ))}
    </Container>
  );
};

export default SkillsButtons;
