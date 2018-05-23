import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<div>
	<SkiDayCount total={50} powder={20} backcountry={10} goal={100}/>
	<hr />
	<SkiDayList days={
		[
			{
				resort : "Squaw Vally",
				date : new Date('1/2/2018'),
				powder : true,
				backcountry : true	
			},
			{
				resort : "Krikwood",
				date : new Date('3/28/2018'),
				powder : true,
				backcountry : true	
			},
			{
				resort : "Mt. Tallac",
				date : new Date('8/02/2018'),
				powder : true,
				backcountry : true	
			}

		]
	}/>
	</div>,
	document.getElementById('react-container')
)