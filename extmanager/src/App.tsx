import { useEffect, useState } from "react"
import ExtensionCard from "./components/ExtensionCard"
import { getExtensions } from "./components/services/ExtensionServices"

export type Extension = {
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}

const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([])

  useEffect(() => {
    getExtensions().then (data => {
      setExtensions(data)
    })
  }, [])

  return (
    <main>
      <section className="kartya-grid">
        {extensions.map((extension) => 
          <ExtensionCard {...extension} />
        )}
      </section>
    </main>
  )
}

export default App
