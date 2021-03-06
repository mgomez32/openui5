sap.ui.define(function() {

	"use strict";

	return {
		name: "Library 'sap.ui.layout'",	/* Just for a nice title on the pages */
		defaults: {
			group: "Library",
			qunit: {
				version: "edge"					// Whether QUnit should be loaded and if so, what version
			},
			sinon: {
				version: 1					// Whether Sinon should be loaded and if so, what version
			},
			ui5: {
				language: "en-US",
				rtl: false,					// Whether to run the tests in RTL mode
				libs: ["sap.ui.layout"],		// Libraries to load upfront in addition to the library which is tested (sap.ui.layout), if null no libs are loaded
				"xx-waitForTheme": true		// Whether the start of the test should be delayed until the theme is applied
			},
			coverage: {
				only:	"[sap/ui/layout]",	// Which files to show in the coverage report, if null, no files are excluded from coverage
				branchCoverage: true		// Whether to enable standard branch coverage
			},
			loader: {
				paths: {
					"sap/ui/demo/mock": "test-resources/sap/ui/documentation/sdk/"
				}
			},
			page: "test-resources/sap/ui/layout/qunit/testsandbox.qunit.html?test={name}",
			autostart: true					// Whether to call QUnit.start() when the test setup is done
		},
		tests: {
			"ExploredSamples": {
				coverage: {
					only : ["sap/ui/layout/ExploredSamples"]
				},
				ui5: {
					libs: ["sap.ui.unified", "sap.ui.documentation", "sap.ui.layout", "sap.m"]
				},
				sinon: false,
				autostart: false
			},
			"Grid": {
				coverage: {
					only : ["sap/ui/layout/Grid"]
				}
			},
			"CSSGrid-CSSGrid": {
				group: "CSSGrid",
				module: "./cssgrid/CSSGrid.qunit",
				sinon: 1
			},
			"CSSGrid-GridTypes": {
				group: "CSSGrid",
				module: "./cssgrid/GridTypes.qunit",
				sinon: false
			},
			"Splitter": {
				coverage: {
					only: [
						"sap/ui/layout/Splitter",
						"sap/ui/layout/SplitPane",
						"sap/ui/layout/PaneContainer",
						"sap/ui/layout/SplitLayoutData"
					]
				}
			},
			"ResponsiveSplitter": {
				sinon: {
					useFakeTimers: true
				},
				coverage: {
					only: [
						"sap/ui/layout/ResponsiveSplitter",
						"sap/ui/layout/SplitPane",
						"sap/ui/layout/PaneContainer",
						"sap/ui/layout/SplitLayoutData"
					]
				}
			},
			"AssociativeSplitter": {
				coverage: {
					only: ["sap/ui/layout/AssociativeSplitter"]
				}
			},
			"FixFlex": {
				coverage: {
					only: ["sap/ui/layout/FixFlex"]
				}
			},
			"BlockLayout": {
				coverage: {
					only: [
						"sap/ui/layout/BlockLayout",
						"sap/ui/layout/BlockLayoutCell",
						"sap/ui/layout/BlockLayoutRow"
					]
				}
			},

			// Design Time
			"Designtime-Grid": {
				group: "Designtime",
				module: "./designtime/Grid.qunit",
				sinon: false
			},
			"Designtime-BlockLayout": {
				group: "Designtime",
				module: "./designtime/BlockLayout.qunit",
				sinon: false
			},
			"Designtime-BlockLayoutCell": {
				group: "Designtime",
				module: "./designtime/BlockLayoutCell.qunit",
				sinon: false
			},
			"Designtime-BlockLayoutRow": {
				group: "Designtime",
				module: "./designtime/BlockLayoutRow.qunit",
				sinon: false
			},
			"Designtime-FixFlex": {
				group: "Designtime",
				module: "./designtime/FixFlex.qunit",
				sinon: false
			},
			"Designtime-Splitter": {
				group: "Designtime",
				module: "./designtime/Splitter.qunit",
				sinon: false
			}
		}
	};
});