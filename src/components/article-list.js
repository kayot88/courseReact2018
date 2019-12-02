import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    articleId: null
  }
  render() {
    console.log(this.state);
    return <ul>{this.body}</ul>
  }

  toggleOpenArticle = (itemId) => () => {
    return this.setState({ articleId: itemId })
  }
  get body() {
    return this.props.articles.map((item) => (
      <li key={item.id}>
        <Article
          article={item}
          isOpen={this.state.articleId === item.id}
          toggleOpen={this.toggleOpenArticle(item.id)}
        />
      </li>
    ))
  }
}
export default ArticleList
