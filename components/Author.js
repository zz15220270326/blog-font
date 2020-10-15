import React from 'react'
import { Avatar, Divider } from 'antd'
import '../styles/components/Author.css'
import { UserOutlined, GithubOutlined, QqCircleFilled, WechatOutlined } from '@ant-design/icons';

export default function Author() {
  return (
    <div className="author-content">
      <div className="author-avatar">
        <Avatar size={100} icon={<UserOutlined />} />
      </div>
      <div className="author-introduction">
        该博主很懒, 什么简介都没有。。。。
        <Divider dashed="true">社交账号</Divider>
        <Avatar size={35} icon={<GithubOutlined style={{ borderColor: '#888' }} />} className="account" />
        <Avatar size={35} icon={<QqCircleFilled />} className="account" />
        <Avatar size={35} icon={<WechatOutlined twoToneColor="#52c41a" />} className="account" />
      </div>
    </div>
  )
}
