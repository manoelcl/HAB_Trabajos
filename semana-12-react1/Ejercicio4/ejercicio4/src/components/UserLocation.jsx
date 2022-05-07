function UserLocation({ location }) {
  return (
    <footer>
      <p>{location.city}</p>
      <p>{location.country}</p>
    </footer>
  );
}

export default UserLocation;
