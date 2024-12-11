<script>
export default {
  name: 'AddBook',
  
}
</script>

<template>
   <div id="form">
      <div>
        <label for="id-remove">Id:</label>
        <input type="number" id="id-remove">
        <button id="remove">Borrar libro</button>
      </div>
      <form id="bookForm">
        <div>
          <label for="id-module">Módulo:</label>
          <select id="id-module">
            <option>- Selecciona un módulo -</option>
          </select>
        </div>

        <div>
          <label for="publisher">Editorial:</label>
          <input type="text" id="publisher"><br>
        </div>

        <div>
          <label for="price">Precio:</label>
          <input type="number" id="price">
        </div>

        <div>
          <label for="pages">Páginas:</label>
          <input type="number" id="pages">
        </div>

        <div>
          <label>Estado:</label>

          <input type="radio" name="status" value="new">Nuevo
          <input type="radio" name="status" value="good">Bueno
          <input type="radio" name="status" value="used">Usado
          <input type="radio" name="status" value="bad">Malo
          <input type="radio" name="status" value="digital">Digital
        </div>

        <div>
          <label for="comments">Comentarios:</label>
          <textarea id="comments"></textarea>
        </div>

        <button type="submit">Añadir</button>
        <button type="reset">Reset</button>
      </form>
    </div>
    <div id="about">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
</template>