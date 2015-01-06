angular.module('tempoApp').service('interfaceData', function() {
	var scenarios = {
		"Golden Path": {
			"userTempoStdNav":true,
			"period": {
				"name" : "September '14",
				"dates" : "Sep 1 - Sep 30, 2014"
			},
			"entryType": "Price Rate",
			"entries" : [
			{
				"name":"Designers1"
			},
			{
				"name":"Developers1"
			},
			{
				"name":"Product Owners1"
			}]
		},
		"Empty State": {
			"period": {
				"name" : "November '14",
				"dates" : "Nov 1 - Nov 31, 2014"
				},				
			"entries" : [
				{
					"name":"Designers2"
				},
				{
					"name":"Developers2"
				},
				{
					"name":"Product Owners2"
				}]
			}
		};
		return {
		getData: function () {
			return scenarios;
		}
	}
})

