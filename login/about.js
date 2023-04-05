import React from 'react'
import Base from './Base'
import { Button } from '@mui/material'


export default function SIGNUP() {
  const handle=(e)=>
  {
    e.preventDefault();
    alert("successfully Registered");
  }
  return (
    <div  id='g'>
     <Base/>
     <form onSubmit={handle}>
    <h1>REGISTRATION FORM:</h1>
    <label>enter the name</label><input type="text" placeholder="enter the name"></input><br></br><br></br>
   <label>enter the age</label> <input  type="number" placeholder="enter the age"></input><br></br><br></br>
   
    <label>date of birth</label><input type="date" placeholder="dd-mm-yyyy"></input><br></br><br></br>
    <label>enter the email</label><input type="email" placeholder="enter the email"></input><br></br><br></br>
    <label>enter the mobile number</label><input type="number" placeholder='enter the mobilenumber'></input><br></br><br></br>
    <div>
    <tr>
<td>GENDER</td>
<td>
<br></br>
 <input type="radio" name="Gender" value="Male" />Male
 <input type="radio" name="Gender" value="Female" />Female
</td>
</tr>

<tr>
<td>HOBBIES</td>
<td>
<br></br>
<input type="checkbox" name="HOBBIES" VALUE="PLAYING" />PLAYING<br></br>
<input type="checkbox" name="HOBBIES" VALUE="READING" />READING<br></br>
<input type="checkbox" name="HOBBIES" VALUE="SINGING" />SINGING<br></br>
<input type="checkbox" name="HOBBIES" VALUE="DANSING" />DANSING<br></br>
</td>
</tr>
</div>
<label>select the city</label><br></br>
<select name="city">
<option value=" "></option>
<option value="chennai">chennai</option>
<option value="delhi">delhi</option>
<option value="mumbai">mumbai</option>
</select>
<br></br><br></br>
<Button type='submit' variant="contained">submit</Button>

</form>
    </div>
  )
}
