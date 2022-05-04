import logo from './logo.svg';
import React, { useEffect } from 'react';
// import './App.css';
import {Switch, Redirect,  Route, NavLink } from 'react-router-dom';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import Header from 'components/Header';



function App() {
  useEffect(() =>{
    const fetchProducts = async () =>{
      const params ={
        _limit:10,
      }
    const productList = await productApi.getAll(params)
    console.log(productList)
    };
    fetchProducts();

  },[])
  return (
    <div className="App">
      <Header />
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact/>

        <Route path="/" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}/>
      </Switch>
      Footer
    </div>
  );
}

export default App;
