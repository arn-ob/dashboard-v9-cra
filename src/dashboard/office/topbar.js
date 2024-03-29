import { useHistory, useLocation } from 'react-router-dom';

import data from './data';
import OFFICE from './office';
import CloseIcon from './icons/system/close';
import WindowsFolderIcon from './icons/system/folder';

const style = {
  container: 'mr-auto text-xs',
  header: 'flex bg-blue-gray py-1.5 z-40 w-full',
  btn: `ml-auto px-2 text-lg font-light hover:bg-blue-gray-light focus:outline-none`,
};

export default function Topbar() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <header className={style.header}>
      <div className={style.container}>
        {data.map((section) => (
          <div key={section.section}>
            {section.content.map((item) => (
              <div key={item.title}>
                {pathname === item.link && (
                  <div className="flex pl-3">
                    <WindowsFolderIcon className="h-4 w-4 mt-0.5" />
                    <span className="pl-2 pt-0.5">
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
