import React, { Component } from 'react';
import moment from 'moment';

export default class TimeInput extends Component {
  handleTime(){
    let hours, minutes = 0,
        amPm = 'am',
        dateTime = moment();
    let {value} = this.props;
    let splitValue = value.split(':');
    hours = parseInt(splitValue[0]) || 0;
    minutes = parseInt(splitValue[1]) || 0;
    if(value.includes('p')){
      amPm = 'pm';
      hours = hours < 12 ? hours + 12 : hours;
    }
    dateTime.hour(hours);
    dateTime.minute(minutes);
    dateTime.second(0);
    this.props.onChange(
      dateTime.format('h:mm a')
    );
  }
  onBlur(){
    this.handleTime();
  }
  onKeyPress(e){
    if(e.key == 'Enter'){
      this.handleTime();
    }
  }
  render(){
    return (
      <input
        {...this.props}
        id="timeinput-text-input"
        type="text"
        onChange={(e) => this.props.onChange(e.target.value)}
        onKeyPress={(e) => this.onKeyPress(e)}
        onBlur={() => this.onBlur()}
      />
    );
  }
}

TimeInput.defaultProps = {
  onChange: () => {}
};
