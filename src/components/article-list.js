import React, { Component } from 'react'
import Article from '../components/article'
import accordeon from '../decorators/accordeon'

export class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles, toggleOpenItem, openItemId } = this.props
    return articles.map((item) => (
      <li key={item.id} className="test__article-list--item">
        <Article
          article={item}
          isOpen={openItemId === item.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordeon = accordeon(ArticleList)

export default ArticleListWithAccordeon
