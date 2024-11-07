Para que funcione, por ahora estoy haciendo lo siguiente:

1 - En una pestaña de la terminal, lanzo la versión de servidor de desarrollo con
netlify dev
para que funcionen las llamadas a las functions. Si no, al llamarlas desde el build dice que no funcionan

2 - En otra pestaña de la terminal, hago un build del proyecto
netlify build

3 - En esa misma pestaña, hago una prueba del deploy
netlify deploy

4 - Si todo va bien, lo subo a producción
netlify deploy --prod
