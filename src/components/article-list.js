import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/article'
import accordeon from '../decorators/accordeon'

export class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles, toggleOpenItem, openItemId, range } = this.props
    const { from, to } = range
    const newArticles = articles.filter((item) => {
      const parsed = Date.parse(item.date)
      return parsed <= to && parsed >= from
    })
    console.log(newArticles)

    return newArticles.map((item) => (
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

export default connect((state) => ({
  articles: state.articles,
  range: state.range
}))(ArticleListWithAccordeon)
