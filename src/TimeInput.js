import React, { Component } from 'react';

export default class TimeInput extends Component {
  render(){
    return (
      <input
        {...this.props}
        id="timeinput-text-input"
        type="text"
      />
    );
  }
}

TimeInput.defaultProps = {
  onChange: () => {}
};
