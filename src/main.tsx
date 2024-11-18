import App from '@app/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@assets/scss/index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@assets/css/dashboard.css'
import ErrorBoundary from './ErrorBoundary'
import { Provider } from 'react-redux'
import store from '@context/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
