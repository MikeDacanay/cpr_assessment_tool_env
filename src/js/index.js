import 'jquery';
import 'cpr_pathpackage'; 

import Checkbox from './models/Checkbox';
import Dial from './models/Dial';
import Likert from './models/Likert';
import Slider from './models/Slider';
import Vertfc from './models/Vertfc';

import {panels} from './views/panels';
import {state} from './state';

const question_length = panels.length-2;

state.qLen = question_length;
state.white = '#fff';

/*** App path Ctrl ***/ 

	$('.pathfinder').build({
		'panels': panels,
		'timing': 1500,
		'spacing': 400,
		'delay': 1,
	});

/*** Dial Ctrl ***/ 


	// $(".dial-tracker").cprDial({
	// 	'thickness': .12,
	// 	'height': '200%',
	// 	'bgColor': '#56504b',
	// 	'fgColor': state.white,
	// 	'state': state,		
	// });

/*** Likert Ctrl ***/ 

	// const likert0 = new Likert([
	// 	'Strongly Disagree',
	// 	'Disagree',
	// 	'Neutral',
	// ]);

	// state.likerts.push(likert0);	
	// state.likerts.push(likert1);	

	// $('.likert__form').cprLikert({
	// 	'vertical': false,
	// 	'state': state,
	// 	'size': .10,
	// });

/*** Checkbox Ctrl ***/ 

	// const checkbox0 = new Checkbox([
	// 	'first',
	// 	'second',
	// 	'third',
	// 	'forth'
	// ]);

	// state.checkboxes.push(checkbox0);
	// state.checkboxes.push(checkbox1);

	// $('.checkbox__form').cprCheckbox({
	// 	'vertical': false,
	// 	'state': state,
	// 	'size': .15,
	// });

/*** Vertfc Ctrl ***/ 
	
	// const vertfc0 = new Vertfc([
	// 	'Yes',
	// 	'No',		
	// ]);

	// state.vertfcs.push(vertfc0);
	// state.vertfcs.push(vertfc1);

	// $('.vertfc__form').cprVertfc({
	// 	'state': state,
	// 	'size': .10,
	// });

/*** Slider Ctrl ***/ 
	
	// const slider0 = new Slider([
	// 	{
	// 		'question':'What is what?',
	// 		'min':'none',
	// 		'max':'alot'
	// 	},
	// 	{
	// 		'question':'How is much?',
	// 		'min':'0',
	// 		'max':'100'
	// 	},
	// 	{
	// 		'question':'Who is who?',
	// 		'min':'min',
	// 		'max':'max'
	// 	},
	// ]);

	// state.sliders.push(slider0);
	// state.sliders.push(slider1);

	$('.slider__form').cprSlider({
		'state': state,
		// 'size': .1,
		'sideIcons': false,
	});

window.statete  = state;


