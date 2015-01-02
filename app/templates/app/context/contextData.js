angular.module('tempoApp').service('contextData', function() {
	var entities = {
			"User": [{
				"name":"Elias Brown",
				"lead":"John Steel",
				"parentEntity":"Custom Web Development",
				"pages": ["Overview","Timesheet","Configuration"]
			},
			{
				"name":"Jessie Rosewood",
				"lead":"Robert Penn",
				"parentEntity":"GreenCloud Tango",
				"pages": ["Overview","Timesheet","Configuration"]
			}],
			"Team": [{
				"name":"Custom Web Development",
				"lead":"Robert Penn",
				"parentEntity":"GreenCloud Consulting",
				"pages": ["Overview","Timesheet","Configuration"]
			},
			{
				"name":"GreenCloud Tango",
				"lead":"Robert Penn",
				"parentEntity":"GreenCloud Product Development",
				"pages": ["Overview","Timesheet","Configuration"]
			}],
			"Program": [{
				"name":"GreenCloud Product Development",
				"lead":"",
				"parentEntity":"GreenCloud Software",
				"pages": ["Overview","Timesheet","Configuration"]
			},
			{
				"name":"GreenCloud Consulting",
				"lead":"",
				"parentEntity":"GreenCloud Software",
				"pages": ["Overview","Timesheet","Configuration"]
			}],	
			"Account": [{
				"name":"Tango CAPEX",
				"lead":"Robert Penn",
				"parentEntity":"GreenCloud",
				"pages": ["Overview","Timesheet","Configuration"]
			},
			{
				"name":"Health History Secure Web",
				"lead":"Erica Jefferson",
				"parentEntity":"Ministry of Health",
				"pages": ["Overview","Timesheet","Configuration"]
			}],	
			"Customer": [{
				"name":"GreenCloud",
				"lead":"John Steel",
				"parentEntity":"GreenCloud Software",
				"pages": ["Overview","Timesheet","Configuration"]
			},
			{
				"name":"Ministry of Health",
				"lead":"John Steel",
				"parentEntity":"GreenCloud Software",
				"pages": ["Overview","Timesheet","Configuration"]
			}],		
		};
		return {
		getEntities: function () {
			return entities;
		}
	}
})
