import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Common layout or header */}
      <header>
        <h1>Our Header</h1>
      </header>
      
      
      <Outlet />
    </div>
  );
}

export default App;
