sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("N-space.List-Fiori.controller.View1", {
		onInit: function () {

		},
		
		onNext: function(){
		var oApp = sap.ui.core.UIComponent.getRouterFor(this);
         oApp.navTo("idView2");
		}
		
	});
});