import React from 'react'
import '../../styles/components/Content.css'
import { Row, Col } from 'antd'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function IndexContent(props) {
  let { data, images } = props
  return (
    <div className="content">
      <Row>
        <Col className="left-content" xs={24} sm={24} md={16} lg={14} >
          <LeftContent data={data} />
        </Col>
        <Col className="right-content" xs={0} sm={0} md={5} lg={7} >
          <RightContent images={images} />
        </Col>
      </Row>
    </div>
  )
}
