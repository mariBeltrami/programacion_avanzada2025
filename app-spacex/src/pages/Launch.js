
import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Launch = async () => {
    const id = getHash();
    const launch = await getData(id);

    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${launch.links.patch.large || 'URL_IMAGEN_POR_DEFECTO'}" alt="${launch.name}">
                <h2>${launch.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Flight Number:</h3>
                <p>${launch.flight_number}</p>
                <h3>Launch Date:</h3>
                <p>${new Date(launch.date_utc).toLocaleDateString('es-AR')}</p>
                <h3>Details:</h3>
                <p>${launch.details || 'No details available.'}</p>
                <h3>Failures:</h3>
                <p>${launch.failures.length > 0 ? launch.failures.map(f => f.reason).join(', ') : 'None'}</p>
            </article>
        </div>
    `;
    return view;
};

export default Launch;