// src/pages/Home.js
import getData from '../utils/getData';

const Home = async () => {
    const launches = await getData(); // Usaremos una función helper para el fetch
    const view = `
        <div class="Characters">
            ${launches.map(launch => `
                <article class="Characters-item">
                    <a href="#/${launch.id}">
                        <img src="${launch.links.patch.small || 'URL_IMAGEN_POR_DEFECTO'}" alt="${launch.name}">
                        <h2>${launch.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
};

export default Home;