import React from 'react'
// child-components
import Menu from '../Menu'
import Swiper from '../Swiper'
import MiniCalendar from '../MiniCalendar'
// antd固钉
import { Affix, Tag } from 'antd'

export default function RightContent(props) {
  const { tocify } = props
  const [images] = React.useState([
    'https://i.loli.net/2020/10/09/ISpzPvlMOYjhHwu.jpg',
    'https://i.loli.net/2020/10/09/oJPRhwUs3S9FN5x.jpg',
    'https://i.loli.net/2020/10/09/jnEmTlrGoJ5PVvF.jpg',
    'https://i.loli.net/2020/10/09/lks3re4whWb1zRY.jpg'
  ])
  return (
    <div className="detail-right-context">
      <MiniCalendar />
      <Swiper images={images} />
      <Tag closable color="pink">我是广告</Tag>
      <Affix offsetTop={5}>
        <Menu tocify={tocify} />
      </Affix>
    </div>
  )
}
