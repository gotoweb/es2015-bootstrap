import Hello from './Hello';
import MyAngularController from './controllers/MyAngularController.js';

var hello = new Hello();
hello.world();


angular.module('myApp', [])
	.controller('MyAngularController', MyAngularController);