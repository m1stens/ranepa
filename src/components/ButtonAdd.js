import React from 'react';
import AddChild from './Children';


class ButtonAdd extends React.Component{
	constructor(props){
		super(props)
		this.state={
			editForm: false
		}
	}
render(){
	return(
		<div>
			<button onClick={()=>{
				this.setState({
					editForm: !this.state.editForm
				}
				)
			}}>Добавить ребёнка</button>
			{this.state.editForm && <AddChild/>}
		</div>
	)
}
}

export default ButtonAdd