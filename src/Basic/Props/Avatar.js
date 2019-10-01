import React from 'react';
const Avatar=(props)=>
<div>
 <img 
     src={props.user.Author.url}
     alt={props.user.Author.name}
 /> 
</div>
export default Avatar;
