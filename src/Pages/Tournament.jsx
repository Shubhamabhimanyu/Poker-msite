import React from 'react'

export default function Tournament() {
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
                  Daily Tournaments
                </h2>
              </div>
            </div>
            <div class="white-bg">
              <ul class="nav nav-tabs panel-tab-bottom pb-15" role="tablist" style={{position: "sticky", maxWidth: "580px", margin: "0 auto"}}>
                <li role="presentation">
                  <button class="line-hight active" data-bs-toggle="tab" data-bs-target="#tournaments" type="button" role="tab" aria-controls="tournaments" id="tournaments-tab" aria-selected="true">
                    <img src="https://mobile.alphabetabox.com/static-web/images/promotions/icon-tournaments.png" alt=' ' />
                    TOURNAMENTS
                  </button>
                </li>

                <li role="presentation">
                  <button class="line-hight" data-bs-toggle="tab" data-bs-target="#fet" type="button" role="tab" id="fet-tab" aria-controls="fet" aria-selected="false">
                    <img src="https://mobile.alphabetabox.com/static-web/images/promotions/icon-freeroll-scedule.png" alt=' ' />
                    FREE ENTRY TOURNAMENTS
                  </button>
                </li>
              </ul>
              {/* <!-- TOURNAMENT TAB STARTS HERE --> */}
              <div class="tab-content scrollable-content" id="maincontentTab">
                <div class="tab-pane fade active show" id="tournaments" role="tabpanel" aria-labelledby="tournaments-tab">
                  <div class="m-15">
                    <ul class="nav nav-tabs panel-tab-between bg-trans" role="tablist">
                      <li role="presentation">
                        <button class="active" data-bs-toggle="tab" data-bs-target="#low" type="button" role="tab" aria-controls="low" id="low-tab">
                          Low (&lt; ₹100)
                        </button>
                      </li>
                      <li role="presentation">
                        <button data-bs-toggle="tab" data-bs-target="#mid" type="button" role="tab" aria-controls="mid" id="mid-tab">
                          Mid (₹100-500)
                        </button>
                      </li>
                      <li role="presentation">
                        <button data-bs-toggle="tab" data-bs-target="#high" type="button" role="tab" id="high-tab" aria-controls="high">
                          High (&gt; ₹500)
                        </button>
                      </li>
                    </ul>
                    <div class="flex-end pt-10">
                      <label class="timingsLabel">
                        <div class="expand-link">
                          <svg class="icon icon-contract" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Icon_ionic-ios-sunny" data-name="Icon ionic-ios-sunny" transform="translate(-3.375 -3.375)">
                              <g id="Group_5384" data-name="Group 5384" transform="translate(3.375 3.375)">
                                <path id="Path_8699" data-name="Path 8699" d="M17.65,27.211a.733.733,0,0,0-.732.732v2.2a.732.732,0,1,0,1.465,0v-2.2A.733.733,0,0,0,17.65,27.211Z" transform="translate(-9.65 -14.873)" fill="#fba958"></path>
                                <path id="Path_8700" data-name="Path 8700" d="M17.65,3.375a.733.733,0,0,0-.732.732V6.3a.732.732,0,0,0,1.465,0v-2.2A.733.733,0,0,0,17.65,3.375Z" transform="translate(-9.65 -3.375)" fill="#fba958"></path>
                                <path id="Path_8701" data-name="Path 8701" d="M7.037,17.65a.733.733,0,0,0-.732-.732h-2.2a.732.732,0,0,0,0,1.465H6.3A.733.733,0,0,0,7.037,17.65Z" transform="translate(-3.375 -9.65)" fill="#fba958"></path>
                                <path id="Path_8702" data-name="Path 8702" d="M30.141,16.917h-2.2a.732.732,0,0,0,0,1.465h2.2a.732.732,0,1,0,0-1.465Z" transform="translate(-14.873 -9.65)" fill="#fba958"></path>
                                <path id="Path_8703" data-name="Path 8703" d="M9.628,24.195a.73.73,0,0,0-.518.214L7.555,25.964A.733.733,0,0,0,8.591,27l1.555-1.555a.732.732,0,0,0-.518-1.251Z" transform="translate(-4.706 -13.85)" fill="#fba958"></path>
                                <path id="Path_8704" data-name="Path 8704" d="M24.927,10.361a.73.73,0,0,0,.518-.214L27,8.591a.733.733,0,0,0-1.037-1.037L24.409,9.11a.732.732,0,0,0,.518,1.251Z" transform="translate(-13.85 -4.706)" fill="#fba958"></path>
                                <path id="Path_8705" data-name="Path 8705" d="M8.591,7.555A.733.733,0,0,0,7.555,8.591L9.11,10.147A.733.733,0,0,0,10.147,9.11Z" transform="translate(-4.706 -4.706)" fill="#fba958"></path>
                                <path id="Path_8706" data-name="Path 8706" d="M25.445,24.409a.733.733,0,0,0-1.037,1.037L25.964,27A.733.733,0,0,0,27,25.964Z" transform="translate(-13.85 -13.85)" fill="#fba958"></path>
                              </g>
                              <path id="Path_8707" data-name="Path 8707" d="M15.7,11.25A4.449,4.449,0,1,0,20.147,15.7,4.456,4.456,0,0,0,15.7,11.25Z" transform="translate(-4.324 -4.324)" fill="#fba958"></path>
                            </g>
                          </svg>
                          <svg class="icon icon-expand" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Icon_ionic-ios-sunny" data-name="Icon ionic-ios-sunny" transform="translate(-3.375 -3.375)">
                              <g id="Group_5384" data-name="Group 5384" transform="translate(3.375 3.375)">
                                <path id="Path_8699" data-name="Path 8699" d="M17.65,27.211a.733.733,0,0,0-.732.732v2.2a.732.732,0,1,0,1.465,0v-2.2A.733.733,0,0,0,17.65,27.211Z" transform="translate(-9.65 -14.873)" fill="#797979"></path>
                                <path id="Path_8700" data-name="Path 8700" d="M17.65,3.375a.733.733,0,0,0-.732.732V6.3a.732.732,0,0,0,1.465,0v-2.2A.733.733,0,0,0,17.65,3.375Z" transform="translate(-9.65 -3.375)" fill="#797979"></path>
                                <path id="Path_8701" data-name="Path 8701" d="M7.037,17.65a.733.733,0,0,0-.732-.732h-2.2a.732.732,0,0,0,0,1.465H6.3A.733.733,0,0,0,7.037,17.65Z" transform="translate(-3.375 -9.65)" fill="#797979"></path>
                                <path id="Path_8702" data-name="Path 8702" d="M30.141,16.917h-2.2a.732.732,0,0,0,0,1.465h2.2a.732.732,0,1,0,0-1.465Z" transform="translate(-14.873 -9.65)" fill="#797979"></path>
                                <path id="Path_8703" data-name="Path 8703" d="M9.628,24.195a.73.73,0,0,0-.518.214L7.555,25.964A.733.733,0,0,0,8.591,27l1.555-1.555a.732.732,0,0,0-.518-1.251Z" transform="translate(-4.706 -13.85)" fill="#797979"></path>
                                <path id="Path_8704" data-name="Path 8704" d="M24.927,10.361a.73.73,0,0,0,.518-.214L27,8.591a.733.733,0,0,0-1.037-1.037L24.409,9.11a.732.732,0,0,0,.518,1.251Z" transform="translate(-13.85 -4.706)" fill="#797979"></path>
                                <path id="Path_8705" data-name="Path 8705" d="M8.591,7.555A.733.733,0,0,0,7.555,8.591L9.11,10.147A.733.733,0,0,0,10.147,9.11Z" transform="translate(-4.706 -4.706)" fill="#797979"></path>
                                <path id="Path_8706" data-name="Path 8706" d="M25.445,24.409a.733.733,0,0,0-1.037,1.037L25.964,27A.733.733,0,0,0,27,25.964Z" transform="translate(-13.85 -13.85)" fill="#797979"></path>
                              </g>
                              <path id="Path_8707" data-name="Path 8707" d="M15.7,11.25A4.449,4.449,0,1,0,20.147,15.7,4.456,4.456,0,0,0,15.7,11.25Z" transform="translate(-4.324 -4.324)" fill="#797979"></path>
                            </g>
                          </svg>
                          <input type="radio" name="dayTimings" value="morning" style={{display:"contents"}}/>
                          <span class="f-16 morningclick"> Morning</span>
                        </div>
                      </label>
                      <label class="timingsLabel">
                        <div class="expand-link">
                          <svg class="icon icon-contract" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path id="Icon_ionic-md-sunny" data-name="Icon ionic-md-sunny" d="M11.011,2.25H9.486V4.536h1.525V2.25Zm4.611,1.561L14.25,5.182,15.318,6.25l1.371-1.371L15.621,3.811Zm-10.743,0L3.811,4.879,5.182,6.25,6.25,5.182,4.879,3.811ZM10.25,5.679a4.571,4.571,0,1,0,4.571,4.571A4.585,4.585,0,0,0,10.25,5.679Zm8,3.811H15.964v1.525H18.25V9.489Zm-13.714,0H2.25v1.525H4.536V9.489ZM15.318,14.25,14.25,15.318l1.371,1.371,1.068-1.068L15.318,14.25Zm-10.136,0L3.811,15.621l1.068,1.068L6.25,15.318,5.182,14.25Zm5.829,1.714H9.486V18.25h1.525V15.964Z" transform="translate(-2.25 -2.25)" fill="#fac638"></path>
                          </svg>
                          <svg class="icon icon-expand" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path id="Icon_ionic-md-sunny" data-name="Icon ionic-md-sunny" d="M11.011,2.25H9.486V4.536h1.525V2.25Zm4.611,1.561L14.25,5.182,15.318,6.25l1.371-1.371L15.621,3.811Zm-10.743,0L3.811,4.879,5.182,6.25,6.25,5.182,4.879,3.811ZM10.25,5.679a4.571,4.571,0,1,0,4.571,4.571A4.585,4.585,0,0,0,10.25,5.679Zm8,3.811H15.964v1.525H18.25V9.489Zm-13.714,0H2.25v1.525H4.536V9.489ZM15.318,14.25,14.25,15.318l1.371,1.371,1.068-1.068L15.318,14.25Zm-10.136,0L3.811,15.621l1.068,1.068L6.25,15.318,5.182,14.25Zm5.829,1.714H9.486V18.25h1.525V15.964Z" transform="translate(-2.25 -2.25)" fill="#848484"></path>
                          </svg>
                          <input type="radio" name="dayTimings" value="noon" style={{display:"contents"}}/>
                          <span class="f-16"> Noon</span>
                        </div>
                      </label>
                      <label class="timingsLabel">
                        <div class="expand-link">
                          <svg class="icon icon-contract" xmlns="http://www.w3.org/2000/svg" width="14.299" height="16" viewBox="0 0 14.299 16">
                            <path id="Icon_awesome-moon" data-name="Icon awesome-moon" d="M9.913,16a7.985,7.985,0,0,0,6.214-2.962.375.375,0,0,0-.361-.6A6.267,6.267,0,0,1,11.492.828a.375.375,0,0,0-.117-.695A8,8,0,1,0,9.913,16Z" transform="translate(-1.913)" fill="#090b26"></path>
                          </svg>
                          <svg class="icon icon-expand" xmlns="http://www.w3.org/2000/svg" width="14.299" height="16" viewBox="0 0 14.299 16">
                            <path id="Icon_awesome-moon" data-name="Icon awesome-moon" d="M9.913,16a7.985,7.985,0,0,0,6.214-2.962.375.375,0,0,0-.361-.6A6.267,6.267,0,0,1,11.492.828a.375.375,0,0,0-.117-.695A8,8,0,1,0,9.913,16Z" transform="translate(-1.913)" fill="#848484"></path>
                          </svg>

                          <input type="radio" name="dayTimings" value="night" style={{display:"contents"}}/>
                          <span class="f-16"> Night</span>
                        </div>
                      </label>
                    </div>
                    <div class="tab-content" style={{paddingBottom: "70px"}} id="maincontentTab">
                      <div class="tab-pane fade show active" id="low" role="tabpanel" aria-labelledby="low-tab">
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>4-Max Hyper 1K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>10+1</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 8:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Mini DST 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 9:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>DST 5K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>50+5</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 10:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Hyper 1500 GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>20+2</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1.5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 10:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 11:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Mini DST 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 11:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>5-Max Turbo 3K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>3K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 1:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Mini DST 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 2:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>6-Max DST 4K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>100+10</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>4K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 3:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>DST 5K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>50+5</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 5:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Evening DST 3K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>3K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 7:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Daily 50K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>100+10</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>50K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 8:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 5K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>100+10</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 9:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>20+2</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 10:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Hyper Turbo 3K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>3K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 11:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>6-Max DST 5K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>100+10</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 1:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Hyper 2K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>30+3</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 1:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night" style={{marginBottom: "10vh"}}>
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>After Dark Hyper 1500 GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>20+2</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1.5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 3:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade pb-30" id="mid" role="tabpanel" aria-labelledby="mid-tab">
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 10K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>200+20</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 12:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>6-Max DST 15K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>250+25</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>15K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 12:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 20K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>250+25</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 12:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>PLO Turbo 20K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>250+25</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 3:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>40K GTD Turbo MegaStack (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>500+50</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>40K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 4:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>DST 12.5K GTD (RE) PKO</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>200+100+30</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>12.5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 4:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Daily Kicker 20K GTD (5RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>300+30</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sat | 5:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Hyper 10K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>200+20</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 6:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 10K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>200+20</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 7:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 20K GTD (2RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>500+50</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 11:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>PLO Daily 40K GTD (5RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>500+50</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>40K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 11:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 20K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>300+30</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 12:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>After Dark DST 12K GTD (5RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>250+25</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>12K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 2:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>After Dark Turbo 5K GTD (5RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>150+15</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 2:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="dayTimingFilter morning" style={{display: "none"}}>
                          <p>
                            Oops, there are no tournaments running for the
                            selected range. Please check other tabs!
                          </p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="high" role="tabpanel" aria-labelledby="high-tab">
                        <div class="normal-box dayTimingFilter morning">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>DST 60K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>800+80</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>60K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sat | 9:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>6-Max Holdem BOOST DST (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1000+100</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1.5L</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sat | 9:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>PLO Boost Monster 1 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1000+100</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1L</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 9:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>6-Max DST 50K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>600+60</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>50K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 10:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>Turbo 1.5 LAC GTD (5RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1500+150</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1.5L</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 12:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>5-Max Hyper 50K GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1000+100</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>50K</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon-Sun | 1:30 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The BigShow 10 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>3000+300</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10L</span>
                                </div>
                                <div>
                                  <span class="font-12">Mon | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The Endeavour 12 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>3500+350</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>12L</span>
                                </div>
                                <div>
                                  <span class="font-12">Tue | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The Pride 10 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>3500+350</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10L</span>
                                </div>
                                <div>
                                  <span class="font-12">Wed | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The Summit 15 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>3500+350</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>15L</span>
                                </div>
                                <div>
                                  <span class="font-12">Thu | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The Weekly High Roller 12 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>10000+1000</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>12L</span>
                                </div>
                                <div>
                                  <span class="font-12">Fri | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>The Blockbuster 10 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>2500+250</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>10L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sat | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#1 Kickoff 1 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>5000+500</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>1L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 1:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#2 Afternoon 2 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1000+100</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 3:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter noon">
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#3 (6-Max) Monsterstack 5 LAC GTD</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>2500+250</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 5:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="golden-box dayTimingFilter night">
                          <div class="feature-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/featured.png" alt=' ' />
                          </div>
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#4 Superstack 20 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>5000+500</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>20L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 7:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night">
                          <div class="flex-box-global py-20 pb-8">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#5 Megastack 5 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>2500+250</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>5L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 8:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box dayTimingFilter night" style={{marginBottom: "10vh"}}>
                          <div class="flex-box-global">
                            <div class="f-rt" style={{width:"100%",paddingLeft:"8px"}}>
                              <p>BSS#6 After Party 2 LAC GTD (RE)</p>
                              <div class="flex-align-center flex-end pt-10">
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/cash.png" alt=' ' width="5" />
                                    <strong>Buy-in: </strong>1000+100</span>
                                </div>
                                <div>
                                  <span class="font-12"><img src="https://mobile.alphabetabox.com/static-web/images/promotions/trophy_icon.png" alt=' ' width="5" />
                                    <strong>Prize: </strong>2L</span>
                                </div>
                                <div>
                                  <span class="font-12">Sun | 9:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- TOURNAMENT TAB ENDS HERE --> */}

                {/* <!-- FREE ENTRY TAB STARTS HERE --> */}
                <div class="tab-pane fade pt-minus" id="fet" role="tabpanel" aria-labelledby="fet-tab">
                  <div class="m-15 pt-10">
                  
                    <div class="tab-content" id="maincontentTab" style={{paddingBottom: "100px"}}>
                      <div>
                      <div class="normal-box">
                        <div class="flex-box-global">
                          <div class="award-img">
                            <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                          </div>
                          <div class="f-rt"style={{width:"100%"}}>
                            <div class="flex-end flex-align-center">
                              <div>
                                <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                              </div>
                              <div class="w-52 text-center">
                                <span>Daily</span><br/>
                                <span class="grey-bg border-0"> 08:00 AM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0"> 09:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">10:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 Wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    11:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    12:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    12:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    12:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 3000 PrizePool <span class="prize-pool">RCB 3000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    12:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    01:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    01:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    01:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each)  <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    01:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free- Entry (Top 100 wins 50 each) <span class="prize-pool">RCB 5000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    02:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    02:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 wins 40 Each) <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    02:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    02:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    03:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    03:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 wins 40 Each) <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    03:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    03:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 3000 PrizePool <span class="prize-pool">RCB 3000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    04:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    04:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    04:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    04:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    05:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    05:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    05:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    05:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 5000 PrizePool <span class="prize-pool">RCB 5000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    06:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    06:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    06:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    06:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 3000 PrizePool <span class="prize-pool">RCB 3000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    7:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    07:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    07:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    07:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    08:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    08:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free- Entry (Top 100 wins 50 each) <span class="prize-pool">RCB 5000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    08:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    08:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 120 wins 25 each) <span class="prize-pool">RCB 3000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    09:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    09:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    09:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    10:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    10:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    10:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    10:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 3000 PrizePool <span class="prize-pool">RCB 3000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    11:00 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 40 wins 25 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                  11:15 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                  11:30 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    11:45 PM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    12:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry 2000 PrizePool <span class="prize-pool">RCB 2000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    01:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' ' />
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 20 Wins 25 Each) <span class="prize-pool">RCB 500</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    02:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="normal-box">
                          <div class="flex-box-global">
                            <div class="award-img">
                              <img src="https://mobile.alphabetabox.com/static-web/images/apt-series/reward.png" alt=' '/>
                            </div>
                            <div class="f-rt"style={{width:"100%"}}>
                              <div class="flex-end flex-align-center">
                                <div>
                                  <p class="pb-5">Free-Entry (Top 50 Wins 20 Each) <span class="prize-pool">RCB 1000</span></p>
                                </div>
                                <div class="w-52 text-center">
                                  <span>Daily</span><br/>
                                  <span class="grey-bg border-0">
                                    03:00 AM</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        
                        
                      
                      </div>
              
                    </div>
                  </div>
                </div>
                {/* <!-- FREE ENTRY TAB ENDS HERE --> */}
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
              <a class="active line-hight" href="tournament-schedule.html">
                <img src="https://mobile.alphabetabox.com/static-web/images/barimages/daily-selected.svg" alt=''/>
                Tournaments</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}
