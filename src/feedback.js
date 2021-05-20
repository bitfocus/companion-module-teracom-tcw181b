exports.initFeedbacks = function () {
	const feedbacks = {}

	const relay = {
		type: 'dropdown',
		label: 'Relay Number',
		id: 'relay',
		default: '1',
		choices: [
			{ id: '1', label: 'Relay 1' },
			{ id: '2', label: 'Relay 2' },
			{ id: '3', label: 'Relay 3' },
			{ id: '4', label: 'Relay 4' },
			{ id: '5', label: 'Relay 5' },
			{ id: '6', label: 'Relay 6' },
			{ id: '7', label: 'Relay 7' },
			{ id: '8', label: 'Relay 8' },
		],
	}

	const fgColor = this.rgb(255, 255, 255)
	const bgColorRed = this.rgb(255, 0, 0)
	const bgColorGreen = this.rgb(0, 255, 0)
	const bgColorOrange = this.rgb(255, 102, 0)

	feedbacks.relayState = {
		type: 'boolean',
		label: 'Relay - Output State',
		description: 'Indicate if a Relay is ON or OFF',
		options: [relay],
		style: {
			color: fgColor,
			bgcolor: bgColorRed,
		},
	}

	feedbacks.relayPulse = {
		type: 'boolean',
		label: 'Relay - Output Pulse',
		description: 'Indicate if a Relay is Pulsing',
		options: [relay],
		style: {
			color: fgColor,
			bgcolor: bgColorOrange,
		},
	}

	feedbacks.digitalInputState = {
		type: 'boolean',
		label: 'Digital - Input State',
		description: 'Indicate if Digital input is OPEN or CLOSED',
		style: {
			color: fgColor,
			bgcolor: bgColorGreen,
		},
	}

	return feedbacks
}

exports.executeFeedback = function (feedback, bank) {
	if (feedback.type === 'relayState') {
		switch (feedback.options.relay) {
			case '1':
				if (this.data.Relay.Relay1 === 'ON') {
					return true
				}
				break

			case '2':
				if (this.data.Relay.Relay2 === 'ON') {
					return true
				}
				break

			case '3':
				if (this.data.Relay.Relay3 === 'ON') {
					return true
				}
				break

			case '4':
				if (this.data.Relay.Relay4 === 'ON') {
					return true
				}
				break

			case '5':
				if (this.data.Relay.Relay5 === 'ON') {
					return true
				}
				break

			case '6':
				if (this.data.Relay.Relay6 === 'ON') {
					return true
				}
				break

			case '7':
				if (this.data.Relay.Relay7 === 'ON') {
					return true
				}
				break

			case '8':
				if (this.data.Relay.Relay8 === 'ON') {
					return true
				}
				break

			default:
				break
		}
	} else if (feedback.type === 'relayPulse') {
		switch (feedback.options.relay) {
			case '1':
				if (this.data.Relay.Relay1 === 'in pulse') {
					return true
				}
				break

			case '2':
				if (this.data.Relay.Relay2 === 'in pulse') {
					return true
				}
				break

			case '3':
				if (this.data.Relay.Relay3 === 'in pulse') {
					return true
				}
				break

			case '4':
				if (this.data.Relay.Relay4 === 'in pulse') {
					return true
				}
				break

			case '5':
				if (this.data.Relay.Relay5 === 'in pulse') {
					return true
				}
				break

			case '6':
				if (this.data.Relay.Relay6 === 'in pulse') {
					return true
				}
				break

			case '7':
				if (this.data.Relay.Relay7 === 'in pulse') {
					return true
				}
				break

			case '8':
				if (this.data.Relay.Relay8 === 'in pulse') {
					return true
				}
				break

			default:
				break
		}
	} else if (feedback.type === 'digitalInputState') {
		if (this.data.Digital.DigitalInput === 'CLOSED') {
			return true
		}
	}
	return false
}
