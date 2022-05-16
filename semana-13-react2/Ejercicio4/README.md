# Side effects

Partiendo del estado final del ejercicio anterior haz que el estado de `App` se guarde en el `localStorage` de forma que aunque recarges la página el estado persista.

Para hacer esto debes hacer que:

- cuando se carge la aplicación mire si hay un estado guardado en el `localStorage` y use ese estado como inicial.
- cada vez que el estado se modifique porque se añade o modifica un elemento debe guardar el estado en el `localStorage`. Para hacer esto debes usar `useEffect`.
