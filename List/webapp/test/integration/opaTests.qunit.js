/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jgp/List/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
