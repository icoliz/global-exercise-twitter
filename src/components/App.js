import { useEffect, useState } from 'react';
import adalabLogo from '../images/adalab-logo.png';
import tweetsData from '../data/tweets.json';
import '../styles/App.scss';
import MainHeader from './MainHeader';
import HeaderMenuItem from './HeaderMenuItem';
import Tweet from './Tweet';
import ls from '../services/localStorage';

function App() {
  // State
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  const [composeTweet, setComposeTweet] = useState(ls.get('composeTweet', ''));
  const [tweets, setTweets] = useState(tweetsData);

  // Effects
  useEffect(() => {
    ls.set('composeTweet', composeTweet);
  }, [composeTweet]);

  // Events
  const handleClickCompose = () => {
    setComposeIsOpen(!composeIsOpen);
  };

  const handleChangeCompose = (ev) => {
    const tweet = ev.currentTarget.value;
    setComposeTweet(tweet);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    setTweets([
      {
        id: 'aeolsaladfj12',
        avatar: 'http://localhost:3000/assets/avatars/user-me.jpg',
        user: 'Adalab',
        username: 'adalab_digital',
        date: '14 ene. 2022',
        text: composeTweet,
        comments: 0,
        retweets: 0,
        likes: 0,
      },
      ...tweets,
    ]);
    setComposeIsOpen(false);
    setComposeTweet('');
  };

  // Render

  const renderHeader = () => {
    return (
      <header className="header">
        <nav className="menu">
          <ul className="menu__items">
            <HeaderMenuItem
              liClass="twitter"
              href="/"
              title="Ir"
              text="Ir al inicio"
            />
            <HeaderMenuItem
              liClass="home"
              href="/"
              title="Ir"
              text="Ir al inicio"
            />
            <HeaderMenuItem
              liClass="search"
              href="/"
              title="Buscar"
              text="Buscar"
            />
            <HeaderMenuItem
              liClass="profile"
              href="/"
              title="Perfil"
              text="Perfil"
            />

            <li className="menu__item menu__item--tweet">
              <button
                className="menu__link"
                href="/"
                title="Twittear"
                onClick={handleClickCompose}
              >
                <span className="text">Twittear</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  const renderTweets = () => {
    return tweets.map((tw) => {
      return <Tweet key={tw.id} tw={tw} />;
    });
  };

  const renderComposeWindow = () => {
    const isBtnDisabled = composeTweet.length === 0;
    if (composeIsOpen) {
      return (
        <div className="compose__modal-overlay">
          <form onSubmit={handleComposeSubmit}>
            <div className="compose__modal-wrapper">
              <div className="compose__modal-header">
                <button
                  className="compose__modal-close-btn"
                  onClick={handleClickCompose}
                >
                  Cerrar
                </button>
              </div>
              <div className="compose__modal-content">
                <img
                  className="compose__profile-logo"
                  src={adalabLogo}
                  alt="Logo de Adalab"
                />
                <textarea
                  className="compose__profile-textarea"
                  placeholder="¿Qué está pasando?"
                  value={composeTweet}
                  onChange={handleChangeCompose}
                />
              </div>
              <div className="compose__modal-footer">
                <button
                  className="compose__modal-tweet-btn"
                  disabled={isBtnDisabled}
                >
                  Twittear
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <div className="page">
      {renderHeader()}
      <main className="main">
        <MainHeader />
        <ul>{renderTweets()}</ul>
        {renderComposeWindow()}
      </main>
    </div>
  );
}

export default App;
