import React, {Component} from 'react'
import axios from "axios";

export default class Search extends Component {
  searchUsers = () => {

    // 连续解构赋值，并将 value 重命名为 keyWord
    const {keyWordElement: {value: keyWord}} = this
    this.props.updateAppState({isFirst: false, isLoading: true})
    axios.get(`http://localhost:3000/api1/search/uoosers?q=${keyWord}`).then(
      response => {
        this.props.updateAppState({isLoading:false, users: response.data.items})
      },
      error => {
        this.props.updateAppState({isLoading: false, error:error.message})
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
