import React ,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { TiArrowLeftThick } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import './index.css'
import Header from '../Header'

class Profile extends Component {
  state={selectedSection:""}

  renderEdit = () => {
    this.setState({selectedSection: "BasicDetails"})
  }
  renderProfile = () => (
    <div className="maincontent-container">
      <div className="maincontent-maincontent">
        <div className="maincontent-heading">
          <span className="maincontent-text HeadingHeading04">
            <span className='profileHeading'>My Profile</span>
          </span>
        </div>
        <div className="maincontent-profile">
          <div className="maincontent-d">
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1695882685/Rectangle_619_t4obov.png" alt="Ellipse22278" className="maincontent-ellipse2" />
            <button className="maincontent-icon" type="button" onClick={()=>this.renderEdit()}>
            <MdOutlineModeEdit className='editIcon'/>
            </button>
            <div className="maincontent-d01">
              <div className="maincontent-t">
                <span className="maincontent-text02 SmallSemiBold">
                 Jaydip Sakhiya
                </span>
              </div>
              <span className="maincontent-text04 SmallMedium">
                <span>Balance : 2000INR</span>
              </span>
            </div>
            <div className="maincontent-ic">
              <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d02">
          <FaUserAlt />
            <span className="maincontent-text06 NormalMedium">
              <span>Edit Profile</span>
            </span>
            <div className="maincontent-ic1">
            <IoIosArrowDropright className="maincontent-arrow-line-down" onClick={()=>this.renderEdit()}/>
            </div>
          </div>
          <div className="maincontent-d03">
          <FaWallet />
            <span className="maincontent-text08 NormalMedium">
              <span>My Earnings</span>
            </span>
            <div className="maincontent-ic2">
            <NavLink to="/myearnings"><IoIosArrowDropright className="maincontent-arrow-line-down"/></NavLink>
            </div>
          </div>
          <div className="maincontent-d04">
          <FaPhoneAlt />
            <span className="maincontent-text10 NormalMedium">
              <span>Contact Us</span>
            </span>
            <div className="maincontent-ic3">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d05">
         <MdPrivacyTip/>
            <span className="maincontent-text12 NormalMedium">
              <span>Privacy Policy</span>
            </span>
            <div className="maincontent-ic4">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d06">
          <RiPagesFill />
            <span className="maincontent-text14 NormalMedium">
              <span>Terms &amp; Conditions</span>
            </span>
            <div className="maincontent-ic5">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d07">
          <IoMdInformationCircle/>
            <span className="maincontent-text16 NormalMedium">
              <span>About Us</span>
            </span>
            <div className="maincontent-ic6">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d08">
           <FaStar />
            <span className="maincontent-text18 NormalMedium">
              <span>Rate Us</span>
            </span>
            <div className="maincontent-ic7">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
          <div className="maincontent-d09">
          <RiLogoutCircleRFill />
            <span className="maincontent-text20 NormalMedium">
              <span>Logout</span>
            </span>
            <div className="maincontent-ic8">
            <IoIosArrowDropright className="maincontent-arrow-line-down"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  onClickSelectSection = section => {
    this.setState({selectedSection: section})
  }

  onBasicDetailsSubmit =() => {
    this.setState({selectedSection: "MyAssociation"})
  }

  onDocumentsSubmit =() =>{
    this.setState({selectedSection: "BankInfo"})
  }
  renderBasicDetails = () => {
   return(
    <form className='formContainer'>
      <div className='item'>
      <label htmlFor='name'>Full name</label>
        <input type="text" id="name" />
      </div>
      <div className='item'>
      <label htmlFor='number'>Mobile number</label>
        <input type="integer" id="number" />
      </div>
      <div className='item'>
      <label htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='fileUploader'/>
        <TbEdit className='editNameIcon'/>
        </span>
      </div>
      <div className='item'>
      <label htmlFor='PharName'>Pharmacy Name</label>
        <input type="text" id="PharName" />
      </div>
      <div className='item'>
      <label htmlFor='PharAddress'>Pharmacy Address</label>
        <input type="text" id="PharAddress" className='address'/>
        <input type="text" id="PharAddress" className='address'/>
        <input type="text" id="PharAddress" />
      </div>
      <button type="submit" className='submitBtn' onClick={()=>this.onBasicDetailsSubmit()}>Save Details</button>
      
    </form>
   )
  }

  renderMyAssociation = () => {
   return(
    <form className='formContainer'>
      <div className='item'>
      <label htmlFor='HosName'>Hospital Name</label>
        <input type="text" id="HosName" />
      </div>
      <div className='item'>
      <label htmlFor='HosAddress'>Hospital Address</label>
        <input type="text" id="HosAddress" className='address' />
        <input type="text" id="HosAddress" className='address'/>
        <input type="text" id="HosAddress" />
      </div>
      </form>
   )
  }

  renderBankInfo =() => {
   return(
    <form className='formContainer'>
    <div className='item'>
    <label htmlFor='BankNAme'>Bank Name</label>
      <input type="text" id="BankName" />
    </div>
    <div className='item'>
    <label htmlFor='AccNumber'>Account Number</label>
      <input type="integer" id="AccNumber" />
    </div>
    <div className='item'>
    <label htmlFor='IFSCcode'>IFSC code</label>
      <input type="integer" id="IFSCcode" />
    </div>
    <div className='item'>
    <label htmlFor='BnkStmt'>upload bank statement/cancel cheque</label>
      <span><input type="file" id="BnkStmt" className='fileUploader'/>
      <TbEdit className='editNameIcon'/>
      </span>
    </div>
    </form>
   )
  }

  renderDocuments =()=>{
    return(
      <form className='formContainer'>
      <div className='item'>
      <label htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='fileUploader'/>
        <TbEdit className='editNameIcon'/>
      </span>
      </div>
      <div className='item'>
      <label htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='fileUploader'/>
        <TbEdit className='editNameIcon'/>
      </span>
      </div>

      <div className='item'>
      <label htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='fileUploader'/>
        <TbEdit className='editNameIcon'/>
      </span>
      </div>

      <div className='item'>
      <label htmlFor='photo'>Pharmacy photo</label>
        <span><input type="file" id="photo" className='fileUploader'/>
        </span>
      </div>
      <button type="submit" className='submitBtn' onClick={()=>this.onDocumentsSubmit()}>Save Details</button>
      </form>
    )
  }

  renderEditSections=()=>{
    const {selectedSection}=this.state

     switch (selectedSection) {
        case "BasicDetails":
            return this.renderBasicDetails()
        case "MyAssociation":
            return this.renderMyAssociation()
        case "Documents":
            return this.renderDocuments()
        case "BankInfo":
            return this.renderBankInfo()
        default:
            return null;
     }
}

  GoBack = () =>{
    this.setState({selectedSection:""})
  }

  renderEditHeader = () => {
    const {selectedSection} = this.state
    const basicDetails=selectedSection==="BasicDetails"?"selected":"section"
    const myAssociation=selectedSection==="MyAssociation"?"selected":"section"
    const documents=selectedSection==="Documents"?"selected":"section"
    const bankInfo=selectedSection==="BankInfo"?"selected":"section"
    return(
    <div className='editHeader'>
      <div className='EditHighlight'>
      <button type="button" onClick={()=>this.GoBack()}><TiArrowLeftThick className='backIcon'/></button>
      <h1>Edit Profile</h1>
      </div>
      <div className='sections'>
                        <div className={`${basicDetails} sectionItem`} onClick={()=>this.onClickSelectSection("BasicDetails")}>
                            Basic Details
                        </div>
                        <div className={myAssociation} onClick={()=>this.onClickSelectSection("MyAssociation")}>
                            My Association
                        </div>
                        <div className={documents} onClick={()=>this.onClickSelectSection("Documents")}>
                            Documents
                        </div>
                        <div className={bankInfo} onClick={()=>this.onClickSelectSection("BankInfo")}>
                            Bank Info
                        </div>
                    </div>
    </div>
  )
    }

  render(){
    const {selectedSection} = this.state
    
  return (
    <div>
    <Header />
    {selectedSection!==""&&this.renderEditHeader()}
    {selectedSection===""?this.renderProfile(): this.renderEditSections()}
    </div>
  )
}
}

export default Profile
