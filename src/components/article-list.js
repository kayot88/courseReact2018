import React, { Component } from 'react'
import Article from './article'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles, toggleOpenItem, openItemId } = this.props
    return articles.map((item) => <li key={item.id}>
        <Article article={item} isOpen={openItemId === item.id} toggleOpen={toggleOpenItem} />
      </li>)
  }
}
export default accordeon(ArticleList)
