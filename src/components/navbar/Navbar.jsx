import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Private Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
