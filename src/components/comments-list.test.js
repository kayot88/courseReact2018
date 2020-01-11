import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentsList from './comments-list'
// import UserComment from './comment'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

beforeAll(() => {
  const div = document.createElement('div')
  window.domNode = div
  document.body.appendChild(div)
})

describe('Render self component', () => {
  articles.map((article) => {
    it('should render CommentsList', () => {
      const container = shallow(<CommentsList comments={article.comments} />)
      expect(container.find('.test__comments-list--item').length).toEqual(
        article.comments.length
      )
    })
  })
})
