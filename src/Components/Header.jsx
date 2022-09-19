import React from 'react';
import '../Components/Assests/Style.css';
export default function Header(props) {
  return (
    <>
    
     <div class="stickyTopBar" style={{backgroundColor: props.color}}>
                <div class="main-blue-box">
                  <div onclick="historyCheckOrExit();" class="back-buttonsvg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#FFFFFF"></path>
                    </svg>
                  </div>
                  
                  <h2 class="white-color text-center flexauto blue-bar-title">
                    {props.title}
                  </h2>
                </div>
              </div>
    </>
  )
}
