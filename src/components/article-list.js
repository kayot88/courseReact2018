import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../components/article'
import accordeon from '../decorators/accordeon'
import { filteredArticles } from '../selectors'

export class ArticleList extends Component {
  render() {
    console.log('---', 'rendering articles')
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles, toggleOpenItem, openItemId, range } = this.props
    // console.log(openItemId)

    return articles.map((item) => (
      <li key={item.id} className="test__article-list--item">
        <Article
          article={item}
          isOpen={openItemId === item.id}
          toggleOpen={toggleOpenItem}
          openId={openItemId}
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

export default connect((state) => {
  return {
    articles: filteredArticles(state),
    range: state.range
  }
})(ArticleListWithAccordeon)
