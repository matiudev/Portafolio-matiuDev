// Importa TODAS las imágenes desde el "src" interno de PelisDev
const images = import.meta.glob('../src/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

// path = "peliculas/drama/..."
// lo convertimos a "../src/peliculas/drama/..."
export const getImage = (path) => {
  const fixedPath = `../src/${path}`.replace(/\/+/g, '/');
  return images[fixedPath]?.default || null;
};
