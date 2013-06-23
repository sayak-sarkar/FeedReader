enyo.kind({
	name: "MyApps.FeedReader",
	kind: enyo.VFlexBox,
	components: [
		{kind: "PageHeader", content: "Enyo FeedReader"},
		{kind: "RowGroup", caption: "Feed URL", components: [
			{kind: "InputBox", components: [
				{name: "feedUrl", kind: "Input", flex: 1},
				{kind: "Button",caption: "Get Feed", onclick: "btnClick"}
			]}
		]}
	],
	btnClick: function() {
		// handle the button click
	}
});