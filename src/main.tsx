import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { SelectedItemContext } from './contexts/SelectedItemContext.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<StrictMode>
			<SelectedItemContext>
				<App />
			</SelectedItemContext>
		</StrictMode>
	</BrowserRouter>
)
