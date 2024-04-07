import { usePDF } from '@react-pdf/renderer'
import Instance from './Instance'
import CVButton from './CVButton'

export default function App() {
  const [instance] = usePDF({ document: <Instance /> })

  return (
    <CVButton
      link={instance.blob ? URL.createObjectURL(instance.blob) : ''}
      onClick={() => instance.blob && window.open(URL.createObjectURL(instance.blob))}
    />
  )
}
