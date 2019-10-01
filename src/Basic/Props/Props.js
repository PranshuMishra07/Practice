import React from 'react';
import UserInfo from './UserInfo';
import Data from './Data';
 const NewCompo=(props)=>  
 
<div>
   
   <UserInfo user={props.user} />
   <Data user={props.user} />
</div>



export default  NewCompo;

