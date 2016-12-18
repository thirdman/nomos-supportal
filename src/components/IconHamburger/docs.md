IconHamburger

*****title*****

Diplays the hamburger icon and animates it


#### props
|Property				|	Type			|	Default		|	Description
:-----------------------|:--------------|:--------------|:--------------------------------
isOpen					|	`bool`	|	'false'	|	controls the open/closed nature
isDocked				|	`bool`	|	'false'	|	controls the left position of the icon
menuClicked			|	`function`	|	-	|	(required) controls the action that happens when you click it
width						|	`number`	|	36	|	width of container
height					|	`number`	|	30	|	height of container
strokeWidth			|	`number`	|	2	|	how thick the lines are
borderRadius		|	`number`	|	0	|	border radius
rotate					|	`number`	|	45	|	how much to rotate the lines
color						|	`string`	|	'black'	|	html colour name
animationDuration	|	`number`	|	0.5	|	number in secons how long the animation is
classNameProps	|	`array`	| ['black']	|	array of classes to apply to the component (see below for available classes)


#### state

#### classNameProps

#### TODO

*****description*****

*****example*****
[{
	"component": "IconHamburger",
	"props": {
		"width": 36,
		"color": "grey",
		"classNameProps": ["normal"]
	}
}]