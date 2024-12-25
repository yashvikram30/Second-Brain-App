import Button from "./components/ui/Button"
import {Plus} from "./icons/Plus"
import Share from "./icons/Share"

function App() {
  return (
   <>
    <Button variant="primary" text="Share" size="sm" startIcon={<Plus size="sm"/>} endIcon={<Share size="sm"/>}/>
    <Button variant="secondary" text="Share" size="md" startIcon={<Plus size="md"/>} endIcon={<Share size="md"/>}/>
    <Button variant="secondary" text="Share" size="lg" startIcon={<Plus size="lg"/>} endIcon={<Share size="lg"/>}/>
   </>
  )
}

export default App
