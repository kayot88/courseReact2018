import React, { PureComponent } from 'react'
import CommentsList from './comments-list'
class Article extends PureComponent {
  state = {
    commentOpen: false,
    hasError: false
  }
  componentDidCatch(err) {
    console.log('---', err)
    this.setState({ hasError: true })
  }

  handlerClick = () => {
    if (this.state.commentOpen) {
      this.setState({ commentOpen: false })
    } else {
      this.setState({ commentOpen: true })
    }
    console.log(this.state.commentOpen)
  }
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3 ref={this.getTitleRef}>{article.title}</h3>
        <button onClick={() => this.props.toggleOpen(article.id)}>
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && (
          <div>
            <section className="test__article-body">{article.text}</section>
            <button onClick={this.handlerClick} className="test__article-btn">
              Comments
            </button>
            {this.state.commentOpen &&
              !this.state.hasError && (
                <CommentsList comments={article.comments} />
              )}
          </div>
        )}
      </div>
    )
  }
  getTitleRef = (titleRef) => console.log(titleRef)
}
export default Article
