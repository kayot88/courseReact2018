import React, { PureComponent } from 'react'
import CommentsList from './comments-list'
class Article extends PureComponent {
  state = {
    commentOpen: false
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
            <section>{article.text}</section>
            <button onClick={this.handlerClick}>Comments</button>
            {this.state.commentOpen && <CommentsList comments={article.comments} /> }
          </div>
        )}
      </div>
    )
  }
  getTitleRef = (titleRef) => console.log(titleRef)
}
export default Article
