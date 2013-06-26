enyo.kind({
	name: "MyApps.Search",
	kind: enyo.VFlexBox,
	events: {
		onLinkClick: "",
		onSelect: ""
	},
components: [
		{kind: "PageHeader", content: "Enyo FeedReader"},
		{name: "getFeed", kind: "WebService",
			onSuccess: "gotFeed",
			onFailure: "gotFeedFailure"},
		{kind: "RowGroup", caption: "Feed URL", components: [
			{kind: "InputBox", components: [
				{name: "feedUrl", kind: "Input", flex: 1, value: "http://feeds.bbci.co.uk/news/rss.xml"},
				{kind: "Button",caption: "Get Feed", onclick: "btnClick"}
			]}
		]},
		{kind: "Scroller", flex: 1, components: [
			{name: "list", kind: "VirtualRepeater", onSetupRow: "getListItem",
				components: [
					{kind: "Item", layoutKind: "VFlexLayout",
						components: [
							{name: "title", kind: "Divider"},
							{name: "description" ,kind: "HtmlContent", onLinkClick: "doLinkClick"}
						],
						onclick: "ListItemClick"
					}
				]
			}
		]}
	],
	btnClick: function() {
		var url = "http://query.yahooapis.com/v1/public/yql?q=select" + "%20title%2C%20description%2C%20link%20from%20rss%20where%20url%3D%22"
		 + this.$.feedUrl.getValue() + "%22&format=json&callback=";
		this.$.getFeed.setUrl(url);
		this.$.getFeed.call();
	},
	create: function () {
		this.inherited(arguments);
		this.results = [];
	},
	getListItem: function (inSender, inIndex) {
		var r = this.results[inIndex];
		if (r) {
			this.$.title.setCaption(r.title);
			this.$.description.setContent(r.description);
			return true;
		}
	},
	gotFeed: function (inSender, inResponse) {
		this.results = inResponse.query.results.item;
		this.$.list.render();
	},
	gotFeedFailure: function (inSender, inResponse) {
		enyo.log("Got Failure from getFeed");
	},
	ListItemClick: function (inSender, inEvent) {
		var feed = this.results[inEvent.rowIndex];
		this.doSelect(feed);
	},
	setFeedUrl: function (inUrl) {
		if (inUrl) {
			this.$.feedUrl.setValue(inUrl);
		}
	}
});