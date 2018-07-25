import React, { Component } from 'react';
import LeftPanel from './component/leftPanel';
import RightPanel from './component/rightPanel';
import './App.css';
import Loader from './loading_spinner.gif';
import messages from './messages.txt'; 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      currentMessage: null,
    }

  }

  async componentWillMount() {
    await this.getMessages();
    this.sortMessagesAs();
    this.setState({currentMessage: this.state.messages[0]})
  }

  async getMessages() {
    const res = await fetch(messages);
    const messagesArr = await res.json();

    this.setState({ messages: messagesArr.messages })
  }


  selectMessage(currentMessage) {
    this.setState({ currentMessage });
  }

  removeMessage(id) {
    let newArr = this.state.messages.filter(i => i.uid !== id);
    this.setState({ messages: newArr, currentMessage: newArr[0] || 'empty'})
  }

  sortMessagesAs() {
    let sorted = [...this.state.messages].sort((a, b) => a.time_sent < b.time_sent);
    this.setState({ messages: sorted })
  }

  sortMessagesDes() {
    let sorted = [...this.state.messages].sort((a, b) => a.time_sent > b.time_sent);
    this.setState({ messages: sorted })
  }

  timeConvert(code) {
    let x = new Date(code * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    let dayName = days[x.getDay()];
    let day = x.getDate();
    let month = months[x.getMonth()];
    let hour = x.getHours() + 2;
    let min = x.getMinutes();

    return `${dayName} ${day} ${month} - ${hour}:${min}`;
  }

  render() {
    
    if(this.state.currentMessage !== null) {
      return (
        <div className="App">
          <div className="header-bar">
            <h1>LIAM<span className="yellow">MAIL</span></h1>
          </div>
          <div className="container">
            <LeftPanel 
              messages={ this.state.messages }
              currentMessage={this.state.currentMessage}
              selectMessage={ (currentMessage) => this.selectMessage(currentMessage) } 
              removeMessage={ (id) => this.removeMessage(id) }
              timeConvert={(code) => this.timeConvert(code)}
              sortMessagesDes={() => this.sortMessagesDes()}
              sortMessagesAs={() => this.sortMessagesAs()}
            />
            <RightPanel 
              currentMessage={this.state.currentMessage} 
              messages={ this.state.messages } 
              timeConvert={(code) => this.timeConvert(code)}
              />
          </div>
          <div className="footer-text">
            <p>LIAMMAIL 2018</p>
          </div>
        </div>
      );
    }

      return(
        <div>
          <div className="header-bar">
              <h1>LIAM<span className="yellow">MAIL</span></h1>
          </div>
          <div className="container">
            <img src={Loader} alt="loaderIcon" className="loader"/>
          </div>
        </div>
      )

  }
}

export default App;
