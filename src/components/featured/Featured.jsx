import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import React from './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={56} text = {"56%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$5644</p>
        <p className="desc">Previous transaction processing. Last payments may not be included 
        </p>
        <div className="summary">
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult negative">
          <KeyboardArrowDown fontSize='small'/>
            <div className="resultAmount">$23.5k</div>
          </div>
          </div>

          <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
          <KeyboardArrowUpOutlined fontSize='small'/>
            <div className="resultAmount">$34.2k</div>
          </div>
          </div>

          <div className="item">
          <div className="itemTitle">Month</div>
          <div className="itemResult negative">
          <KeyboardArrowDown fontSize='small'/>
            <div className="resultAmount">$45.7k</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
