import React from 'react';
import AddChild from './AddChild';
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';

class Child extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			editForm: false
		}
	}
	child = this.props.child
	render() {
		return(
			<div className='children' >
				<IoCloseCircleSharp onClick={()=> this.props.onDelete(this.child.id)} className='delete-icon'/>
				<IoHammerSharp onClick={()=>{
					this.setState({
						editForm: !this.state.editForm
					})
				}} className='edit-icon'/>
					<h3>{this.child.firstname}{this.child.lastname}</h3>
					<p>{this.child.age} лет</p>
					{this.state.editForm && <AddChild  child={this.child} onAdd={this.props.onEdit}/>}
					</div>
		)
	}


}

export default Child