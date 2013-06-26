enyo.kind({
	name: "MyApps.FeedReader",
	kind: enyo.VFlexBox,
	components: [
		{name: "pane", kind: "Pane", flex: 1,
			components: [
				{name: "search", className: "enyo-bg", kind: "MyApps.Search",
            		onSelect: "feedSelected", onLinkClick: "linkClicked"},
         		{name: "detail", className: "enyo-bg", kind: "MyApps.Detail",
            		onBack: "goBack"},
				{
					name: "preferences",
					className: "enyo-bg",
					kind: "MyApps.Preferences",
					onReceive: "preferencesReceived",
					onSave: "preferencesSaved",
					onCancel: "goBack"
				}
			]
		},
		{kind: "AppMenu",
      		components: [
    	    	{caption: "Preferences", onclick: "showPreferences"},
    		]
  		}
	],
	openAppMenuHandler: function() {
    	this.$.appMenu.open();
	},
	closeAppMenuHandler: function() {
		this.$.appMenu.close();
	},
	feedSelected: function(inSender, inFeed) {
		this.$.pane.selectViewByName("detail");
		this.$.detail.setUrl(inFeed.link);
	},
	linkClicked: function(inSender, inUrl) {
		this.$.detail.setUrl(inUrl);
		this.$.pane.selectViewByName("detail");
	},
	showPreferences: function() {
		this.$.pane.selectViewByName("preferences");
	},
	preferencesReceived: function(inSender, inDefaultUrl) {
		this.$.search.setFeedUrl(inDefaultUrl);
	},
	preferencesSaved: function(inSender, inFeedUrl) {
		this.$.search.setFeedUrl(inFeedUrl);
		this.$.pane.back();
	},
	goBack: function(inSender, inEvent) {
		this.$.pane.back(inEvent);
	}
});