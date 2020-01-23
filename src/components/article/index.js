import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import CommentsList from '../comments-list'
import AddItemForm from '../addItemForm'
import { deleteArticle } from '../../ac'
import './style.css'
class Article extends PureComponent {
  state = {
    commentOpen: false,
    hasError: false,
    inProp: false,
    show: false
  }
  componentDidCatch(err) {
    console.log('---', err)
    this.setState({ hasError: true })
  }
  handleDelete = () => {
    return this.props.deleteArticle(this.props.article.id)
  }

  handlerClick = () => {
    // console.log(this.props.article.id)
    if (this.state.commentOpen) {
      this.setState({ commentOpen: false })
    } else {
      this.setState({ commentOpen: true })
    }
  }

  handleAddcommentClick = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { inProp } = this.state
    const { article, isOpen, addComment, openId } = this.props
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
        <button onClick={this.handleDelete}>delete me</button>
        {isOpen && (
          <div>
            <CSSTransition in={inProp} timeout={200} classNames="article">
              <div>
                <section>{article.text}</section>
                <button onClick={this.handleAddcommentClick}>
                  Add comment
                </button>
              </div>
            </CSSTransition>
            {this.state.show && (
              <AddItemForm openId={openId} articleId={article.id} />
            )}
            <button onClick={this.handlerClick}>Comments</button>
            {this.state.commentOpen &&
              !this.state.hasError && (
                <div>
                  <CommentsList comments={article.comments} />
                </div>
              )}
          </div>
        )}
      </div>
    )
  }

  getTitleRef = (titleRef) => console.log(titleRef)
}
export default connect(
  null,
  { deleteArticle }
)(Article)
