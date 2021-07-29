import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashboardLayout from './dashboard/layout';
import UnboxMessagePage from './pages/messages/unbox';
import OFFICE from './dashboard/sidenavigation/office';
import UnreadMessagePage from './pages/messages/unread';
import WeddingEventsPage from './pages/events/weddings';
import TaxesDocumentsPage from './pages/documents/taxes';
import TravelDocumentsPage from './pages/documents/travel';
import NetworkingEventPage from './pages/events/networking';
import ArchivedMessagePage from './pages/messages/archived';
import DocumentationPage from './pages/guides/documentation';
import VacationPicturesPage from './pages/pictures/vacations';
import CallStatisticsPage from './pages/statistics/call-stats';
import FinanceStatisticsPage from './pages/statistics/finances';
import UniversityPicturesPage from './pages/pictures/university';
import TripLogStatisticsPage from './pages/statistics/trip-logs';
import InsuranceDocumentsPage from './pages/documents/insurance';
import AnniversaryPicturesPage from './pages/pictures/anniversary';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path={OFFICE} />
          <Route exact path="/documents/insurance">
            <InsuranceDocumentsPage />
          </Route>
          <Route exact path="/documents/taxes">
            <TaxesDocumentsPage />
          </Route>
          <Route exact path="/documents/travel">
            <TravelDocumentsPage />
          </Route>
          <Route exact path="/events/networking">
            <NetworkingEventPage />
          </Route>
          <Route exact path="/events/weddings">
            <WeddingEventsPage />
          </Route>
          <Route exact path="/guides/documentation">
            <DocumentationPage />
          </Route>
          <Route exact path="/messages/archived">
            <ArchivedMessagePage />
          </Route>
          <Route exact path="/messages/unbox">
            <UnboxMessagePage />
          </Route>
          <Route exact path="/messages/unread">
            <UnreadMessagePage />
          </Route>
          <Route exact path="/pictures/anniversary">
            <AnniversaryPicturesPage />
          </Route>
          <Route exact path="/pictures/university">
            <UniversityPicturesPage />
          </Route>
          <Route exact path="/pictures/vacations">
            <VacationPicturesPage />
          </Route>
          <Route exact path="/statistics/call-stats">
            <CallStatisticsPage />
          </Route>
          <Route exact path="/statistics/finances">
            <FinanceStatisticsPage />
          </Route>
          <Route exact path="/statistics/trip-logs">
            <TripLogStatisticsPage />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;
