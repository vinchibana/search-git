import React, {Component} from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error: ''
  }

  componentDidMount() {
    PubSub.subscribe('fetchUserData',(_, stateObject) => {
      this.setState(stateObject)
    })
  }

  render() {

    // 遍历 users 对象数组，为每个 userObject 创建一个 card 元素（每个 card 需要唯一的 key）
    const {users, isFirst, isLoading,error} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome</h2> :
            isLoading ? <h2>Loading searching results...</h2> :
              error ? <h2 style={{color:'red'}}>{error}</h2> :
          users.map((userObject) => {
            return (
              <div key={userObject.id} className="card">
                <a rel="noreferrer" href={userObject.html_url} target="_blank">
                  <img alt="head_portrait" src={userObject.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObject.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
