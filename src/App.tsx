import React from 'react'
import AppRouter from './routes/AppRouter'

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default React.memo(App) 