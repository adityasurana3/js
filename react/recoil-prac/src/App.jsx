import { useEffect, useState } from 'react'
import { notifications, totalNotification } from './atom'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
  return(
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  )
}


function MainApp(){
  const [networkCount, setNetworkCount ] = useRecoilState(notifications)
  const sumtotalNotification = useRecoilValue(totalNotification)

  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount.network >= 100 ? "99+": networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({sumtotalNotification})</button>
    </>
  )
}

export default App
