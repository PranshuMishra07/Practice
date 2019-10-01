import React, { Component } from "react";

const Army = (Any, shot, gunName) => {
  class Common extends Component {
    state = {
      gunShots: 0
    };

    handleGunShots = () => {
      this.setState({ gunShots: this.state.gunShots + shot });
    };
    render() {
      return (
        <Any
          hocGunName={gunName}
          hocGunShots={this.state.gunShots}
          handleGunShots
          handleGunShots={this.handleGunShots}
          {...this.props}
        />
      );
    }
  }
  return Common;
};
export default Army;
