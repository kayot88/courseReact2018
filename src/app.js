import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import UserForm from './components/user-form'
import ArticleList from './components/article-list'
import articles from './fixtures'

class App extends Component {
  state = {
    openItem: null
  }
  render() {
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleSelect}
        />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
      </div>
    )
  }
  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
  handleSelect = (openItem) => {
    this.setState({ openItem })
    return console.log(this.state)
  }
  setArticleListRef = (ref) => {
    console.log('---', ref, findDOMNode(ref))
  }
}

export default App
