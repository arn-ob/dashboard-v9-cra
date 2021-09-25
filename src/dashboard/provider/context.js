import React from 'react';
import { useHistory } from 'react-router-dom';

const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [selected, setSelected] = React.useState('');
  const ref = React.useRef(null);
  const history = useHistory();

  const isSelectedItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ''));
    },
    [],
  );

  // Set html tag style overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // close Taskbar modal when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') {
        setSelected('');
      }
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [selected]);

  // close Taskbar modal when routes changes
  React.useEffect(() => {
    return history.listen(() => {
      if (selected) {
        setSelected('');
      }
    });
  }, [history, selected]);

  return (
    <Context.Provider value={{ isSelectedItem, ref, selected }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { isSelectedItem, ref, selected }
export function useToggle() {
  return React.useContext(Context);
}
