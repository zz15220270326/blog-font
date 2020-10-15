import React from 'react'
import '../../styles/components/index/LeftContent.css'
// antd-plugs
import { List } from 'antd'
import { CalendarOutlined, VideoCameraOutlined, FireOutlined, } from '@ant-design/icons'
// Link
import Link from 'next/link'
// marked + highlight
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// : {item.id}
export default function LeftContent(props) {
  let { data } = props
  // marked-config
  let renderer = new marked.Renderer()
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
    <div className="index-left-context">
      <List
        header={<div>显示最近更新的博客日志: </div>}
        itemLayout="vertical"
        dataSource={data}
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
                简介: {item.introduce}
              </span>
              <span>
                <VideoCameraOutlined />
                内置博客视频
              </span>
              <span>
                <FireOutlined />
                观看人数: {item.view_count}
              </span>
            </div>
            <div className="index-left-context" dangerouslySetInnerHTML={{ __html: marked(item.article_content) }}>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}
