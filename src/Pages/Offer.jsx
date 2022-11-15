import React from 'react'

export default function Offer() {
  return (
    <div>
        <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="stickyTopBar">
              <div class="main-blue-box">
                <div onclick="exitPage()" class="back-buttonsvg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#FFFFFF"></path>
                  </svg>
                </div>
                <h2 class="white-color text-center flexauto blue-bar-title">
                  Offers
                </h2>
              </div>
            </div>
            <div class="p-0">
              <div class="tab-content scrollable-content mb-space" id="maincontentTab">
                <div class="m-15">
                  <div class="blue-ticket">
                    <div class="flex-end bg-trans">
                      <div>
                        <h1>DAILY50K</h1>
                      </div>
                      <div class="text-center">
                        <p>Min Deposit:<strong>₹500</strong></p>
                      </div>
                    </div>
                    <h2>
                      Get a FREE ticket to daily 50K GTD at 8:30PM
                      <br/>
                      <span>Withdrawal Criteria:<strong> 150 coins</strong></span>
                    </h2>
                    <div class="border02"></div>
                    <p>
                      Expires:<br/>
                      <strong> NA </strong>
                    </p>
                  </div>

                
                </div>
              </div>
            </div>
          </div>
          <ul class="nav nav-tabs panel-tab-bottom pb-15" role="tablist" style={{ maxWidth: "580px",
              paddingBottom: "env(safe-area-inset-bottom)"}}
             
            >
            <li role="presentation">
              <a class="line-hight" href="promotions.html">
                <img src="https://mobile.alphabetabox.com/static-web/images/barimages/specials-not-selected.svg" alt=''/>
                Special</a>
            </li>
          
            <li role="presentation">
              <a href="offers.html" class="active line-hight">
                <img src="https://mobile.alphabetabox.com/static-web/images/barimages/offers-selected.svg" alt=''/>
                Offers</a>
            </li>
            <li role="presentation">
              <a class="line-hight" href="tournament-schedule.html">
                <img src="https://mobile.alphabetabox.com/static-web/images/barimages/daily-not-selected.svg" alt=''/>
                Tournaments</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}
