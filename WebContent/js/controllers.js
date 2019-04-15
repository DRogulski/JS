var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries = [
{ 'title':'Rzym',
'when':'2015-12-14',
'thumbnailUrl':'https://placeimg.com/400/200/any'
},
{ 'title':'Maroko',
'when':'2014-08-04',
'thumbnailUrl':'https://placeimg.com/400/200/people'
},
{ 'title':'gdzieś',
	'when':'2014-08-03',
	'thumbnailUrl':'https://placeimg.com/400/200/nature'
	},
{ 'title':'gdzieś indziej',
	'when':'2014-08-05',
	'thumbnailUrl':'https://placeimg.com/400/200/animals'
	}

];

$scope.sortList = [
	{
	'label':'Alfabetycznie',
	'value':'title'
	},
	{
	'label':'Chronologicznie',
	'value':'when'
	}
	];
$scope.orderProp = 'when';

});