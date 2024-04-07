import { lazy, useEffect, useState } from 'react'
import CVButton from './CVButton'

const LazyImport = lazy(() => import('./LazyImport'))

export default function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return visible ? <LazyImport /> : <CVButton />
}
