WidgetColumns

*****title*****

Basic display of a set of values

#### usage
It will fill the width containing element.


#### props
|Property				|	Type			|	Default		|	Description
:-----------------------|:--------------|:--------------|:--------------------------------
content					|	`string`	|	-					|	statistic amount to display
title						|	`string`	|	-					|	title above the text
units						|	`string`	|	-					|	text to display after the statistic
countTime				|	`number`	|	700				|	time to animate the stat.
trimLabels			|	`bool`		|	false			|	trims the labels to 3 char (ie. 'JAN')
isAnimated			|	`bool`		|	false			|	turns on the animation
hasBackground		|	`bool`		|	false			|	turns on the background
ishorizontal		|	`bool`		|	false			|	puts the units along side
hasDivider			|	`bool`		|	false			|	puts a divider above it
classNameProps	|	`array`		| ['normal']|	array of classes to apply to the component (see below for available classes)


#### classNameProps
|classNameProps		|	Description
:-----------------------|:--------------------------------
`normal`				| default style (optional)
`white`					| makes it all white (for dark background)
`inline`				| will display side by side 
`isHorizontal`	| units will display next to the stat 
`hasDivider`		| will show a divider bar above it


#### TODO
- convert classes into props for ease of use
- allow it to automaticlaly include a 'column' component for ease of use when you are dislaying multiple

*****description*****
<WidgetColumns classNameProps={['normal']} hasDivider units="$" title="Jan 2012" hasBackground />


*****example*****
[
{
	"component": "WidgetColumns",
	"props": {
		"title": "Jan 2012",
		"count": 8,
		"units": "$",
		"hasBackground": true,
		"isAnimated": true,
		"hasDivider": false,
		"classNameProps": ["normal"]
		}
}
]