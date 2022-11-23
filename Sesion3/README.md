# Sesion 3 |Ciclo de vida de los componentes

22 de noviembre del 2022

## Ciclo de vida

- Desde que se crea hasta que se elimina un objeto
- Se carga y elimina de memoria
- Métodos

## Métodos del ciclo de vida

- constructor(): solo una vez, crea componente
- render(): despues de crearse y al cambiar de estado

### Montaje

Primera fase del ciclo de vida de un componente.
Se crea el componente.  
Aparece visualmente en la página.
Un componente se monta en el momento en que se ejecuta su render().  

- constructor(): inicializamos el estado, enlazamos los event handlers con this
- render(): devolvemos lo que se pinta en función de props y state.
- componentDidMount(): literalmente, "el componente se ha montado".  
