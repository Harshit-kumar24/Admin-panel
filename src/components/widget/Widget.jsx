import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';


function Widget({type}) {

  let data;

  //temporary data
  const amount = 364
  const diff = 20

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:(
          <PersonOutline className='icon'/>
        )
      };
      break;
      case "order":
        data={
          title:"ORDERS",
          isMoney:false,
          link:"View all orders",
          icon:(
            <ShoppingCartOutlined className='icon'/>
          )
        };
        break;
        case "earning":
          data={
            title:"EARNINGS",
            isMoney:true,
            link:"View net earnings",
            icon:(
              <MonetizationOnOutlined className='icon'/>
            )
          };
          break;
          case "balance":
            data={
              title:"BALANCE",
              isMoney:true,
              link:"See details",
              icon:(
                <AccountBalanceWalletOutlined className='icon'/>
              )
            };
            break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">
          {data.title}
        </span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon/>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
