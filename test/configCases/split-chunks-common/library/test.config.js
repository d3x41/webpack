"use strict";

module.exports = {
	findBundle() {
		return ["./vendor.js", "./main.js"];
	},
	modules: {
		external0: "module 0",
		external1: "module 1",
		external2: "module 2"
	}
};
