import React from 'react'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

export default function Menu(props) {
  let { tocify } = props
  // console.log(tocify);
  return (
    <div className="article-content">
      <div className="menu-title">文章目录</div>
      <div className="tocify-list">
        {tocify && tocify.render()}
      </div>
    </div>
  )
}
