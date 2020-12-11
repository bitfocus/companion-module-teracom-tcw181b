
exports.initFeedbacks = function() {
	const feedbacks = {};

	const relay = {
		type: 'dropdown',
		label: 'Relay Number',
		id: 'relay',
		default: '1',
		choices: [
			{ id: '1',	label: 'Relay 1'},
			{ id: '2',	label: 'Relay 2'},
			{ id: '3',	label: 'Relay 3'},
			{ id: '4',	label: 'Relay 4'},
			{ id: '5',	label: 'Relay 5'},
			{ id: '6',	label: 'Relay 6'},
			{ id: '7',	label: 'Relay 7'},
			{ id: '8',	label: 'Relay 8'},	
		]
	};

	const foregroundColor = {
		type: 'colorpicker',
		label: 'Foreground color',
		id: 'fg',
		default: this.rgb(255, 255, 255)
	};

	const backgroundColorGreen = {
		type: 'colorpicker',
		label: 'Background color',
		id: 'bg',
		default: this.rgb(0, 255, 0)
	};

	const backgroundColorRed = {
		type: 'colorpicker',
		label: 'Background color',
		id: 'bg',
		default: this.rgb(255, 0, 0)
	};

	feedbacks.relayState = {
		label: 'Relay - Output State',
		description: 'Indicate if a Relay is ON or OFF',
		options: [relay, foregroundColor, backgroundColorRed]
	};

	feedbacks.digitalInputState = {
		label: 'Digital - Input State',
		description: 'Indicate if Digital input is OPEN or CLOSED',
		options: [foregroundColor, backgroundColorGreen]
	};

	return feedbacks;
};

exports.executeFeedback = function(feedback, bank) {

	if (feedback.type === 'relayState') {
		switch (feedback.options.relay) {
			case '1':
				if (this.data.Relay.Relay1 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '2':
				if (this.data.Relay.Relay2 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '3':
				if (this.data.Relay.Relay3 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '4':
				if (this.data.Relay.Relay4 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '5':
				if (this.data.Relay.Relay5 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '6':
				if (this.data.Relay.Relay6 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '7':
				if (this.data.Relay.Relay7 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;

			case '8':
				if (this.data.Relay.Relay8 === 'ON') {
					return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
				}
				break;
																			
			default:
				break;
		}
	}

	else if (feedback.type === 'digitalInputState') {
		if (this.data.Digital.DigitalInput === 'CLOSED') {
			return { color: feedback.options.fg, bgcolor: feedback.options.bg };				
		}

	}

};
