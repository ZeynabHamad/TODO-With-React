const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode;
  };

  return (
    <button type="submit" className="mode" onChange={toggleTheme}>
      <i className="fa-solid fa-circle-half-stroke" />
    </button>
  );
};
export default DarkMode;
