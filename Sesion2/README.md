# Sesion 2 | Estado y propiedades

17 de noviembre del 2022

## Props

- Permiten la comunicacion entre componentes.  
- Datos que va a recibir componente.  
- Similar a funciones.  
- Info dinámica.  

## State

- Dentro del componente.  
- Este estado puede recibir datos de las propiedades, gestionarlos, almacenarlos, etcétera, y acaba formando parte también de este renderizado después del procesamiento.

### Tipos

#### Estado del componente  

Solo es compartido con sus componentes hijos

#### Estado global de la aplicación  

Estado de todos los componentes

## This.state

- Variable de clase
- Disponible en toda la clase que usa esto
- React.js volverá a representar el DOM completo cada vez que actualice esa variable en particular.
- No se cambia se anula con this.setState (nuevo objeto de estado)

## Componentes

### Funciones

Super simples y pequeñas pero muy limitadas, trate de usarlas siempre.

### Clases

Componentes más grandes que requieren más lógica. Tienen un estado local (this.state) y métodos de ciclo de vida de componentes.

## Eventos

- camelCase
- recibe funcion
- prevenir comportamiento defult o propagacion con preventDefault() y stopPropagation() respectivamente.
- se antepone la palabra on.

```javascript
  <div onClick={handleClick}>click me</div>
  function handleClick(event) {
    alert('clicked');
    event.preventDefault();
    event.stopPropagation();
  }
```

event => evento sintético de React,in stancias de SyntheticEvents.
