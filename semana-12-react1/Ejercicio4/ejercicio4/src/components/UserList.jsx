import User from "./User";

function UserList({ userList }) {
  return (
    <section>
      {userList.map((userData, index) => {
        return <User key={index} user={userData} />;
      })}
    </section>
  );
}

export default UserList;
