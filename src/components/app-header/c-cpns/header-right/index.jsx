import React, { memo } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      {/* 登录--注册 */}
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>
      {/* 图标--同理 */}
      <div className='profile'>
        <IconProfileMenu/>
        <IconProfileAvatar/>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight