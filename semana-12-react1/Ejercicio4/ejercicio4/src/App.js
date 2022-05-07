import "./App.css";
import users from "./users.json";
import UserList from "./components/UserList";

//import users from "./users.json";

function App() {
  return (
    <div className="App">
      <UserList userList={users} />
    </div>
  );
}

export default App;
