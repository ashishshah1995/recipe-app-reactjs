import React from "react";
import Recipe from "./Recipe";
function App() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://envato-shoebox-0.imgix.net/f537/6c50-88a0-415d-9569-63ba1a44865c/brea4d_novgla-5.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=59efab52277cb67d0309e5c190d794fa")',
        backgroundSize: "cover",
      }}
    >
      <main>
        <section className="container">
          <div className="title">
            <h2 style={{ fontWeight: "bold" }}>Today's recipe</h2>
            <div className="underline"></div>
          </div>
          <Recipe />
        </section>
      </main>
    </div>
  );
}

export default App;
