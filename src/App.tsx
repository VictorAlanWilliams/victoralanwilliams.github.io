import { Content } from "./components/Content";
import { PageContent } from "./components/PageContent";

function App() {

  return (
    <>
      <Content content={<PageContent />}/>
    </>
  )
}

export default App
