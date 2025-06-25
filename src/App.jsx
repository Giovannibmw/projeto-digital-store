// src/App.jsx
import { Outlet } from 'react-router-dom';
// Aqui ficará o Header e o Footer

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet /> {/* O conteúdo da página atual será renderizado aqui*/}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;