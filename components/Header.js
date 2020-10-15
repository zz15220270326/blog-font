import React, { useState, useEffect } from 'react'
// import Link, Router
import Link from 'next/link'
import Router from 'next/router'
// getAxios
import { getAxios } from '../request'
// styles
import '../styles/components/Header.css'
// antd
import { Row, Col, Menu } from 'antd'

export default function Header() {
  const [menuNav, setMenuNav] = useState([])
  useEffect(() => {
    const getType = async () => {
      let result = await getAxios('/blog/getTypeInfo')
      const list = result.data
      setMenuNav(list)
    }
    getType()
  }, [])
  const handleLinkClick = (event) => {
    // to-number
    let { key } = event
    if (key === '5') {
      Router.push('/')
    } else {
      Router.push('/list?id=' + event.key)
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={12} >
          <span className="author-logo">
            <Link href='/'>
              <a>个人博客</a>
            </Link>
          </span>
          <span className="author-text">学无止境! 好的开始是成功的一半。</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={12} className="header-menu">
          <Menu mode="horizontal">
            {menuNav.map(item => (
              <Menu.Item key={item.id} onClick={handleLinkClick}>
                {item.typeName}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}


