const got = require('got');
const xml2js = require('xml2js');
const _ = require('lodash');

exports.initAPI = function () {
	const parseXML = body => {
		xml2js.parseString(body, (err, xml) => {
			if (err) {
				this.debug('info', JSON.stringify(err));
				// this.checkFeedbacks('status');
			} else {
				const data = {
					Device: xml.Monitor.Device[0],
					ID: xml.Monitor.ID[0],
					Hostname: xml.Monitor.Hostname[0],
					FW: xml.Monitor.FW[0],
					DigitalInputDescription: xml.Monitor.DigitalInputDescription[0],
					DigitalInput: xml.Monitor.DigitalInput[0],
					DinAlarm: xml.Monitor.DinAlarm[0],
					Relay1Description: xml.Monitor.Relay1Description[0],
					Relay1: xml.Monitor.Relay1[0],
					pw1: xml.Monitor.pw1[0],
					Relay2Description: xml.Monitor.Relay2Description[0],
					Relay2: xml.Monitor.Relay2[0],
					pw2: xml.Monitor.pw2[0],
					Relay3Description: xml.Monitor.Relay3Description[0],
					Relay3: xml.Monitor.Relay3[0],
					pw3: xml.Monitor.pw3[0],
					Relay4Description: xml.Monitor.Relay4Description[0],
					Relay4: xml.Monitor.Relay4[0],
					pw4: xml.Monitor.pw4[0],
					Relay5Description: xml.Monitor.Relay5Description[0],
					Relay5: xml.Monitor.Relay5[0],
					pw5: xml.Monitor.pw5[0],
					Relay6Description: xml.Monitor.Relay6Description[0],
					Relay6: xml.Monitor.Relay6[0],
					pw6: xml.Monitor.pw6[0],
					Relay7Description: xml.Monitor.Relay7Description[0],
					Relay7: xml.Monitor.Relay7[0],
					pw7: xml.Monitor.pw7[0],
					Relay8Description: xml.Monitor.Relay8Description[0],
					Relay8: xml.Monitor.Relay8[0],
					pw8: xml.Monitor.pw8[0],
				};

				// Check for changes to update feedbacks
				const changes = new Set([]);

				// Check For Changes
				if (!_.isEqual(data.Device, this.data.Device)) {
					this.setVariable(`Device_Type`, data.Device);
					this.setVariable(`Device_ID`, data.ID);
					this.setVariable(`Device_Hostname`, data.Hostname);
					this.setVariable(`Device_FW`, data.FW);
					this.setVariable(`Digital_IN_Name`, data.DigitalInputDescription);
					this.setVariable(`Digital_IN_State`, data.DigitalInput);
					this.setVariable(`Digital_IN_Alarm`, data.DinAlarm);
					this.setVariable(`Relay_1_Name`, data.Relay1Description);
					this.setVariable(`Relay_1_State`, data.Relay1);
					this.setVariable(`Relay_1_PW`, data.pw1);
					this.setVariable(`Relay_2_Name`, data.Relay2Description);
					this.setVariable(`Relay_2_State`, data.Relay2);
					this.setVariable(`Relay_2_PW`, data.pw2);
					this.setVariable(`Relay_3_Name`, data.Relay3Description);
					this.setVariable(`Relay_3_State`, data.Relay3);
					this.setVariable(`Relay_3_PW`, data.pw3);
					this.setVariable(`Relay_4_Name`, data.Relay4Description);
					this.setVariable(`Relay_4_State`, data.Relay4);
					this.setVariable(`Relay_4_PW`, data.pw4);
					this.setVariable(`Relay_5_Name`, data.Relay5Description);
					this.setVariable(`Relay_5_State`, data.Relay5);
					this.setVariable(`Relay_5_PW`, data.pw5);
					this.setVariable(`Relay_6_Name`, data.Relay6Description);
					this.setVariable(`Relay_6_State`, data.Relay6);
					this.setVariable(`Relay_6_PW`, data.pw6);
					this.setVariable(`Relay_7_Name`, data.Relay7Description);
					this.setVariable(`Relay_7_State`, data.Relay7);
					this.setVariable(`Relay_7_PW`, data.pw7);
					this.setVariable(`Relay_8_Name`, data.Relay8Description);
					this.setVariable(`Relay_8_State`, data.Relay8);
					this.setVariable(`Relay_8_PW`, data.pw8);
				}

				// Update variable definitions
				if (changes.size > 0) {
					this.updateVariableDefinitions();
				}
				
			}
		});
	};

	const getStatus = () => {
		var message = '';

		// For sepecifiing a headder
		const options = {
			// headers: {
			// 	Authorization: `Basic ${Buffer.from(this.config.username + ':' + this.config.password).toString('base64')}`
			// }
		};

		// detect and use authendication if a password or username is present
		if (this.config.username != '' || this.config.password != '') {
			message = '?a=' + this.config.username + ':' + this.config.password;
		}

		got.get(`http://${this.config.host}:${this.config.httpPort || 80}/status.xml` + message, options)
			.then(res => {
				if (res.statusCode === 200) {
					this.status(this.STATE_OK);
					this.debug('Connected');		
					return parseXML(res.body);
				}
			})
			.catch(err => {
				this.debug('Network error', err);
				this.status(this.STATE_ERROR, err);
				this.debug('Teracom API err:' + JSON.stringify(err));
			});
	};

	if (this.pollAPI) {
		clearInterval(this.pollAPI);
	}

	if (this.config.apiPollInterval != 0) {
		this.pollAPI = setInterval(getStatus, this.config.apiPollInterval < 100 ? 100 : this.config.apiPollInterval);
	}
};
