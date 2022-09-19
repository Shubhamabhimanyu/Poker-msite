import React from 'react';
import '../Components/Assests/Style.css'

export default function Footer() {
  return (
   <>
   <div class="container">

    <ul class="nav nav-tabs panel-tab-bottom px-20" role="tablist"style= {{maxWidth: "580px",margin: "0 auto", paddingBottom: "env(safe-area-inset-bottom)"}}>
              <li role="presentation">
                <button class="active line-hight" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" id="info-tab">
                  <img alt="" src="https://mobile.alphabetabox.com/static-web/images/barimages/info.svg"/>
                  Info</button>
              </li>
              <li role="presentation">
                <button class="line-hight" data-bs-toggle="tab" data-bs-target="#tournament" type="button" role="tab" id="tournament-tab" aria-controls="tournament">
                  <img alt="" src="https://mobile.alphabetabox.com/static-web/images/barimages/schedule.svg"/>
                  Tournaments</button>
              </li>
              <li role="presentation">
                <button class="line-hight" data-bs-toggle="tab" data-bs-target="#lb" type="button" role="tab" id="lb-tab" aria-controls="lb">
                  <img alt="" src="https://mobile.alphabetabox.com/static-web/images/barimages/leaderboard.svg"/>
                  Leaderboard</button>
              </li>
              {/* <li role="presentation">
                <button class="line-hight" data-bs-toggle="tab" data-bs-target="#offers" type="button" role="tab"
                  id="offers-tab" aria-controls="offers">
                  <img alt="" src="https://mobile.alphabetabox.com/static-web/images/barimages/offers-selected.svg" />
                  Offers</button>
              </li> --> */}
              <li role="presentation">
                <button class="line-hight" data-bs-toggle="tab" data-bs-target="#tnc" type="button" role="tab" id="tnc-tab" aria-controls="tnc">
                  <img alt="" src="https://mobile.alphabetabox.com/static-web/images/barimages/terms-and-conditions.svg"/>
                  TnC</button>
              </li>
            </ul>
   </div>
   </>
  )
}
