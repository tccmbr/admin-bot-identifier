import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import * as Page from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Page.Session.Index />} />
      <Route path="/sessions" element={<Page.Session.Index />} />
      <Route path="/sessions/:id" element={<Page.Session.Show />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  );
};
