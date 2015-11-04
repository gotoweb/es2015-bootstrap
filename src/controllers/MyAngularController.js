function MyAngularController() {

	this.bindingTest = 'MyAngularController binding';
	this.repeatTest = ['xeraph', 'gotoweb', 'lsehoon'];

	this.changeText = () => {
		this.bindingTest = 'changed!';
	}

}

export default MyAngularController;