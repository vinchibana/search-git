import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		
		return (
				<div className="row">
					{this.props.users.map((userObject) => {

						return (
								<div key={userObject.id} className="card">
									<a rel="noreferrer" href={userObject.html_url} target="_blank">
										<img alt="head_portrait" src={userObject.avatar_url} style={{width:'100px'}} />
									</a>
									<p className="card-text">{userObject.login}</p>
								</div>
						)
					})}
				</div>
		)
	}
}
