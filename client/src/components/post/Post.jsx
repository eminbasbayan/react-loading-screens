import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img-container">
        <img className="post-img" src={post.img} alt="" />
        <span className="post-duration">{post.duration}</span>
      </div>
      <div className="post-info-container">
        <img className="post-avatar" src={post.channel.avatar} alt="" />
        <div className="post-info">
          <span className="post-title">{post.title}</span>
          <span className="post-channel">{post.channel.name}</span>
          <span className="post-detail">
            {post.views} • {post.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
