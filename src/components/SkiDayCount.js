//StateLess Components
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'


const percentToDecimal = (decimal) => {
	console.log("decimal ", decimal);
	return ((decimal*100) + '%')
}

const calcGoalProgress = (total,goal) => {
	console.log("total ", total);
	console.log("goal ", goal);
	return percentToDecimal(total/goal)
}



//export class SkiDayCount extends Component
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
	<div className="row">
		<div className="col-sm-3">
			
			<span>{total}</span> 
			<SnowFlake/> 
			<span>days</span>
		</div>
		<div className="col-sm-3">
			<span>{powder}</span> 
			<Calendar/> 
			<span>days</span>
		</div>
		<div className="col-sm-3"> 
			<span>{backcountry}</span>
			<Terrain /> 
			<span>days</span>
		</div>
		<div className="col-sm-3">
			<span> {calcGoalProgress(total, goal)}</span>
		</div>
	</div>
)
