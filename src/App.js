import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { useScrollTop } from './hooks'
import routes from './router'

const App = memo((props) => {
  useScrollTop() // 回到顶部

  return (
    <div>
      {/* 头部 */}
      <AppHeader />
      {/* 页面主题 */}
      <div>{useRoutes(routes)}</div>
      {/* 底部 */}
      <AppFooter />
    </div>
  )
})

export default App
