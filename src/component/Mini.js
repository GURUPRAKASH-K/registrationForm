import React from 'react'


export default function Mini() {
  return (
    <div  className='W'>
    <h1>REGISTRATION FORM:</h1>
    <label>enter the name</label><input type="text" placeholder="enter the name"></input><br></br>
   <label>enter the age</label> <input  type="number" placeholder="enter the age"></input><br></br>
    <label>enter the rollno</label><input type="number" placeholder="enter the rollno"></input><br></br>
    <label>date of birth</label><input type="date" placeholder="dd-mm-yyyy"></input><br></br>
    <label>enter the email</label><input type="email" placeholder="enter the email"></input><br></br>
    <label>enter the mobile number</label><input type="number" placeholder='enter the mobilenumber'></input><br></br>
    <tr id='G'>
<td>GENDER</td>
<td>
<br></br>
 <input type="radio" name="Gender" value="Male" />Male
 <input type="radio" name="Gender" value="Female" />Female
</td>
</tr>
<tr id='E'>
<td>HOBBIES</td>
<td>
<br></br>
<input type="checkbox" name="HOBBIES" VALUE="CRICKET" />CRICKET
<input type="checkbox" name="HOBBIES" VALUE="FOOTBALL" />FOOTBALL
<input type="checkbox" name="HOBBIES" VALUE="SINGING" />SINGING
<input type="checkbox" name="HOBBIES" VALUE="DANSING" />DANSING
</td>
</tr>
<label>select the city</label><br></br>
<select name="city">
<option value=" "></option>
<option value="chennai">chennai</option>
<option value="delhi">delhi</option>
<option value="mumbai">mumbai</option>
</select>
<br></br>
<label>enter your comment</label>
<input type="text" ></input>
    </div>
  )
}
