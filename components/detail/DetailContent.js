import React from 'react'
import '../../styles/components/Content.css'
import { Row, Col } from 'antd'
// child-components
import LeftContent from './LeftContent'
import RightContent from './RightContent'
// marked + highlight
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/kimbie.dark.css'
// nav-title: 
import Tocify from '../tocify.tsx'

export default function DetailContent(props) {
  // real blog.md
  let { detailContent } = props
  const { title, add_time, view_count, article_content } = detailContent
  // Tocify
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  renderer.heading = (text, level, raw) => {
    const anchor = tocify.add(text, level);
    return `
      <a id="${anchor}" href="#${anchor}" class="anchor-fix">
        <h${level}>
          ${text}
        </h${level}>
      </a>
      \n`
  }
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
  let html = marked(article_content)

  return (
    <div className="content">
      <Row>
        <Col className="left-content" xs={24} sm={24} md={16} lg={14} >
          <LeftContent
            title={title}
            add_time={add_time}
            view_count={view_count}
            html={html}
          />
        </Col>
        <Col className="right-content" xs={0} sm={0} md={5} lg={7} >
          <RightContent tocify={tocify} />
        </Col>
      </Row>
    </div>
  )
}

// mock blog.md
  // let markdown = '# P01:课程介绍和环境搭建\n' +
  //   '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  //   '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  //   '**这是加粗的文字**\n\n' +
  //   '*这是倾斜的文字*`\n\n' +
  //   '***这是斜体加粗的文字***\n\n' +
  //   '~~这是加删除线的文字~~ \n\n' +
  //   '\`console.log(111)\` \n\n' +
  //   '# p02:来个Hello World \n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n' +
  //   '***\n\n\n' +
  //   '# p03:TypeScript\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p04:Webpack\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '#5 p05:Node.js\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p06:React\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p07:Vue\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '``` var a=11; ```'

  // const renderer = new marked.Renderer()
  // marked.setOptions({
  //   // ! renderer: 必填, 可以通过自定义设置显示的格式
  //   renderer,
  //   // ? gfm: 类似于github排版样式的markdown, 可选值: true / false
  //   gfm: true,
  //   // ? pedantic: 只解析符合Markdown定义的，不修正Markdown的错误。可选值: true / false
  //   pedantic: false,
  //   // ? sanitize: 忽略html标签。 作为程序猿博客, 这里选择false
  //   sanitize: false,
  //   // ? tables: 支持github排版样式的表格, 要生效的话上面的gfm要选true
  //   tables: true,
  //   // ? breaks: 支持github排版样式的换行符, 要生效的话上面的gfm要选true
  //   breaks: false,
  //   // ? smartLists: 优化列表输出的表格, 这里选择true
  //   smartLists: true,
  //   // ? smartypants: 优化列表输出的样式, 这里手动配置了hljs选择false
  //   smartypants: false,
  //   // ? highlight: 高亮显示的规则。 这里使用hightlight手动配置, 即选false
  //   highlight: function (code) {
  //     return hljs.highlightAuto(code).value;
  //   }
  //   // highlight: code => hljs.highlightAuto(code).value
  // })
  // let html = marked(article_content)


