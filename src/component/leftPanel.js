import React, { Component } from "react";
import MessagesList from './messagesList';


class LeftPanel extends Component {
	
	render() {
		if(this.props.messages.length > 0) {
		return(
			<div className="leftPanel">
				<MessagesList 
					messages={this.props.messages} 
					selectMessage={ (currentMessage) => this.props.selectMessage(currentMessage) }
					removeMessage={ this.props.removeMessage }
					timeConvert={(code) => this.props.timeConvert(code)}
					sortMessagesDes={() => this.props.sortMessagesDes()}
					sortMessagesAs={() => this.props.sortMessagesAs()}
				/>
			</div>
		)
	}

		if(this.props.messages.length === 0) {
			return(
				<div className="leftPanel">
					<p className="empty"><i>Your inbox is currently empty...</i></p>
				</div>
			)
		}
	}
}

export default LeftPanel;