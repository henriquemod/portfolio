import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import Router from '@/presentation/components/router/router'
import '@/presentation/styles/globals.scss'
import { routesConfig } from './config/routes-config'
import type { RouterProviderProps } from 'react-router-dom'
import { makeHome } from './factories/pages/home/home-factory'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCPcqzWqiNmmG6HVn3XsOpz1S2AvnwQBQE',
  authDomain: 'portfolio-42be1.firebaseapp.com',
  databaseURL: 'https://portfolio-42be1-default-rtdb.firebaseio.com',
  projectId: 'portfolio-42be1',
  storageBucket: 'portfolio-42be1.appspot.com',
  messagingSenderId: '679179982872',
  appId: '1:679179982872:web:632f88ca00e1cb03958b6d',
  measurementId: 'G-8QGHTHG1BJ'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const routes: RouterProviderProps['router'] = routesConfig({
  HomeComponent: makeHome(database)
})

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Router routes={routes} />)
