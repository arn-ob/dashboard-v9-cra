import { Link, useLocation } from 'react-router-dom';

import data from './data';
import Menu from './menu';
import LinkIcon from './icons/system/link';
import CloseIcon from './icons/system/close';
import { useToggle } from '../provider/context';
import { Modal, ModalBody, ModalHeader } from './modal';

const style = {
  taskbar: `fixed bottom-0 w-full z-40`,
  activeLink: `text-blue-600 font-semibold`,
  link: 'flex text-sm text-gray-800 mb-4 pb-2',
  container: `bg-blue-gray text-gray-700 flex px-2 md:px-0 py-2 space-x-4 max-w-full overflow-x-auto`,
};

export default function Taskbar() {
  const { isSelectedItem } = useToggle();
  const { pathname } = useLocation();
  return (
    <div className={style.taskbar}>
      <div className={style.container}>
        <div className="flex mx-auto space-x-6">
          <Menu />
          {data.map((section) => (
            <div key={section.section} className="overflow-hidden">
              <div
                className="cursor-pointer"
                onClick={isSelectedItem(section.section)}
              >
                {section.icon}
              </div>
              <Modal toggle={section.section}>
                <ModalHeader>
                  {section.icon} <span className="pl-2">{section.section}</span>
                  <button
                    aria-label="Close"
                    className="ml-auto focus:outline-none"
                    onClick={isSelectedItem(section.section)}
                  >
                    <CloseIcon />
                  </button>
                </ModalHeader>
                <ModalBody>
                  {section.content.map((item) => (
                    <Link to={item.link} key={item.title}>
                      <div className={style.link}>
                        <LinkIcon />
                        <span
                          className={`pl-2 ${
                            pathname === item.link && style.activeLink
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </ModalBody>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
