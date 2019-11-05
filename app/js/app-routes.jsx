"use strict"

import {Route, Router} from 'react-router'
import createHistory from 'history/lib/createHashHistory'

// var DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;

const history = createHistory({ queryKey: false })
let menulist = []

// function addMenu(list) {
//   list.forEach(function (menu, index) {
//     if (menu.component) {
//       menulist.push(
//         <Route key={index} path={menu.path} component={menu.component} />
//       )
//     }
//   })
// }
// require('./menulist').forEach(function (list) {
//   addMenu(list)
// })

// import Master from './pages/master.jsx'
// import Home from './pages/home.jsx'
import Home from './pages/app.jsx'
import NotFoundRoute from './modules/404.jsx'
import ErrRoute from './modules/500.jsx'

/*
<Route name="app" path="/" handler={Application}>
  <DefaultRoute handler={Index}/>
  <Route name='brand' path="/brand/:brand_id" handler={BrandList} />

  <NotFoundRoute handler={NotFound} />
</Route>
*/

const AppRoutes = (
  <Router history={history}>
    <Route path="/" indexRoute={{component: Home}} component={Home}>

    </Route>
  </Router>
)

export default AppRoutes
