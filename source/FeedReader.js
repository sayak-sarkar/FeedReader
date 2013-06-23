enyo.kind({
	name: "MyApps.FeedReader",
	kind: enyo.VFlexBox,
	components: [
		{name: "getFeed", kind: "WebService",
			onSuccess: "gotFeed",
			onFailure: "gotFeedFailure"},
		{kind: "PageHeader", content: "Enyo FeedReader"},
		{kind: "RowGroup", caption: "Feed URL", components: [
			{kind: "InputBox", components: [
				{name: "feedUrl", kind: "Input", flex: 1, value: "http://feeds.bbci.co.uk/news/rss.xml"},
				{kind: "Button",caption: "Get Feed", onclick: "btnClick"}
			]}
		]}
	],
	btnClick: function() {
		var url = "http://query.yahooapis.com/v1/public/yql?q=select" + "%20title%2C%20description%20from%20rss%20where%20url%3D%22"
		 + this.$.feedUrl.getValue() + "%22&format=json&callback=";
		this.$.getFeed.setUrl(url);
		this.$.getFeed.call();
	},
	gotFeed: function (inSender, inResponse) {
		this.$.button.setCaption("Success");
	},
	gotFeedFailure: function (inSender, inResponse) {
		this.$.button.setCaption("Failure");
	}
});