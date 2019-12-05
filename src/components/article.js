import React, { PureComponent } from 'react'
class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3 ref={this.getTitleRef}>{article.title}</h3>
        <button onClick={() => this.props.toggleOpen(article.id)}>
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && <section>{article.text}</section>}
      </div>
    )
  }
  getTitleRef = (titleRef) => console.log(titleRef)
}
export default Article
