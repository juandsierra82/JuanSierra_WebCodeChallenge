angular.module('starter.services', [])

.factory('jsonReq', function ($http){
	return {
		getJSON: function(){
			console.log('in jsonReq factory calling function');
			return $http({
				method: 'GET',
				url: 'https://www.reddit.com/r/funny/.json'
			})
			.then(function (res){
				return res.data
			})
		}
	}
})