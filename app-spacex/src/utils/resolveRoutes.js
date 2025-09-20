const resolveRoutes = (route) => {
    if (route.length <= 3) { // Si es solo '/', tiene pocos caracteres
        return route;
    }
    return '/:id'; // Si es una ruta más larga, es un ID de lanzamiento
};
export default resolveRoutes;