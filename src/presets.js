exports.initPresets = function() {
	const presets = [];
	const pstSize = '18';

	// Relay Setup
	const RELAY_NR = [
		{ id: '1',	label: 'Relay 1'},
		{ id: '2',	label: 'Relay 2'},
		{ id: '3',	label: 'Relay 3'},
		{ id: '4',	label: 'Relay 4'},
		{ id: '5',	label: 'Relay 5'},
		{ id: '6',	label: 'Relay 6'},
		{ id: '7',	label: 'Relay 7'},
		{ id: '8',	label: 'Relay 8'},	
	]

	for (var input in RELAY_NR) {
		presets.push({
			category: 'Relay ON',
			label: RELAY_NR[input].label + " ON",
			bank: {
				style: 'text',
				text: RELAY_NR[input].label + " ON",
				size: pstSize,
				color: '16777215',
				bgcolor: this.rgb(0,0,0)
			},
			actions: [{	
				action: 'relay_on', 
				options: {
					action: RELAY_NR[input].id
				}
			}]
		});
	}		

	for (var input in RELAY_NR) {
		presets.push({
			category: 'Relay OFF',
			label: RELAY_NR[input].label + " OFF",
			bank: {
				style: 'text',
				text: RELAY_NR[input].label + " OFF",
				size: pstSize,
				color: '16777215',
				bgcolor: this.rgb(0,0,0)
			},
			actions: [{	
				action: 'relay_off', 
				options: {
					action: RELAY_NR[input].id
				}
			}]
		});
	}		

	for (var input in RELAY_NR) {
		presets.push({
			category: 'Relay Toggle',
			label: RELAY_NR[input].label + " Toggle",
			bank: {
				style: 'text',
				text: RELAY_NR[input].label + " Toggle",
				size: pstSize,
				color: '16777215',
				bgcolor: this.rgb(0,0,0)
			},
			actions: [{	
				action: 'relay_toggle', 
				options: {
					action: RELAY_NR[input].id
				}
			}]
		});
	}		

	for (var input in RELAY_NR) {
		presets.push({
			category: 'Relay Pulse',
			label: RELAY_NR[input].label + " Pulse",
			bank: {
				style: 'text',
				text: RELAY_NR[input].label + " Pulse",
				size: pstSize,
				color: '16777215',
				bgcolor: this.rgb(0,0,0)
			},
			actions: [{	
				action: 'relay_pulse', 
				options: {
					action: RELAY_NR[input].id
				}
			}]
		});
	}		

	this.setPresetDefinitions(presets);
};
