import React from 'react'
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

function Single() {
  return (
    <div className='single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
            <div className="editButton">Edit</div>
              <div className="title">Information</div>
              <div className="item">
                <img src="https://images.pexels.com/photos/17815428/pexels-photo-17815428/free-photo-of-portrait-of-a-brown-border-collie-standing-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Andrew tate</h1>
                  <div className="detailItem">
                    <div className="itemKey">Email:</div>
                    <div className="itemValue">beaG@gmail.com</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Phone:</div>
                    <div className="itemValue">+12 345 345 3454</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Address:</div>
                    <div className="itemValue">7th street, willington, Romania</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Country:</div>
                    <div className="itemValue">Romania</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User spending (last 6 months)"/>
            </div>
          </div>
          <div className="bottom">
            <List/>
          </div>
          single
        </div>
    </div>
  )
}

export default Single
