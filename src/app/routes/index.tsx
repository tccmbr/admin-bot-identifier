import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import * as Page from '../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Page.Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  );
};
