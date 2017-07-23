import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './components/posts_index';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        {/* <Route path="/posts/:id" compoennt={PostsShow} /> */}
        {/* <Route path="/posts/new" compoennt={PostsNew} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
