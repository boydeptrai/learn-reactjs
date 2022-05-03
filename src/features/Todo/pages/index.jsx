import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { Switch, Route } from 'react-router-dom';
import DetailPge from './DetailPage';
import ListPage from './ListPage';
import { useRouteMatch } from 'react-router-dom';
import NotFound from '../../../components/NotFound';

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
