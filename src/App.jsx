// import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes'
import ErrorBoundary from './ErrorBoundary'
import { Toaster } from 'react-hot-toast';

//& Not using Redux for now ...
// import { Provider } from 'react-redux';
// import store from './store';


function App() {

  return (
    <ErrorBoundary>
      {/* <Provider store={store}> */}
        <Routes />
        <Toaster position="top-right" />
      {/* </Provider> */}
    </ErrorBoundary>
  )
}

export default App