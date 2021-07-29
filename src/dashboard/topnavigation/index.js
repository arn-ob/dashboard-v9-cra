import { useHistory, useLocation } from 'react-router-dom';
import data from '../sidenavigation/data';
import OFFICE from '../sidenavigation/office';
import CloseIcon from '../sidenavigation/icons/system/close';
import DocumentsIcon from '../sidenavigation/icons/system/documents';

const style = {
  container: 'mr-auto text-xs',
  header: 'flex bg-blue-gray py-1 z-40 w-full',
  btn: `ml-auto px-2 text-lg font-light hover:bg-gray-300 focus:outline-none`,
};

export default function TopNavigation() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <header className={style.header}>
      <div className={style.container}>
        {data.map((section) => (
          <div key={section.section}>
            {section.content.map((item) => (
              <div className="mt-1.5" key={item.title}>
                {pathname === item.link && (
                  <div className="flex pl-3">
                    <DocumentsIcon className="h-4 w-4" />
                    <span className="pl-2">
                      {section.section} -> {item.title}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className={style.btn} onClick={() => history.push(OFFICE)}>
        <CloseIcon />
      </button>
    </header>
  );
}
