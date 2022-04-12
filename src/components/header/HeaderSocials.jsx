import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import { BsInstagram} from 'react-icons/bs'
import { BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/saugat-giri-66011513b/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/saugat-15" target="_blank">< BsGithub/></a>
          <a href="https://www.instagram.com/saugat_giri/" target="_blank"><BsInstagram /></a>
      </div>
  )
}

export default HeaderSocials