import React from 'react'
import { DiGithubAlt } from 'react-icons/di'
import { TbWorldCancel } from 'react-icons/tb'

const ButtonProject = ({ acess,text, icon }) => {

  return (
    <div className="button-icon">
    <div className="icon-project">
      {
        icon
      }
    </div>
    <div className="cube">
      <span className="side front">{acess}</span>
      <span className="side top"> {text}</span>
    </div>
  </div>
  )
}

export default ButtonProject