const ErrorHelper = require("../utils/error-helper");

class ModuleGroup extends ErrorHelper {
	constructor(options) {
		super(options);
		this.opts = this.arrayToObject(options);
	}
	run() {
		return {
			output: this.opts,
			outputOptions: {}
		};
	}
}

module.exports = ModuleGroup;