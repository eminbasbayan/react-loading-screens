import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./topbar.css";
import Skeleton from "../skeleton/Skeleton";

const Topbar = ({ isLoading }) => {
  return (
    <div className="topbar">
      <div className="top-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png"
          alt=""
          className="logo"
        />
        <span className="logo-text">YouTube</span>
      </div>
      <div className="top-center">
        <div className="top-search">
          <input type="text" placeholder="Search" />
          <div className="top-search-icon-container">
            <SearchIcon className="top-search-icon" />
          </div>
          <MicIcon />
        </div>
      </div>
      <div className="top-right">
        {isLoading ? (
          <Skeleton type="top" />
        ) : (
          <>
            <VideoCallIcon className="top-icon" />
            <AppsIcon className="top-icon" />
            <NotificationsIcon className="top-icon" />
            <img
              className="top-img"
              src="https://pbs.twimg.com/profile_images/1267406760245108736/PvV5gdhb_400x400.jpg"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
