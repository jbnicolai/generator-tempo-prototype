angular.module('app').service('contextData', function() {
	var teams = {
			"teams": [{
				"name":"GreenCloud Tango",
				"lead":"Robert Penn",
				"program":"GreenCloud Product Development",
				"Summary":"Tango Product Development Team"
			},
			{
				"name":"Custom Web Development",
				"lead":"Robert Penn",
				"program":"GreenCloud Consulting",
				"Summary":"Custom Web Development Team"
			},
			{
				"name":"GreenCloud Azome",
				"lead":"Erica Jefferson",
				"program":"GreenCloud Product Development",
				"Summary":"Develop Azome game app"
			},
			{
				"name":"GreenCloud Management",
				"lead":"John Steel",
				"program":"GreenCloud Operation",
				"Summary":"The GreenCloud Management Team"
			},
			{
				"name":"GreenCloud Wikkieea",
				"lead":"Erica Jefferson",
				"program":"GreenCloud Product Development",
				"Summary":"Wikkieea Development Cloud Development Team"
			},
			{
				"name":"Marketing",
				"lead":"Tara Flynn",
				"program":"GreenCloud Operation",
				"Summary":"GreenCloud's Marketing Team"
			},
			{
				"name":"Service & Support",
				"lead":"Laura Penn",
				"program":"GreenCloud Consulting",
				"Summary":"Service desk and bugmasters"
			},
			{
				"name":"The New Dev Team",
				"lead":"Robert Penn",
				"program":"",
				"Summary":"The New Development Team"
			}]
		};
		return {
		getTeams: function () {
			return teams;
		}
	}
})
