import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks ulClass="footer-links" aClass="footer-link" idNav="" />

      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;