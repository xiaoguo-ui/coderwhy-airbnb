import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeProvider } from "styled-components"
import classNames from 'classnames'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaPlaceholder } from './style'

const AppHeader = memo((props) => {
  const [isSearch, setIsSearch] = useState(false)
  const [isAlpha, setIsAlpha] = useState(false)

  /** redux中获取数据 */
  // useSelector 在函数式组件中访问和获取 Redux store 中的状态（state）
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  // 取值 ===== isFixed是否固定，isHome是否为首页
  const { isFixed, isHome } = headerConfig

  /** 其他hooks的逻辑 */
  // 滚动的距离！
  const { scrollY } = useScrollPosition()
  // 是首页，没有滚动，不是搜索
  if (isHome && scrollY === 0 && !isSearch) {
    setIsAlpha(true)
    setIsSearch(true)
  }
  // 是首页，滚动了，点击了搜索
  if (isHome && isAlpha && scrollY > 0 && isSearch) {
    setIsAlpha(false)
    setIsSearch(false)
  }

  const prevY = useRef()
  // 初始值
  useEffect(() => { prevY.current = 0 }, [])
  
  if (!isSearch) prevY.current = scrollY
  // 滚动距离>30,且在搜索区域，需要关闭搜索
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className='content'>
          <div className='top'>
            {/* 左边,logo */}
            <HeaderLeft/>
            {/* 中间内容 */}
            <HeaderCenter isSearch={isSearch} searchBarClick={searchBarClickHandle}/>
            {/* 右边详情 */}
            <HeaderRight/>
          </div>
          {/* 显示搜索，感觉没啥用，在搜索区域点击搜索，遮罩区域 */}
          <SearchAreaPlaceholder isSearch={isSearch}/>
        </div>
        { isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader