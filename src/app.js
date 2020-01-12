import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import UserForm from './components/user-form'
import ArticleList from './components/article-list'
import Counter from './components/counter'
import DayPicker from './components/dayPicker'

class App extends Component {
  state = {
    openItem: null
  }
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <DayPicker />
        <ArticleList ref={this.setArticleListRef} />
      </div>
    )
  }
}

export default App
