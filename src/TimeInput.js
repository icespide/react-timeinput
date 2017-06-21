import React, { Component } from 'react';
import moment from 'moment';

const _timeFormat = 'h:mm a';

export default class TimeInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      textValue: moment().format(_timeFormat)
    };
  }
  handleTime(){
    let hours, minutes = 0,
        amPm = 'am',
        dateTime = moment();
    let {textValue} = this.state;
    let splitValue = textValue.split(':');
    hours = parseInt(splitValue[0]) || 0;
    minutes = parseInt(splitValue[1]) || 0;
    if(textValue.includes('p')){
      amPm = 'pm';
      hours = hours < 12 ? hours + 12 : hours;
    }
    dateTime.hour(hours);
    dateTime.minute(minutes);
    dateTime.second(0);
    this.props.onChange(dateTime);
  }
  onBlur(){
    this.handleTime();
  }
  onKeyPress(e){
    if(e.key == 'Enter'){
      this.handleTime();
    }
  }
  componentWillMount(){
    let {value} = this.props;
    if(value){
      this.setState({textValue: moment(value).format(_timeFormat)});
    }
  }
  componentWillReceiveProps(newProps){
    let {value} = newProps;
    if(value){
      this.setState({textValue: moment(value).format(_timeFormat)});
    }
  }
  render(){
    return (
      <input
        {...this.props}
        value={this.state.textValue}
        id="timeinput-text-input"
        type="text"
        onChange={(e) => this.setState({textValue:e.target.value})}
        onKeyPress={(e) => this.onKeyPress(e)}
        onBlur={() => this.onBlur()}
      />
    );
  }
}

TimeInput.defaultProps = {
  onChange: () => {}
};
