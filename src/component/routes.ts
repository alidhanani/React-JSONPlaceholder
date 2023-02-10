import * as React from 'react';

//
//  Import pages
//

// Home
const Home = React.lazy(() => import('../view/Home'));

//
//  Routes
//

const routes = [
  // Root
  { path: '/', exact: true, name: 'Home', sidebar: false },

  // Post
  { path: '/post', name: 'Post', element: Home, sidebar: false },
];

export default routes;
