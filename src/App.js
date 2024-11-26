import React from 'react';
import './index.css'; // Asegúrate de que el archivo CSS esté importado

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      
      <header className="App-header bg-blue-500 text-white py-10">
        <h1 className="text-4xl font-bold text-center">welcome to my portfolio</h1>
        <p className="mt-4 text-lg text-center">¡Hola! Soy Dulce Michelle Barrios Aguilar, una ingeniera en computación.</p>
      </header>
      <section className="bg-white py-16 px-8">
  <h2 className="text-3xl font-semibold mb-8 text-center">about me</h2>
  <p className="max-w-4xl mx-auto text-lg text-gray-700">
    Soy una ingeniera en computación con experiencia en desarrollo web y pruebas de software. Me apasiona la tecnología y siempre estoy buscando nuevos desafíos para mejorar mis habilidades. En este portafolio, comparto algunos de mis proyectos y logros.
  </p>
</section>

      
      <section className="my-16 px-8">
        <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
        <ul className="space-y-4">
          <li className="text-xl">
            <a href="https://github.com/milliyx/LInux_project" className="text-blue-500 hover:underline">Proyecto 1</a>
          </li>
        </ul>
      </section>
      
      <footer className="bg-blue-500 text-white py-4">
        <p className="text-center">contact me <a href="mailto: dmichellebarrios@gmail.com" className="hover:underline">michelle@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;
