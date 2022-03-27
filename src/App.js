// import { Routes, Route, Navigate } from 'react-router-dom';
//Navigate для переадресации, парам replace - не сохранять в истории
import { AuthContextProvider } from './context';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className='app'>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
