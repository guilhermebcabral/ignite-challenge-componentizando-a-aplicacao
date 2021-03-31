import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';



export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />

      <div className="container">
        <header>
          <span className="category">Categoria:<span> Título"</span></span>
        </header>

        <main>
          <div className="movies-list">
            <Content />
          </div>
        </main>
      </div>
    </div>
  )
}