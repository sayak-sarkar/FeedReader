enyo.kind({
	name: "MyApps.Detail",
	kind: "VFlexBox",
	events: {
		onBack: ""
	},
	published: {
		url: ""
	},
	components: [
		{kind: "PageHeader", components: [
			{name: "headerText", kind: enyo.VFlexBox, content: "Enyo FeedReader", flex: 1},
			{name: "backButton", kind: "Button", content: "Back", onclick: "backClick"}
		]},
		{kind: "Scroller", flex: 1, components: [
			{name: "webView", kind: "WebView", className: "enyo-view"}
		]}
	],
	backClick: function () {
		this.doBack();
	},
	showingChanged: function () {
		if (!this.showing) {
			this.$.webView.setUrl("");
		}
	},
	urlChanged: function () {
		this.$.webView.setUrl(this.url);
	}
});