import React from 'react'
import BlogHead from '../components/BlogHead'
import { getAxios } from '../request'
// child-components
import Header from '../components/Header'
import IndexContent from '../components/index/IndexContent'
import Footer from '../components/Footer'

export default function Home(props) {
  const { data } = props.blogList
  const images = props.images.data.map(item => item.adv_image)
  return (
    <div className="index">
      <BlogHead />
      <Header />
      <IndexContent data={data} images={images} />
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const blogList = await getAxios('/blog/list')
  const images = await getAxios('/blog/images/advImages')
  const props = {
    blogList,
    images
  }
  return await props
}
