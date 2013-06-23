enyo.kind({
	name: "MyApps.FeedReader",
	kind: enyo.VFlexBox,
	components: [
		{kind: "PageHeader", components: [
			{kind: enyo.VFlexBox, content: "Enyo FeedReader", flex: 1},
			{name: "backButton", kind: "Button", content: "Back", onclick: "goBack"}
		]},
		{name: "pane", kind: "Pane", flex: 1, onSelectView: "viewSelected",
			components: [
				{name: "search", classname: "enyo-bg", kind: "MyApps.Search", onSelect: "feedSelected", onLinkClick: "linkClicked"},
				{name: "detail", classname: "enyo-bg", kind: "Scroller", 
					components: [
						{name: "webView", kind: "WebView", classname: "enyo-view"}
					]
				}
			]
		}
	],
	create: function () {
		this.inherited(arguments);
		this.$.pane.selectViewByName("search");
	},
	feedSelected:function (inSender, inFeed) {
		this.$.pane.selectViewByName("detail");
		this.$.webView.setUrl(inFeed.link);
	},
	linkClicked: function (inSender, inUrl) {
		this.$.webView.setUrl(inUrl);
		this.$.pane.selectViewByName("detail");
	},
	viewSelected: function (inSender, inView) {
		if (inView == this.$.search) {
			this.$.webView.setUrl("");
			this.$.backButton.hide();
		} else if (inView == this.$.detail) {
			this.$.backButton.show();
		}
	},
	goBack: function (inSender, inEvent) {
		this.$.pane.back(inEvent);
	}
});