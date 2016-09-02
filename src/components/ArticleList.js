import React from 'react'
import {Component} from 'react'
import Article from './Article'

//export default Article as React.Component
//export default Article as Component
//const Article = React.createClass({
//class Article extends Component
//function Article(props) && export default connect()(Article)

export default function ArticleList(props) {
  const articleItems = props.articles.map(articleObject => <li key = {articleObject.id}><Article article = {articleObject}/></li>)

  return (
    <ul>
      {articleItems}
    </ul>
  )
}