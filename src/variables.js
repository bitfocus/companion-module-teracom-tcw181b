exports.updateVariableDefinitions = function () {
	const variables = []

	const RELAY_VAR = [
		{ label: 'Device Type', name: 'Device_Type' },
		{ label: 'Device ID', name: 'Device_ID' },
		{ label: 'Device Hostname', name: 'Device_Hostname' },
		{ label: 'Device FW', name: 'Device_FW' },
		{ label: 'Digital IN Name', name: 'Digital_IN_Name' },
		{ label: 'Digital IN State', name: 'Digital_IN_State' },
		{ label: 'Digital IN Alarm', name: 'Digital_IN_Alarm' },
		{ label: 'Relay 1 Name', name: 'Relay_1_Name' },
		{ label: 'Relay 1 State', name: 'Relay_1_State' },
		{ label: 'Relay 1 Pulse Width', name: 'Relay_1_PW' },
		{ label: 'Relay 2 Name', name: 'Relay_2_Name' },
		{ label: 'Relay 2 State', name: 'Relay_2_State' },
		{ label: 'Relay 2 Pulse Width', name: 'Relay_2_PW' },
		{ label: 'Relay 3 Name', name: 'Relay_3_Name' },
		{ label: 'Relay 3 State', name: 'Relay_3_State' },
		{ label: 'Relay 3 Pulse Width', name: 'Relay_3_PW' },
		{ label: 'Relay 4 Name', name: 'Relay_4_Name' },
		{ label: 'Relay 4 State', name: 'Relay_4_State' },
		{ label: 'Relay 4 Pulse Width', name: 'Relay_4_PW' },
		{ label: 'Relay 5 Name', name: 'Relay_5_Name' },
		{ label: 'Relay 5 State', name: 'Relay_5_State' },
		{ label: 'Relay 5 Pulse Width', name: 'Relay_5_PW' },
		{ label: 'Relay 6 Name', name: 'Relay_6_Name' },
		{ label: 'Relay 6 State', name: 'Relay_6_State' },
		{ label: 'Relay 6 Pulse Width', name: 'Relay_6_PW' },
		{ label: 'Relay 7 Name', name: 'Relay_7_Name' },
		{ label: 'Relay 7 State', name: 'Relay_7_State' },
		{ label: 'Relay 7 Pulse Width', name: 'Relay_7_PW' },
		{ label: 'Relay 8 Name', name: 'Relay_8_Name' },
		{ label: 'Relay 8 State', name: 'Relay_8_State' },
		{ label: 'Relay 8 Pulse Width', name: 'Relay_8_PW' },
	]

	for (var input in RELAY_VAR) {
		variables.push(RELAY_VAR[input])
	}

	this.setVariableDefinitions(variables)
}
