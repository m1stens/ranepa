import React from 'react';
import Child from './Child';

class Children extends React.Component{
	
	render() {
		if(this.props.children.length > 0)
		return(
			<div>
				{this.props.children.map((el)=>(
					<Child onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} child={el} />
				))}
			</div>
		)
		else
		return(
			<div className='children'>
				<h3>Детей нет</h3>
			</div>
		)
	}


}

export default Children