angular.module('tempoApp').service('interfaceData', function() {
	var priceRates = {
			"dataSet1": [{
				"name":"Designers1",
				"issueTypes":[
					{
						"Story": {
							"rate":100.00,
							"hours": 71.0 
						}
					},
					{
						"Improvement": {
							"rate":100.00,
							"hours": 67.0
						}
					}]
				},
				{
				"name":"Developers1",
				"issueTypes":[
					{
						"Story": {
							"rate":100.00,
							"hours": 73.2 
						}
					},
					{
						"Improvement": {
							"rate":100.00,
							"hours": 22.3
						}
					}]
				},
				{
				"name":"Expenses1",
				"issueTypes":[
					{
						"Travel": {
							"amount": 830.00 
						}
					},
					{
						"Food": {
							"amount": 621.00
						}
					}]
				}
			],
		"dataSet2": [{
				"name":"Designers2",
				"issueTypes":[
					{
						"Story": {
							"rate":200.00,
							"hours": 61.0 
						}
					},
					{
						"Improvement": {
							"rate":200.00,
							"hours": 77.0
						}
					}]
				},
				{
				"name":"Developers2",
				"issueTypes":[
					{
						"Story": {
							"rate":200.00,
							"hours": 73.2 
						}
					},
					{
						"Improvement": {
							"rate":200.00,
							"hours": 32.3
						}
					}]
				},
				{
				"name":"Expenses2",
				"issueTypes":[
					{
						"Travel": {
							"amount": 830.00 
						}
					},
					{
						"Food": {
							"amount": 621.00
						}
					}]
				}
			]
		};
		return {
		getData: function () {
			return priceRates;
		}
	}
})

