import CircularProgress from "@mui/material/CircularProgress";
import MaterialSkeleton from "@mui/material/Skeleton";
import "./skeleton.css";

export default function Skeleton({ type }) {
  const COUNTER = 8;
  const FeedSkeleton = () => (
    <div className="post-sk">
      <div className="post-sk-img"></div>
      <div className="post-sk-info">
        <div className="post-sk-avatar"></div>
        <div className="post-sk-detail">
          <div className="post-sk-text"></div>
          <div className="post-sk-text sm"></div>
        </div>
      </div>
    </div>
  );

  const TopSkeleton = () => (
    <div className="top-sk">
      <div className="top-sk-icon"></div>
      <div className="top-sk-icon"></div>
      <div className="top-sk-icon"></div>
      <div className="top-sk-img"></div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menu-sk">
      <div className="menu-sk-item"></div>
      <div className="menu-sk-item"></div>
      <div className="menu-sk-item"></div>
    </div>
  );

  const CircleLoading = () => (
    <div className="circle">
      <CircularProgress />
    </div>
  );

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="custom-text">Loading...</span>
    </div>
  );

  const SkeletonLibrary = () => (
    <div className="library-sk">
      <MaterialSkeleton variant="circular" width={40} height={40} />
      <MaterialSkeleton variant="circular" width={40} height={40} />
      <MaterialSkeleton variant="circular" width={40} height={40} />
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === "top") return <TopSkeleton />;
  if (type === "menu") return <MenuSkeleton />;
  if (type === "circle") return <CircleLoading />;
  if (type === "custom") return <CustomLoading />;
  if (type === "library") return <SkeletonLibrary />;
}
