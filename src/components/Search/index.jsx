import React, {Component} from 'react'
import axios from "axios";
import PubSub from 'pubsub-js'

export default class Search extends Component {

  searchUsers = () => {

    // 从输入获取数据，连续解构赋值，并将 value 重命名为 keyWord
    const {keyWordElement: {value: keyWord}} = this
    PubSub.publish('fetchUserData',{isFirst: false, isLoading: true})
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('fetchUserData', {isLoading:false, users: response.data.items})
      },
      error => {
        PubSub.publish('fetchUserData',{isLoading: false, error:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 GitHub 用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.searchUsers}>搜索</button>
        </div>
      </section>
    )
  }
}