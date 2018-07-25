import React, { Component } from 'react';

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
		}

	}


	styleClicked = {
		fontWeight: 600,
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