import React from 'react'
import Head from 'next/head'
// child-components
import Header from '../components/Header'
import Content from '../components/Content'

export default function Talk() {
  return (
    <div className="index">
      <Header />
      <Content />
    </div>
  )
}
