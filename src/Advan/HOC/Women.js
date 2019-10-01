import React, { Component } from "react";
import Army from "./withArm";
class Women extends Component {
  render() {
    return (
      <div>
        <h3>Camp:{this.props.camp} </h3>
        <h3 onMouseOver={this.props.handleGunShots}>
          Women {this.props.hocGunName} No of Bullets:{this.props.hocGunShots}
        </h3>
      </div>
    );
  }
}
export default Army(Women, 20, Ak56);
