import React, { Component } from "react";
import Men from "./Advan/HOC/Men";
import Women from "./Advan/HOC/Women";
class App extends Component {
  state = {}; // no state

  render() {
    return (
      <div>
        {/* //The Attributes we are passing here would not goto their native component but will go to their HOC
        // from there we have again pass it to Native components */}

        <Men camp="Pulwama" />
        <Women camp="Uri" />
      </div>
    );
  }
}

export default App;
// {/*
// //It is a function  that takes a component as arguements perform some modification and returns a new component
// // const EnhancedComponent=HigherOrderComponentName(Wrappedcccccomponent);
// //const ArmyMen=withArm(Men){/*training */}
// //or
// //const ArmyMen=(Men)=>training*/}
