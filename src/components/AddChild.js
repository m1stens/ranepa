import React from "react"

class AddChild extends React.Component{
	childAdd={}
	constructor(props){
		super(props)
		this.state={
			firstname:"",
			lastname:"",
			age: 1,
		}
	}
render(){
	return(
		<form ref={(el)=> this.myForm = el}>
			<input placeholder="Имя" onChange={(e)=> this.setState({firstname: e.target.value})}/>
			<input placeholder="Фамилия" onChange={(e)=> this.setState({firstname: e.target.value})}/>
			<input placeholder="Возраст" onChange={(e)=> this.setState({age: e.target.value})}/>
			<button type="button" onClick={()=> {
				this.myForm.reset()
				this.childAdd ={
					firstname: this.state.firstname,
					lastname: this.state.lastname,
					age: this.state.age,
				}

				if(this.props.child)
					this.childAdd.id = this.props.child.id
				this.props.onAdd(this.childAdd)
				}}>Добавить</button>
		</form>
	)
}
}
export default AddChild