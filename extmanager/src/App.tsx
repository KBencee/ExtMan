import { useState } from "react"
import ExtensionCard from "./components/ExtensionCard"

export type Extension = {
  logo: string
  name: string
  description: string
  isactive: boolean
}


const App = () => {
  const [extensions, setExtensions] = useState<Extension[]>([])

  return (
    <main>
      <section className="kartya">
        {extensions.map((extension) => <ExtensionCard {...extension}/>)}
      </section>

    </main>
  )
}

export default App