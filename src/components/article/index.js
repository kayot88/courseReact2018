import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import CommentsList from '../comments-list'
import './style.css'
class Article extends PureComponent {
  state = {
    commentOpen: false,
    hasError: false,
    inProp: false
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
  }
  render() {
    const { inProp } = this.state
    const { article, isOpen } = this.props
    return (
      <div>
        <h3 ref={this.getTitleRef}>{article.title}</h3>
        <button
          className="test__article--btn"
          onClick={() => {
            this.state.inProp
              ? this.setState({
                  inProp: false
                })
              : this.setState({ inProp: true })
            this.props.toggleOpen(article.id)
          }}
        >
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && (
          <div>
            <CSSTransition in={inProp} timeout={200} classNames="article">
              <section>{article.text}</section>
            </CSSTransition>

            <button onClick={this.handlerClick}>Comments</button>
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
