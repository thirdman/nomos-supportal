StatisticBars

*****title*****

Displays statistical bars based on supplied object

#### usage




#### props
|Property				|	Type			|	Default		|	Description
:-----------------------|:--------------|:--------------|:--------------------------------
title						|	`string`	|	-	|	title above the text
description			|	`string`	|	-	|	(optional) information to display in the help icon
units						|	`string`	|	-	|	text to display after the bars
isCurrency			|	`bool`		|	false	|	displays nice numbers
showNames				|	`bool`		|	false	|	(not yet implemented) shows the text in the bars
showIcons				|	`bool`		|	false	|	show icons/images at the end of bars
source					|	`array`		| see below	|	the array of data to use
classNameProps	|	`array`		| ['normal']	|	array of classes to apply to the component (see below for available classes)


#### classNameProps
|classNameProps		|	Description
:-----------------------|:--------------------------------
`normal`				| default style (optional)
`box`						| wraps it in a background box
`dev`						| for dev purposes makes it min width 400
`hasDivider`		| shows a divider bar above it
`white`					| makes it white, for dark background

	  source: [
	  	{
			_id: '579406a78a1fdc6b9b09923e',
			knownAs: '248 Cumberland St, Dunedin',
			amount: 2.34,
			units: 'm',
			showIcon: true,
			imageUrl: 'http://media.rightmove.co.uk/154k/153359/59035664/153359_40054_IMG_00_0000_max_135x100.jpg',
			icon: 'land',
			type: 'property',
			subType: 'land',
			subSubType: 'parcel',
			email: 'mcdaniel.callahan@architax.me',
			address: '882 Bristol Street, Moraida, Idaho, 7328',
			latitude: '-59.723301',
			longitude: '25.809023'
		},
		{
			_id: '2',
			knownAs: 'Unit 3, 234 Anderson road, South Dunedin, Dunedin, Otago, 2014',
			amount: 2.02,
			units: 'm',
			showIcon: true,
			imageUrl: 'http://www.windstarproperties.net/images/Highlands-Golfsmith-100x100.jpg',
			icon: 'land',
			type: 'property',
			subType: 'land',
			subSubType: 'parcel',
			email: 'mcdaniel.callahan@architax.me',
			address: '882 Bristol Street, Moraida, Idaho, 7328',
			latitude: '-59.723301',
			longitude: '25.809023'
		},
		{
			_id: '3',
			knownAs: 'Bromley House',
			amount: 1.89,
			units: 'm',
			showIcon: true,
			imageUrl: 'http://rigmonkeyapp.com/wp-content/uploads/2011/08/Untitled7-100x100.png',
			icon: 'land',
			type: 'property',
			subType: 'land',
			subSubType: 'parcel',
			email: 'mcdaniel.callahan@architax.me',
			address: '882 Bristol Street, Moraida, Idaho, 7328',
			latitude: '-59.723301',
			longitude: '25.809023'
		},
		{
			_id: '4',
			knownAs: 'Lot 234, Lawrence, Otago - James\'s place',
			amount: 0.76,
			units: 'm',
			showIcon: true,
			imageUrl: 'http://www.cdcrealestate.com/wp-content/uploads/2016/07/IMG_1941-100x100.jpg',
			icon: 'land',
			type: 'property',
			subType: 'land',
			subSubType: 'parcel',
			email: 'mcdaniel.callahan@architax.me',
			address: '882 Bristol Street, Moraida, Idaho, 7328',
			latitude: '-59.723301',
			longitude: '25.809023'
		}
		]


#### TODO
 - make default icons types work
- show large icon circle version
- a method for handling the 'more info'

*****description*****
<StatisticBars classNameProps={['normal', 'box', 'dev']} dev showIcons units="m" title="Example Stat" />

*****example*****
[
{
	"component": "StatisticBars",
	"props": {
		"title": "Example Stat",
		"description": "this the the top 10 property",
		"content": "34",
		"units": "%",
		"showIcons": true,
		"classNameProps": ["normal", "box"]
		}
}
]