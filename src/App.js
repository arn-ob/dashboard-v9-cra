import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import OFFICE from './dashboard/office/office';
import DashboardLayout from './dashboard/layout';
import UnboxMessagePage from './pages/messages/unbox';
import UnreadMessagePage from './pages/messages/unread';
import WeddingEventsPage from './pages/events/weddings';
import NetworkingEventPage from './pages/events/networking';
import ArchivedMessagePage from './pages/messages/archived';
import DocumentationPage from './pages/guides/documentation';
import TaxesDocumentsPage from './pages/administration/taxes';
import VacationPicturesPage from './pages/pictures/vacations';
import CallStatisticsPage from './pages/statistics/call-stats';
import TravelDocumentsPage from './pages/administration/travel';
import FinanceStatisticsPage from './pages/statistics/finances';
import UniversityPicturesPage from './pages/pictures/university';
import TripLogStatisticsPage from './pages/statistics/trip-logs';
import AnniversaryPicturesPage from './pages/pictures/anniversary';
import InsuranceDocumentsPage from './pages/administration/insurance';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route exact path={OFFICE}>
            <HomePage />
          </Route>
          <Route exact path="/administration/insurance">
            <InsuranceDocumentsPage />
          </Route>
          <Route exact path="/administration/taxes">
            <TaxesDocumentsPage />
          </Route>
          <Route exact path="/administration/travel">
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
