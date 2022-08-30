import { createRoot } from 'react-dom/client'
import { store } from './app/post.js'
import { Provider } from 'react-redux'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>
)
