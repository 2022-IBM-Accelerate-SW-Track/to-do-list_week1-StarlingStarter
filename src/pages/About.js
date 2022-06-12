import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class= "split left">
        <div className ="centered">
         <img
         className= "profile_image" src= { profile_pic }  
         alt = "profile pic"
         ></img>
        </div>
      </div>

      <div className= "split right">
        <div className= "centered">
           <div className = "name_title">Myles Bennette</div>
            <div className= "brief_description"> 
            <p>Student at the University of North Texas<br></br>Proud Eagle Scout<br></br></p>
           
           
            <table>
              <tr>
              <td>
                Merit Badges
                <ul>
                  <li>Cooking</li>
                  <li>Camping</li>
                  <li>Coding</li>
                  <li>Swimming</li>
                </ul>
              </td>
              
              <td>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              </td>

              <td>
                Hobbies
                  <ul>
                    <li>test 0</li>
                    <li>test 1</li>
                    <li>test 2</li>
                    <li>test 3</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>   
    </div>  
    )
  }
}