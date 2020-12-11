exports.getActions = function() {

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
	
	return {
		'relay_on': {
			label: 'Turn Relay ON',
			options: [
				{
					type: 'dropdown',
					id: 'action',
					label: 'Relay Nr',
					default: '1',
					choices: RELAY_NR
				}
			]
		},
		'relay_off': {
			label: 'Turn Relay OFF',
			options: [
				{
					type: 'dropdown',
					id: 'action',
					label: 'Relay Nr',
					default: '1',
					choices: RELAY_NR
				}
			]
		},
		'relay_toggle': {
			label: 'Toggle Relay ON / OFF',
			options: [
				{
					type: 'dropdown',
					id: 'action',
					label: 'Relay Nr',
					default: '1',
					choices: RELAY_NR
				}
			]
		},
		'relay_pulse': {
			label: 'Pulse Relay ON / OFF',
			options: [
				{
					type: 'dropdown',
					id: 'action',
					label: 'Relay Nr',
					default: '1',
					choices: RELAY_NR
				}
			]
		}
	}
};

exports.executeAction = function(action) {
	var self = this;
	var opt = action.options;
	var conf = self.config;
	var cmd;

	switch(action.action) {
		case 'relay_on':		cmd = "?r" + opt.action + "=1"; break;
		case 'relay_off':		cmd = "?r" + opt.action + "=0"; break;
		case 'relay_toggle':	cmd = "?tg" + opt.action + "=1"; break;
		case 'relay_pulse':		cmd = "?pl" + opt.action + "=1"; break;
	}	

	if (cmd !== undefined) {
		if (conf.username != '' || conf.password != '') {
			var message = 'http://' + conf.host + ':' + conf.port + '/status.xml?a=' + conf.username + ":" + conf.password + cmd;
		}
		else {
			var message = 'http://' + conf.host + ':' + conf.port + '/status.xml' + cmd;
		}	

		this.debug('sending ',message,"to",conf.host);
		console.log('HTTP Send: ' + message);

		self.system.emit('rest_get', message, function (err, result) {
			if (err !== null) {
				this.log('error', 'HTTP GET Request failed (' + result.error.code + ')');
				this.status(self.STATUS_ERROR, result.error.code);
			}
			else {
				this.status(self.STATUS_OK);
			}
		});	
	}
};
