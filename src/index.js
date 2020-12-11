const instance_skel = require('../../../instance_skel');
const { executeAction, getActions } = require('./actions');
const { initAPI } = require('./api');
const { getConfigFields } = require('./config');
const { executeFeedback, initFeedbacks } = require('./feedback');
const { updateVariableDefinitions } = require('./variables');
const { initPresets } = require('./presets');

/**
 * Companion instance class for Teracom TCW181b
 */
class TeracomInstance extends instance_skel {
	constructor(system, id, config) {
		super(system, id, config);

		// Default instance state
		this.data = {
			startup: true,
			Device: {
				Device: '',
				ID: '',
				Hostname: '',
				FW: '',	
			},
			Digital:{
				DigitalInputDescription: '',
				DigitalInput: 'OPEN',
				DinAlarm: 0,
			},
			Relay: {
				Relay1Description: '',
				Relay1: 'OFF',
				pw1: 1.0,
				Relay2Description: '',
				Relay2: 'OFF',
				pw2: 1.0,
				Relay3Description: '',
				Relay3: 'OFF',
				pw3: 1.0,
				Relay4Description: '',
				Relay4: 'OFF',
				pw4: 1.0,
				Relay5Description: '',
				Relay5: 'OFF',
				pw5: 1.0,
				Relay6Description: '',
				Relay6: 'OFF',
				pw6: 1.0,
				Relay7Description: '',
				Relay7: 'OFF',
				pw7: 1.0,
				Relay8Description: '',
				Relay8: 'OFF',
				pw8: 1.0,	
			}
		};
		
		this.config.host = this.config.host || '';
		this.config.httpPort = this.config.httpPort || 80;
		this.config.apiPollInterval = this.config.apiPollInterval !== undefined ? this.config.apiPollInterval : 250;
		this.config.username = this.config.username;
		this.config.password = this.config.password;
		this.updateVariableDefinitions = updateVariableDefinitions;
	}

	// Init module
	init() {
		this.status(1, 'Connecting');
		this.actions();
		this.init_feedbacks();
		initAPI.bind(this)();
		initPresets.bind(this)();
		this.updateVariableDefinitions();
	}

	// New config saved
	updateConfig(config) {
		this.actions();
		this.config = config;
		this.init_feedbacks();
		initAPI.bind(this)();
		initPresets.bind(this)();
	}
	
	// Set config page fields
	config_fields() {
		return getConfigFields.bind(this)();
	}

	// Instance removal clean up
	destroy() {
		if (this.socket !== undefined) {
			this.socket.destroy();
		}

		if (this.pollAPI) {
			clearInterval(this.pollAPI);
		}

		this.debug('destroy', this.id);
	}
		
	// Set available actions
	actions() {
		this.system.emit('instance_actions', this.id, getActions.bind(this)());
	}

	// Execute action
	action(action) {
		executeAction.bind(this)(action);
	}
	
	// Set available feedback choices
	init_feedbacks() {
		const feedbacks = initFeedbacks.bind(this)();
		this.setFeedbackDefinitions(feedbacks);
	}

	// Execute feedback
	feedback(feedback, bank) {
		return executeFeedback.bind(this)(feedback, bank);
	}

}

module.exports = TeracomInstance;
