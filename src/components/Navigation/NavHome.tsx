const NavHome = () => {
  return (
    <a href="/" className="flex items-center">
      <img
        src={require("../../assets/images/logo.png")}
        className="h-10 mr-3 brightness-200"
        alt="Plantae"
      />
    </a>
  );
};

export default NavHome;
