"use strict"

import {Route, Router} from 'react-router'
import createHistory from 'history/lib/createHashHistory'

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
import Home from './test.jsx'

/*
<Route path="/home" component={Home} />
{menulist}
<Route path="/build" component={require('./pages/build.jsx')} />
*/

const AppRoutes = (
  <Router history={history}>
    <Route path="/" indexRoute={{component: Home}} component={Home}>

    </Route>
  </Router>
)

export default AppRoutes
