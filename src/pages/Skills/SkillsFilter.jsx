import { Button, Container, Stack } from '@mui/material'
import React from 'react'

const SkillsFilter = ({setSelectedSkills,selectedSkills}) => {
  return (
    <Container>
    <Stack direction={'row'} justifyContent={'start'} alignItems={'center'} gap={3} >
      <Button onClick={()=>setSelectedSkills('Backend')} variant={selectedSkills=='Backend'?"contained":'outlined'}  sx={{px:3,py:2}}>
        Backend
      </Button>
      <Button onClick={()=>setSelectedSkills('Frontend')} variant={selectedSkills=='Frontend'?"contained":'outlined'} sx={{px:3,py:2}}>
        Frontend
      </Button>
      <Button onClick={()=>setSelectedSkills('DevOps')} variant={selectedSkills=='DevOps'?"contained":'outlined'} sx={{px:3,py:2}}>
        Dev Ops
      </Button>
    </Stack>
    </Container>
  )
}

export default SkillsFilter