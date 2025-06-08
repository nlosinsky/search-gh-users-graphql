import client from '@/apolloClient.ts';
import { Toaster } from '@/components/ui/toaster.tsx';
import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App/>
    <Toaster/>
  </ApolloProvider>,
)
