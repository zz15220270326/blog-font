import React, { useState, useEffect } from 'react'
import '../../styles/components/list/LeftContent.css'
import Link from 'next/link'
// antd
import { Breadcrumb } from 'antd'
import { List } from 'antd'
import { CalendarOutlined, VideoCameraOutlined, FireOutlined } from '@ant-design/icons'
// marked + highlight
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default function LeftContent(props) {
  const { articleList } = props
  // const [mylist, setMylist] = useState([])
  // marked + highlight.js plugins
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: code => hljs.highlightAuto(code).value
  })
  return (
    <div className="list-left-context">
      <div className="bread-nav">
        <Breadcrumb>
          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
          <Breadcrumb.Item>当前页面-文章列表</Breadcrumb.Item>
        </Breadcrumb>
        <List
          header={<div>显示最近更新的博客日志: </div>}
          itemLayout="vertical"
          dataSource={articleList}
          renderItem={item => (
            <List.Item>
              <div className="index-left-title">
                <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                  <a>{item.title}</a>
                </Link>
              </div>
              <div className="index-left-icons">
                <span>
                  <CalendarOutlined />
                今日日期: {item.add_time}
                </span>
                <span>
                  <VideoCameraOutlined />
                内置博客视频
              </span>
                <span>
                  <FireOutlined />
                火热程度: {item.view_count}
                </span>
              </div>
              <div className="index-left-context" dangerouslySetInnerHTML={{ __html: marked(item.article_content) }}></div>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
