import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppState from 'store/appState';
import { SnackbarProvider } from 'notistack';

const Home = lazy(()=>import('pages/Home'))

function App() {

  return (
    <div className="App">
      <SnackbarProvider>
        <Suspense fallback>
          <AppState>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </AppState>
        </Suspense>
      </SnackbarProvider>
    </div>
  );
}

export default App;
