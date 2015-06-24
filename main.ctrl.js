/*
 * Angular controller
 *
 */

 // The controller is were your business logic should be handled, essentially the controller CONTROLS
 //		the data and it provides it to the view for display.  

// In the code below, we 1st retrieve the app module and then use the Controller function to INSTANTIATE
//	a new controller.
//		- 1st parameter:  The name of our controller
//		- 2nd parameter:  The controller logic
 angular.module('app').controller("MainController", function() {
 	var vm = this;
 })

 /* 
  * @desc Before we can use the contoller we need to instruct Angular where to implement it in our HTML document(s)
  * 	We can have multiple Controllers per template and we can be nested controllers