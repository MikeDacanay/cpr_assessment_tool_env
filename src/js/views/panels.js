import * as comp from './components';

export const panels = [
	`<div class="panel panel--0">
		${comp.createSlider(
			[
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
			]
		)}	
		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`,
	`<div class="panel panel--1">				
		<div class="btn__progress btn__progress--1" data-id='1'></div>
	</div>`,
	`<div class="panel panel--2">									
		<div class="btn__progress btn__progress--2" data-id='2'></div>
	</div>`,
	`<div class="panel panel--3">		
		<div class="btn__progress btn__progress--3" data-id='3'></div>
	</div>`,
	`<div class="panel panel--4">		
		<div class="btn__progress btn__progress--4" data-id='4'></div>
	</div>`,
	`<div class="panel panel--5">
		<div class="btn__progress btn__progress--5" data-id='5'></div>
	</div>`,
	`<div class="panel panel--6">
		<div class="btn__progress btn__progress--5" data-id='5'></div>
	</div>`,
	// `<div class="panel panel--7">
	// 	fifth
	// 	<div class="btn__progress btn__progress--5" data-id='5'></div>
	// </div>`,
	// `<div class="panel panel--8">
	// 	fifth
	// 	<div class="btn__progress btn__progress--5" data-id='5'></div>
	// </div>`,
	// `<div class="panel panel--9">
	// 	fifth
	// 	<div class="btn__progress btn__progress--5" data-id='5'></div>
	// </div>`,				
];



/*** THIS IS TEMPLATE FOR PANEL
	`<div class="panel panel--0">

		<div class="btn__progress btn__progress--0" data-id='0'></div>
	</div>`
***/
