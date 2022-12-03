import { ChakraProvider } from '@chakra-ui/react'
import {
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { useRouter } from './router';
function App() {
  const router = useRouter()

  return (
    <ChakraProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ChakraProvider>
  )
}

export default App
