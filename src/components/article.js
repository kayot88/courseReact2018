import React from 'react'

const Article = ({ article, isOpen, toggleOpen }) => {
  return <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {console.log(isOpen)}
      {isOpen && <section>{article.text}</section>}
    </div>
}
export default Article
