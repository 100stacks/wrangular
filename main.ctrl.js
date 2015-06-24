/*
 * Angular controller - the business logic of an Angular application
 *
 */

 // The controller is were your business logic should be handled, essentially the controller CONTROLS
 //		the data and it provides it to the view for display.  

// In the code below, we 1st retrieve the app module and then use the Controller function to INSTANTIATE
//	a new controller.
//		- 1st parameter:  The name of our controller
//		- 2nd parameter:  The controller logic
 angular.module('app').controller("MainController", function() {
 	// To avoid $scope issues, we capture the controller instance with 'vm' and manipulate it instead of global $scope
 	var vm = this;

 	vm.title = "Wrangling with Angular";
 	vm.searchInput = "";
 	vm.shows = [
 		{ 
 			title: 'Game of Thrones',
 			year: 2011,
 			favorite: true
 		},
		{ 
 			title: 'Greys Anatomy',
 			year: 2005,
 			favorite: false
 		},
		{ 
 			title: 'Firefly',
 			year: 2002,
 			favorite: true
 		},
		{ 
 			title: 'Banshee',
 			year: 2013,
 			favorite: true
 		},
		{ 
 			title: 'Walking Dead',
 			year: 2010,
 			favorite: false
 		}

 	];

 	vm.orders = [
 		{
 			id: 1,
 			title: 'Year Ascending',
 			key: 'year',
 			reverse: false
 		},
 		{
 			id: 2,
 			title: 'Year Descending',
 			key: 'year',
 			reverse: true
 		},
 		{
 			id: 3,
 			title: 'Title Ascending',
 			key: 'title',
 			reverse: false
 		},
 		{
 			id: 4,
 			title: 'Title Descending',
 			key: 'title',
 			reverse: true
 		},
 	];
 	vm.order = vm.orders[0];

 });

 /*
  * @desc Before we can use the contoller we need to instruct Angular where to implement it in our HTML document(s)
  * 	We can have multiple Controllers per template and we can be nested controllers
  */