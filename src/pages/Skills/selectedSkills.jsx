import { Button, Container, Stack } from '@mui/material'
import React from 'react'

const SelectedSkills = ({skills,disable}) => {
  return (
 <Container>
      
      {skills.map((item) => (
       
          <Button
            sx={{ mr: 1, mb: 3, p: 2, borderRadius: 3, fontWeight: 760,color:item.color,borderColor:item.color }}
            variant="outlined"
            disabled={disable}
          >
             <Stack direction={'row'} alignItems={'center'} gap={1} >
                <img style={{width:35,height:35}} src={item.image} alt="" />
             {item.name}
             </Stack>
            
          </Button>
      ))}
    </Container>  )
}

export default SelectedSkills