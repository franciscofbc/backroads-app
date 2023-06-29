import { pageLinks } from '../data';

const PageLinks = ({ ulClass, aClass, idNav }) => {
  return (
    <ul className={ulClass} id={idNav}>
      {' '}
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            {' '}
            <a href={href} className={aClass}>
              {' '}
              {text}{' '}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
