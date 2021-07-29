import Main from './main';
import Taskbar from './sidenavigation/Taskbar';
import DashboardProvider from './provider/context';

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className="bg-window bg-center bg-cover h-screen overflow-hidden w-full">
        <div className="h-screen overflow-hidden relative">
          <div className="flex items-start">
            <Taskbar />
            <Main>{children}</Main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
