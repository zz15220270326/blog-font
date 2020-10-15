import React, { useState, useEffect } from 'react'
import Head from 'next/head'
// child-components
import Header from '../components/Header'
import ListContent from '../components/list/ListContent'
import Footer from '../components/Footer'
// getAxios
import { getAxios } from '../request'

export default function List(props) {
  let { image, article } = props
  const images = image.data.map(item => item.adv_image)
  // const articleList = article.data
  const [articleList, setArticleList] = useState(article.data)
  useEffect(() => {
    setArticleList(article.data)
  })
  return (
    <div className="index">
      <Header />
      <ListContent images={images} articleList={articleList} />
      <Footer />
    </div>
  )
}

List.getInitialProps = async (context) => {
  let id = context.query.id
  const article = await getAxios('/blog/getListByList/' + id)
  const image = await getAxios('/blog/images/advImages')
  const props = {
    article,
    image
  }
  return await props
}
