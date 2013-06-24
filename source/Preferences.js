enyo.kind({
	name: "MyApps.Preferences",
	kind: enyo.VFlexBox,
	events: {
		onRecieve: "",
		onSave: "",
		onCancel: ""
	},
	components: [
		{
			name: "getPreferencesCall",
			kind: "PalmService",
			service: "palm://com.palm.systemservice/",
			method: "getPreferences",
			onSuccess: "getPreferencesSuccess",
			onFailure: "getPreferencesFailure"
		},
		{
			name: "setPreferencesCall",
			kind: "PalmService",
			service: "palm://com.palm.systemservice/",
			method: "setPreferences",
			onSuccess: "setPreferencesSuccess",
			onFailure: "setPreferencesFailure"
		},
		{kind: "PageHeader", content: "Enyo FeedReader - Preferences"},
		{kind: "VFlexBox",
			components: [
				{kind: "RowGroup", caption: "Default Feed", components: [
					{name: "defaultFeedInput", kind: "Input"}
				]},
				{kind: "HFlexBox", pack: "end", style: "padding: 0 10px",
					components: [
						{name: "saveButton", kind: "Button",
							content: "Save", onclick: "cancelClick"}
					]
				}
			]
		},	
	],
	
})