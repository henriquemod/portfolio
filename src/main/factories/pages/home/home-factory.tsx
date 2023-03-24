import Home from '@/presentation/pages/home'
import { type Database } from 'firebase/database'
import React from 'react'
import { makeFirebaseClient } from '../../firebase/firebase-client-factory'

export const makeHome = (database: Database): JSX.Element => (
  <Home firebaseClient={makeFirebaseClient(database)} />
)
