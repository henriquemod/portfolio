import { createBrowserRouter } from 'react-router-dom'
import type { RouterProviderProps } from 'react-router-dom'

type Props = {
  HomeComponent: JSX.Element
}

export const routesConfig = ({
  HomeComponent
}: Props): RouterProviderProps['router'] =>
  createBrowserRouter([
    {
      path: '/',
      element: HomeComponent
    }
  ])
