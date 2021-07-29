import { Link, useLocation } from 'react-router-dom';
import data from './data';
import { Modal, ModalBody } from './modal';
import LinkIcon from './icons/system/link';
import CloseIcon from './icons/system/close';
import { useToggle } from '../provider/context';
import WindowsIcon from './icons/system/windows';

export default function Menu() {
  const { isSelectedItem } = useToggle();
  const { pathname } = useLocation();
  return (
    <div>
      <div onClick={isSelectedItem('windows')} className="cursor-pointer">
        <WindowsIcon />
      </div>
      <Modal toggle="windows" size="large">
        <div className="pt-4 -mb-3 flex justify-end">
          <button className="text-lg pr-3" onClick={isSelectedItem('windows')}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-wrap">
          {data.map((section) => (
            <div
              className=" font-semibold mb-4 w-6/12 md:w-4/12"
              key={section.section}
            >
              <ModalBody>
                <div className="font-semibold flex text-gray-700 mb-4">
                  <span className="pr-1">{section.icon}</span>
                  <span>{section.section}</span>
                </div>
                {section.content.map((item) => (
                  <Link to={item.link} key={item.title}>
                    <div
                      key={item.link}
                      className={`flex text-xs pb-2 mb-3 text-gray-700 
                         ${pathname === item.link && 'text-blue-700'}`}
                    >
                      <LinkIcon className="h-4 w-4" />
                      <span className="pl-2">{item.title}</span>
                    </div>
                  </Link>
                ))}
              </ModalBody>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
