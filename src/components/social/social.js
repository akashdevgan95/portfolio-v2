import React from "react"

//images
import Github from "../../images/social/github.svg"
import Instagram from "../../images/social/instagram.svg"
import Linkedin from "../../images/social/linkedin.svg"
import Youtube from "../../images/social/youtube.svg"

const Social = () => {
  return (
    <div className="social-icons d-none d-md-block">
      <a href="https://www.instagram.com/akashdevgan95/">
        <img alt="Instagram" src={Instagram} />
      </a>
      <a href="https://www.youtube.com/channel/UCRNZrwuxh9QWzJ9PYfE0tXA">
        <img alt="Youtube" src={Youtube} />
      </a>
      <a href="https://github.com/akashdevgan95">
        <img alt="Github" src={Github} />
      </a>
    </div>
  )
}

export default Social
