import 'jquery';
import 'cpr_pathpackage'; 

import Checkbox from './models/Checkbox';
import Dial from './models/Dial';
import Likert from './models/Likert';
import Slider from './models/Slider';
import Vertfc from './models/Vertfc';

import {panels} from './views/panels';

const question_length = panels.length-2;

const state = {
	dials: [], //0.1.0 x 
	likerts: [], // 0.2.0 x
	checkboxes: [], // 0.4.0 x
	vertfcs: [], // 0.5.0 x
	sliders: [], // 0.6.0 x
};

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

	// const dial0 = new Dial([
	// 	'not rasdfaseady',
	// 	'trasdfsadfying',
	// 	'doinasdf'
	// ]);

	// const dial1 = new Dial([
	// 	'not',
	// 	'try',
	// ]);

	// state.dials.push(dial0);
	// state.dials.push(dial1);

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

	// const likert1 = new Likert([
	// 	'hello',
	// 	'hi',
	// 	'bye',
	// 	'goodbye'
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


	// const checkbox1 = new Checkbox([
	// 	'st',
	// 	'ond',
	// 	'ird',
	// 	'th'
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

	// const vertfc1 = new Vertfc([
	// 	'Hello',
	// 	'Bye',
	// 	'adfoa'		
	// ]);


	// state.vertfcs.push(vertfc0);
	// state.vertfcs.push(vertfc1);

	// $('.vertfc__form').cprVertfc({
	// 	'state': state,
	// 	'size': .10,
	// });

/*** Slider Ctrl ***/ 
	
	const slider0 = new Slider([
		{
			'question':'What is what?',
			'min':'none',
			'max':'alot'
		},
		{
			'question':'How is much?',
			'min':'0',
			'max':'100'
		},
		{
			'question':'Who is who?',
			'min':'min',
			'max':'max'
		},
	]);

	const slider1 = new Slider([
		{
			'question':'What is what234234?',
			'min':'none234234',
			'max':'alot234243'
		},
		{
			'question':'34234How is much?',
			'min':'342340',
			'max':'34234100'
		},
		{
			'question':'34234Who is who?',
			'min':'34234min',
			'max':'34234max'
		},
	]);

	state.sliders.push(slider0);
	state.sliders.push(slider1);

	$('.slider__form').cprSlider({
		'state': state,
		'size': .1,
		'sideIcons': false,
	});

window.statete  = state.sliders;