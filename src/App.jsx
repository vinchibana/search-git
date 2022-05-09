import React, { Component } from 'react'
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {

	state = {
		users:[],
		isFirst:true,
		isLoading:false,
		error: ''
	}

	// 状态（users）在 App 组件，操作状态的方法（saveUsers）也要在 App；但被 Search 调用，接收 response.data.items，回传至 App 并 setState
	saveUsers = (users) => {
	  this.setState({users: users})
	}

	updateAppState = (stateObject) => {
	  this.setState(stateObject)
	}

	render() {

		// 将 Search 传回的 users 数据传递给 List 做展示
		return (
			<div className="container">
				<Search  updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
