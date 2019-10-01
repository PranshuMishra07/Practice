import React, { Component } from "react";
import Army from "./withArm";
class Men extends Component {
  render() {
    return (
      <div>
        <h3>Camp:{this.props.camp} </h3>
        <h3 onMouseOver={this.props.handleGunShots}>
          Men {this.props.hocGunName} No of Bullets:{this.props.hocGunShots}
        </h3>
      </div>
    );
  }
}
export default Army(Men, 10, "Ak47");
