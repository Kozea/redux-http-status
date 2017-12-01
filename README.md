# redux-http-status
This library provides a simple http status handling when using react, redux, react-redux, react-router and react-router-redux.

It's composed of :

### A reducer

```es6

import { httpStatusReducer } from 'redux-http-status'

export default combineReducers({
  ...otherReducers,
  status: httpStatusReducer,
})
```
### A NotFound react component
```es6
import { NotFound } from 'redux-http-status'

export default function NotFoundPage() {
  return (
    <NotFound>
      This page was not found
    </NotFound>
  )
}
```

### A Forbidden component
Which works like NotFound

### A Redirect component
```es6
  <Route
    path="/old/date"
    component={() => <Redirect code={301} url="/date" />}
  />
```

## Server usage
To make it work server side, here's a Koa exemple that renders an App, sets the status and redirect if needed.:
```es6
koaze.router.get('/*', ctx => {
  const history = createMemoryHistory({ initialEntries: [ctx.url] })
  const store = createStore(
    reducers,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  )

  // Render app
  const app = renderToString(
    <Root store={store} history={history}>
      <App />
    </Root>
  )
  // Get status from redux store
  const { status } = store.getState()
  ctx.status = status.code

  if ([301, 302].includes(status.code)) {
    ctx.redirect(status.url)
    return
  }

  ctx.type = 'text/html'
  ctx.body = renderHtml(app, store)
})
```
