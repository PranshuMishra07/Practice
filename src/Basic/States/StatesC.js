import React, { Component } from 'react';
class StatesCompo extends Component {
    state = { 
        user:{name:'pranshu',age:"24" },
        text:"Nice pic bro",
        like:true
     }

     comment=()=>{
      this.setState((state,props)=>{
          

      })
     }

    render() { 
        return ( 
            <div>
               {/* <form>
                   <input type="text" onChange={this.comment.bind()} onSubmit={this.handleSubmit} >
                       Enter the vaule to be change
                   </input>
               </form>               */}
                <h1>Hi i am from states</h1>
            </div>
         );
    }
}
 
export default StatesCompo;