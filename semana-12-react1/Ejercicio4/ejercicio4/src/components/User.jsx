import UserPicture from "./UserPicture";
import UserName from "./UserName";
import UserLocation from "./UserLocation";

function User({ user }) {
  return (
    <article className="user">
      <UserPicture picture={user.picture.large} />
      <div className="user-text">
        <UserName name={user.name} />
        <p>{user.dob.age < 18 ? "" : "Junior user"}</p>
        <UserLocation className="location" location={user.location} />
      </div>
    </article>
  );
}

export default User;
