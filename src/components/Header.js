function Header ({onDarkModeClick, modeStatus}) {
    return(
<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {modeStatus ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header