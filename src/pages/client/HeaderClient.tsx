import { IoMenu } from "react-icons/io5";
import ContactInfo from "../../components/HeaderComponent/ContactInfo";
import LogoHeader from "../../components/HeaderComponent/LogoHeader";
import MainNav from "../../components/HeaderComponent/MainNav";
import SearchHeader from "../../components/HeaderComponent/SearchHeader";
import UserNav from "../../components/HeaderComponent/UserNav";

const HeaderClient = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 ">
      <div className="bg-white shadow-lg z-50 flex justify-between py-4 px-60">
        <span className="text-2xl">
          <IoMenu />
        </span>
        <nav>
          <MainNav />
        </nav>
        <div>
          <ContactInfo />
        </div>
      </div>
      {/* search */}
      <div>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <LogoHeader />
          </div>
          <div>
            <SearchHeader />
          </div>
          <div>
            <div>
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
