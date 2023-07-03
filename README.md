# LetSponZive
this Library create for use in responsive design

### Install

```sh

npm i letsponzive

```


### usage
- use in React Router to determine went visit to that path
```
... some react import
import Homepage  from './pages/homepage';
import { Provider } from 'react-redux'
import {LetSponZive} from "letsponzive"
import Web from './pages/web';
import Moblie from './pages/moblie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/letsponzive",
    element: <LetSponZive component1={<Web/>} component2={<Moblie/>} onWidth={1200}/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
```
