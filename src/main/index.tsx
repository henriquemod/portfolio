import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from '@/presentation/components/router/router'
import '@/presentation/styles/globals.scss'
import { routesConfig } from './config/routes-config'
import type { RouterProviderProps } from 'react-router-dom'
import { makeHome } from './factories/pages/home/home-factory'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const routes: RouterProviderProps['router'] = routesConfig({
  HomeComponent: makeHome(database)
})

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Router routes={routes} />)
