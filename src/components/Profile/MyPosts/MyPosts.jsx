import { useSelector } from "react-redux";
import { PostCard } from "../../Feed/PostCard/PostCard";
import { users } from "../../../redux/features/users";

function MyPosts() {
  const myPosts = useSelector((state) => state.posts.myPosts);

  const getUser = (userId) => {
    return users.find((user) => user.id == userId);
  };
  return (
    <div>
      {myPosts &&
        myPosts.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              //   comments={comments}
              showComments={false}
              user={getUser(post.userId)}
              userPost={true}
            />
          );
        })}
    </div>
  );
}
export { MyPosts };
