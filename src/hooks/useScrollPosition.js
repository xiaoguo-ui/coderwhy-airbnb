import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  // 滚动距离Y
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    // 移除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}
