import React from 'react';
import ButtonAdd from './components/AddChild';
import Children from './components/Children';




class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		children: [
		{
			id: 1,
			firstname: "Иван ",
			lastname: "Ивонов ",
			age: 12,
		},
		{
			id: 2,
			firstname: "Cергей ",
			lastname: "Сидоров ",
			age: 12,
		},
		{
			id: 3,
			firstname: "Пётр ",
			lastname: "Петров ",
			age: 12,
		},
			],
			addChildren: "111",
			listChild:"",
			editForm: false,
			listVision: false
		}
		this.addChildren = this.addChildren.bind(this)
		this.buttonClick = this.buttonClick.bind(this)
		this.deleteChild = this.deleteChild.bind(this)
		this.editChild = this.editChild.bind(this)
		this.listButton = this.listButton.bind(this)

	}
	render(){
		return(
			<div>
				
				<button onClick={this.buttonClick} className='main-button'>
					Добавить ребёнка
					</button><br/>
					<main>{this.state.editForm && <ButtonAdd onAdd={this.addChildren}/>}</main>
					<button onClick={this.listButton} className='main-button'>
					Список детей
					</button>
					<main>
					
					{this.state.listVision && <Children children={this.state.children} onEdit={this.editChild} onDelete={this.deleteChild}/>}
					<div className='list'>{this.listChild}</div>
					</main>
			</div>
			
		)
	}
	addChildren(child){
		const id = this.state.children.length + 1
		this.setState({children:[...this.state.children, {id, ...child}]})
	}

	deleteChild(id){
		this.setState({
			children: this.state.children.filter((el)=> el.id !== id)
		})
	}

	editChild(child){
		let allChildren = this.state.children
		allChildren[child.id - 1] = child

		this.setState({children: []}, ()=>{
			this.setState({children: [...allChildren]})
		})
	}


	buttonClick(){
		this.setState({addChildren: <ButtonAdd onAdd={this.addChildren}/>})
		this.setState({
			editForm: !this.state.editForm
		})
	}

	listButton(){
		this.setState({listChild: <Children children={this.state.children} onEdit={this.editChild} onDelete={this.deleteChild}/>})
		this.setState({
			listVision: !this.state.listVision
		})
	}
}

export default App