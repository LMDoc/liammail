import React, { Component } from "react";

const rightPanel = props => {
	
		const time = props.timeConvert(props.currentMessage.time_sent);
		const subject = props.currentMessage.subject.slice(0, 1).toUpperCase() + props.currentMessage.subject.slice(1);

		if(props.currentMessage !== null && props.messages.length > 0) {
			return(
				<div className="rightPanel">
					<div className="selected-container">
						<p className="time">{time}</p>
						<h2>{subject}</h2>
						<h4 className="grey"><i>From: {props.currentMessage.sender}</i></h4>
						<p>{props.currentMessage.message}</p>
					</div>
				</div>
			)
		} else {
			return(
				<div className="rightPanel">
					<div className="selected-container">
						
					</div>
				</div>
			)
		}
	}


export default rightPanel;
