const Tweet = (props) => {
  return (
    <li>
      <article className="tweet__wrapper">
        <img
          className="tweet__avatar"
          src={props.tw.avatar}
          alt={`Avatar de ${props.tw.user}`}
        />
        <div className="tweet__content">
          <p className="tweet__info">
            <span className="tweet__user">{props.tw.user}</span>
            <span className="tweet__username">@{props.tw.username}</span>
            <span className="tweet__date">{props.tw.date}</span>
          </p>
          <p className="tweet__text">{props.tw.text}</p>
          <ul className="tweet__actions">
            <li className="tweet__comments">{props.tw.comments}</li>
            <li className="tweet__retweets">{props.tw.retweets}</li>
            <li className="tweet__likes">{props.tw.likes}</li>
            <li className="tweet__share">
              <span className="tweet__share--text">Compartir</span>
            </li>
          </ul>
        </div>
      </article>
    </li>
  );
};

export default Tweet;
