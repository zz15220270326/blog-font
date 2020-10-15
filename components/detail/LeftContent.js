import React from 'react'
import '../../styles/components/detail/DetailLeftContent.css'
import { Breadcrumb } from 'antd'
import { CalendarOutlined, VideoCameraOutlined, FireOutlined } from '@ant-design/icons'
// marked + highlight.js
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/kimbie.dark.css'

export default function LeftContent(props) {
  const { title, add_time, view_count, html } = props
  return (
    <div className="detail-left-context">
      <div className="bread-div">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/list">文章列表</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="bread-now">
            {title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="detail-article">
        <div className="detail-title">
          {title}
        </div>
        <div className="detail-center">
          <span>
            <CalendarOutlined />
            今日日期: {add_time}
          </span>
          <span>
            <VideoCameraOutlined />
            内置博客视频
          </span>
          <span>
            <FireOutlined />
            火热程度: {view_count}
          </span>
        </div>
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  )
}
