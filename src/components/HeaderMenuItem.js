const HeaderMenuItem = (props) => {
  return (
    <li className={`menu__item menu__item--${props.liClass}`}>
      <a className="menu__link" href={props.href} title={props.title}>
        <span className="text">{props.text}</span>
      </a>
    </li>
  );
};

export default HeaderMenuItem;
