import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Com() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}


const top100Films = [
  { label: 'karnan', year: 1994 },
  { label: 'life of pie', year: 1972 },
  { label: 'kgf', year: 1974 },
  { label: 'titanic', year: 2008 },
  { label: 'PS1', year: 1957 },
];