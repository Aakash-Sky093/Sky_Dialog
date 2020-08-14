/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"N-space/List-Fiori/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});