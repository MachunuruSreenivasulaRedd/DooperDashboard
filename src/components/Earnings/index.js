import {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {TiArrowLeftThick} from 'react-icons/ti'
import Header from '../Header'
import './index.css'
import Pagination from '../Pagination'
import { TiTickOutline } from "react-icons/ti";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

class Earnings extends Component {
    state={selectedSection:"History"}
   
    onClickSelectSection = section => {
        this.setState({selectedSection: section})
    }
    
    renderHistory = () => {
        return(
            <><div className='historyContainer'>
                <div className='historyItem'>
                    <div className='itemDetails'>
                        <span className='id'>#12345</span>
                        <span className='date'>14 Dec 2023</span>
                    </div>
                    <span className='price'>RS 500</span>
                </div>

                <div className='historyItem'>
                    <div className='itemDetails'>
                        <span className='id'>#12345</span>
                        <span className='date'>14 Dec 2023</span>
                    </div>
                    <span className='price'>RS 500</span>
                </div>
                <div className='historyItem'>
                    <div className='itemDetails'>
                        <span className='id'>#12345</span>
                        <span className='date'>14 Dec 2023</span>
                    </div>
                    <span className='price'>RS 500</span>
                </div>
                <div className='historyItem'>
                    <div className='itemDetails'>
                        <span className='id'>#12345</span>
                        <span className='date'>14 Dec 2023</span>
                    </div>
                    <span className='price'>RS 500</span>
                </div>
            </div></>
        )
    }

    renderWithdrawal = () => {
  return (
    <div className="content-container">
      <div className="content-content">
        <div className="content-fields">
          <div className="content-frame6">
            <div className="content-a">
              <span className="content-text SmallMedium">
                <span>transaction #1234</span>
              </span>
              <span className="content-text02 ExtraSmallRegular">
                <span>16, June 2023</span>
              </span>
            </div>
            <div className="content-tt">
              <span className="content-text04 ExtraSmallMedium">
                <span>RS 500</span>
              </span>
            </div>
          </div>
          <div className="content-frame4">
            <div className="content-a1">
              <span className="content-text06 SmallMedium">
                <span>transaction #1234</span>
              </span>
              <span className="content-text08 ExtraSmallRegular">
                <span>16, June 2023</span>
              </span>
            </div>
            <div className="content-tt01">
              <span className="content-text10 ExtraSmallMedium">
                <span>RS 500</span>
              </span>
            </div>
          </div>
          <div className="content-frame5">
            <div className="content-a2">
              <span className="content-text12 SmallMedium">
                <span>transaction #1234</span>
              </span>
              <span className="content-text14 ExtraSmallRegular">
                <span>16, June 2023</span>
              </span>
            </div>
            <div className="content-tt02">
              <span className="content-text16 ExtraSmallMedium">
                <span>RS 500</span>
              </span>
            </div>
          </div>
          <div className="content-frame7">
            <div className="content-a3">
              <span className="content-text18 SmallMedium">
                <span>transaction #1234</span>
              </span>
              <span className="content-text20 ExtraSmallRegular">
                <span>16, June 2023</span>
              </span>
            </div>
            <div className="content-tt03">
              <span className="content-text22 ExtraSmallMedium">
                <span>RS 500</span>
              </span>
            </div>
          </div>
          <div className="content-frame8">
            <div className="content-a4">
              <span className="content-text24 SmallMedium">
                <span>transaction #1234</span>
              </span>
              <span className="content-text26 ExtraSmallRegular">
                <span>16, June 2023</span>
              </span>
            </div>
            <div className="content-tt04">
              <span className="content-text28 ExtraSmallMedium">
                <span>RS 500</span>
              </span>
            </div>
          </div>
        </div>
        <div className="content-fields1">
          <span className="content-text37">
            <span>Withdrawal status</span>
          </span>
          <div className="content-frame61">
            <div className="content-frame1686560436">
              <div className="content-a5">
                <span className="content-text39 SmallMedium">
                  <span>Withdrawal #1234</span>
                </span>
                <span className="content-text41 SmallMedium">
                  <span>Rs. 3000</span>
                </span>
                <span className="content-text43 ExtraSmallRegular">
                  <span>16, June 2023</span>
                </span>
              </div>
              <div className="content-tt05">
                <span className="content-text45 ExtraSmallMedium">
                  <span>Pending</span>
                </span>
              </div>
            </div>
          </div>
          <div className="content-status">
            <div className="content-status1 content-status1">
              <div className="content-no">
              <TiTickOutline
                  className="content-check1"
                />
              </div>
              
              <div>
                <div className="content-txt">
                  <div className="content-tt06">
                    <span className="content-text47 MediumMedium">
                      <span>Payment Request Generated</span>
                    </span>
                    <span className="content-text49 SmallMedium">
                      <span>17, June 2023 | 08:00 AM</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <IoEllipsisVerticalOutline  className='timeline'/>
            <div className="content-status11">
              <div className="content-no1">
                <TiTickOutline
                  className="content-check1"
                />
              </div>
              <div className="content-status2">
                <div className="content-txt1">
                  <div className="content-tt07">
                    <span className="content-text51 MediumMedium">
                      <span>Payment Sent</span>
                    </span>
                    <span className="content-text53 SmallMedium">
                      <span>17, June 2023</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <IoEllipsisVerticalOutline className='timeline'/>
            <div className="content-status12">
              <div className="content-no2">
                <span className="content-text55 SmallSemiBold">
                  <span>03</span>
                </span>
              </div>
              <div className="content-status3">
                <div className="content-txt2">
                  <div className="content-tt08">
                    <span className="content-text57 MediumMedium">
                      <span>In process</span>
                    </span>
                    <span className="content-text59 SmallMedium">
                      <span>17, June 2023</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-status13">
              <div className="content-no3">
                <span className="content-text61 SmallSemiBold">
                  <span>04</span>
                </span>
              </div>
              <div className="content-status4">
                <div className="content-txt3">
                  <div className="content-tt09">
                    <span className="content-text63 MediumMedium">
                      <span>Payment Credited</span>
                    </span>
                    <span className="content-text65 SmallMedium">
                      <span>Remaining</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

    renderSections = () => {
        const {selectedSection} = this.state
        switch(selectedSection){
            case "History":
                return this.renderHistory();
            case "Withdrawal":
                return this.renderWithdrawal();
            default:
                return null;
            }
    }

    renderEarningsHeader = () => {
        const {selectedSection} = this.state
        return(
            <div className='Header'><div className='EditHighlight'>
                <span className='high'><NavLink to="/profile"><TiArrowLeftThick className='backIcon' /></NavLink>My Earnings
                </span>
            </div><div className="earnings-container">
                    <div className="earnings-earnings">
                        <div className="earnings-frame4">
                            <span className="earnings-text">
                                <span className='redHighlight'> 345</span>
                            </span>
                            <span className="earnings-text02 SmallMedium">
                                <span className='text'>Total Cases</span>
                            </span>
                        </div>
                        <div className="earnings-frame01">
                            <span className="earnings-text04">
                                <span className='redHighlight'>Rs. 5000</span>
                            </span>
                            <span className="earnings-text06 SmallMedium">
                                <span className='text'>Total Earnings</span>
                            </span>
                        </div>
                        <div className="earnings-frame2">
                            <span className="earnings-text08">
                                <span >Rs. 3000</span>
                            </span>
                            <span className="earnings-text10 SmallMedium">
                                <span className='text'>This Month Earnings</span>
                            </span>
                        </div>
                        <div className="earnings-frame3">
                            <span className="earnings-text12">
                                <span>Rs. 2000</span>
                            </span>
                            <span className="earnings-text14 SmallMedium">
                                <span className='text'>Total Redeemed</span>
                            </span>
                        </div>
                    </div>
                </div></div>
        )
    }
    render(){
        const {selectedSection} = this.state
        const history=selectedSection==="History"?"selected":"section"
        const withdrawal=selectedSection==="Withdrawal"?"selected":"section"

        return(
            <>
            <Header />
            <div className='earnings'>
         {this.renderEarningsHeader()}
         <div className='sections'>
                        <div className={history} onClick={()=>this.onClickSelectSection("History")}>
                            History
                        </div>
                        <div className={withdrawal} onClick={()=>this.onClickSelectSection("Withdrawal")}>
                            Withdrawal
                        </div>
                    </div>
                    {this.renderSections()}
                    <Pagination />
                    </div>
         </>
        )
    }
}

export default Earnings
