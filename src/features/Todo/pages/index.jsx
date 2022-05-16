import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import DetailPge from './DetailPage';
import ListPage from './ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:postId`} component={DetailPge} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
