angular.module('starter.services', [])

.factory('jsonReq', function ($http){
	return {
		getJSON: function (searchString){
			console.log('in jsonReq factory calling function');
			searchString = searchString.toLowerCase();
			return $http({
				method: 'GET',
				url: 'https://www.reddit.com/r/'+searchString+'/.json'
			})
			.then(function (res){
				return res.data
			})
		}
	}
})

