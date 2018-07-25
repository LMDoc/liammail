import React, { Component } from 'react';

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			first: ''
		}
	}

	componentWillMount() {
		this.setState({ first: this.props.currentMessage.uid });
	}

	styleClicked = {
		fontWeight: 600,
	}

	styleActive = {
		background: "rgba(200,200,200,.5)",
	}

	handleClick() {
		this.setState({clicked: true});
		this.props.selectMessage(this.props.mail);
	}

	handleRemove(e) {
		e.stopPropagation();
		this.props.removeMessage(this.props.mail.uid);
	}

	render() {
		
		const time = this.props.timeConvert(this.props.mail.time_sent);
		const subject = this.props.mail.subject.length > 35 ? `${this.props.mail.subject.slice(0, 35)}...` : this.props.mail.subject;
		const sender = this.props.mail.sender.length > 20 ? `${this.props.mail.sender.slice(0, 20)}...` : this.props.mail.sender;

		if(this.props.mail.uid === this.state.first && this.props.mail.uid === this.props.currentMessage.uid) {
			return (
				<li className="mailListItem" style={this.styleActive} onClick={() => this.handleClick()}>
					<p>{sender}</p>
					<p>{subject}</p>
					<p>{time}</p>
					<p className="close" onClick={ (id) => this.handleRemove(id) }>X</p>
				</li>
			)
		}

		if(this.props.mail.uid === this.state.first) {
			return (
				<li className="mailListItem" onClick={() => this.handleClick()}>
					<p>{sender}</p>
					<p>{subject}</p>
					<p>{time}</p>
					<p className="close" onClick={ (id) => this.handleRemove(id) }>X</p>
				</li>
			)
		}

		if(this.props.mail.uid === this.props.currentMessage.uid) {
			return (
				<li className="mailListItem" style={this.styleActive} onClick={() => this.handleClick()}>
					<p>{sender}</p>
					<p>{subject}</p>
					<p>{time}</p>
					<p className="close" onClick={ (id) => this.handleRemove(id) }>X</p>
				</li>
			)
		}

		if(this.state.clicked === true) {
			return (
				<li className="mailListItem" onClick={() => this.handleClick()}>
					<p>{sender}</p>
					<p>{subject}</p>
					<p>{time}</p>
					<p className="close" onClick={ (e) => this.handleRemove(e) }>X</p>
				</li>
			)
		}

		if(this.state.clicked === false) {
			return (
				<li className="mailListItem" style={this.styleClicked} onClick={() => this.handleClick()}>
					<p>{sender}</p>
					<p>{subject}</p>
					<p>{time}</p>
					<p className="close" onClick={ (id) => this.handleRemove(id) }>X</p>
				</li>
			)
		}

	}
}

export default Message;