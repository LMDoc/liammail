import React, { Component } from 'react';
import Message from './message';

class MessagesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sortDirection: "ascending",
		}
	}

	render() {

		const mailItems = this.props.messages.map((mail) => {
			return (
				<Message
				mail = {mail}
				key = {mail.uid}
				selectMessage={ (currentMessage) => this.props.selectMessage(currentMessage) }
				removeMessage={ this.props.removeMessage }
				timeConvert={(code) => this.props.timeConvert(code)}
				 />
			);
		});
		
		if(this.state.sortDirection === "ascending")
		return (
			<ul>
				<li className="mailListBar">
					<p>Sender</p>
					<p>Subject</p>
					<p className="sent" onClick={ () => (this.props.sortMessagesDes(), this.setState({ sortDirection: "descending" })) }>Sent <i class="fas fa-sort-amount-down"></i></p>
					<p className="close"></p>
				</li>
				{mailItems}
			</ul>
		)

		if(this.state.sortDirection === "descending")
		return (
			<ul>
				<li className="mailListBar">
					<p>Sender</p>
					<p>Subject</p>
					<p className="sent" onClick={ () => (this.props.sortMessagesAs(), this.setState({ sortDirection: "ascending" })) }>Sent <i class="fas fa-sort-amount-up"></i></p>
					<p className="close"></p>
				</li>
				{mailItems}
			</ul>
		)

	}
};

export default MessagesList;