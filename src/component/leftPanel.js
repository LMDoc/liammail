import React, { Component } from "react";
import MessagesList from './messagesList';


class LeftPanel extends Component {
	
	render() {
		if(this.props.messages.length > 0) {
		return(
			<div className="leftPanel">
				<MessagesList 
					messages={ this.props.messages }
					currentMessage={ this.props.currentMessage }
					selectMessage={ this.props.selectMessage }
					removeMessage={ this.props.removeMessage }
					timeConvert={ this.props.timeConvert }
					sortMessagesDes={ this.props.sortMessagesDes }
					sortMessagesAs={ this.props.sortMessagesAs }
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