import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollTop() {
  // useLocation() == 获取当前页面的 URL 信息。
  // pathname 路径名称
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    //! 传入一个依赖数组，可以控制副作用操作的触发时机
  }, [pathname])
}
