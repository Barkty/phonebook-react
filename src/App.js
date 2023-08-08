import './App.css';
import { QueryClient, QueryClientProvider } from "react-query"
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppState from 'store/appState';
import { SnackbarProvider } from 'notistack';

const Home = lazy(()=>import('pages/Home'))

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <Suspense fallback>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
            {/* <AppState>
            </AppState> */}
          </Suspense>
        </SnackbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
