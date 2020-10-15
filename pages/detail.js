import React from 'react'
import BlogHead from '../components/BlogHead'
// child-components
import Header from '../components/Header'
import DetailContent from '../components/detail/DetailContent'
import Footer from '../components/Footer'
// getAxios
import { getAxios } from '../request'

export default function Detail(props) {
  let detailContent = props.data[0]
  return (
    <div className="detail">
      <BlogHead />
      <Header />
      <DetailContent detailContent={detailContent} />
      <Footer />
    </div>
  )
}

Detail.getInitialProps = async (context) => {
  let id = context.query.id
  // console.log(id)
  let props = getAxios('/blog/selectArticleById/' + id)
  return await props
}

