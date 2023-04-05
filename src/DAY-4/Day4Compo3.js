import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    const Disp=()=>{
        alert("HI GURUPRAKASH YOUR FAVORITE MOVIE IS TITANIC")
    }
  return (
    <Stack spacing={2} direction="row">
      
      <Button variant="contained" onClick={Disp}>Submit</Button>
      
    </Stack>
  );
}