import Header from 'components/Header';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album/pages';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo/pages';




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
      
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact/>

        <Route path="/" component={CounterFeature} exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}/>
      </Switch>
      Footer
    </div>
  );
}

export default App;
