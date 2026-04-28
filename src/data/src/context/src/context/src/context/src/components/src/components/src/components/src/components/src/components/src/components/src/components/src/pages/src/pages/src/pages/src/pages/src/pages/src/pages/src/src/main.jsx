import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { ToolsProvider } from './context/ToolsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <ToolsProvider>
          <App />
        </ToolsProvider>
      </AuthProvider>
    </LanguageProvider>
  </React.StrictMode>
);
