import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="copyright">
          <span>&copy; 2022, RS CLONE</span>
        </div>
        <div className="git-links">
          <a className="git-links_link" href="https://github.com/MatsveiDubaleka">Matsvei Dubaleka</a>
          <a className="git-links_link" href="https://github.com/VerchkaFeya">Vera Krasnova</a>
          <a className="git-links_link" href="https://github.com/aibolit666">Pavel Priladyshev</a>
        </div>
          <a className="git-links_link" href="https://rs.school/">RS School</a>
      </footer>
    </div>
  );
}

export default Footer;
