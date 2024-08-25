import images from '../../../../assets/img/images'
import './CustomerSidebar.css'
import CustomerSidebarMenu from './CustomerSidebarMenu'

export default function CustomerSidebar() {
  return (
    <div className="lg:block hidden">
      <div className="user_dashboard_nav">
        <div className="close_collapse" id="close_collapse">
          <span>
            <i className="fa-solid fa-xmark" />
          </span>
        </div>
        <div className="user_profile">
          <div className="user_profile_image">
            <img src={images.customer} alt="" />
          </div>
          <h4 className="user_profile_name">Miss. Lamiya</h4>
        </div>
        <CustomerSidebarMenu />
      </div>
    </div>
  )
}
