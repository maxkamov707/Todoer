

   window.addEventListener('load', function() {

    console.log('ToDoer ishga tushdi');
   
    var todoList = [];
   

    var addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', function() {
     var todoInput = document.querySelector('#todo-input');
     var todoText = todoInput.value;
   
     todoList.push(todoText);
   
     todoInput.value = '';
   
     renderList();
    });
   
    function renderList() {
     var listContainer = document.querySelector('#todo-list-container');
   

     listContainer.innerHTML = '';
   

     todoList.forEach(function(item) {
      // Creating the HTML elements
      var listItem = document.createElement('div');
      listItem.className = 'todo-item';
      var checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      var textElement = document.createElement('span');
      textElement.textContent = item;
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
   

      deleteButton.addEventListener('click', function() {

       todoList.splice(todoList.indexOf(item), 1);
   

       renderList();
      });
   

      listItem.appendChild(checkBox);
      listItem.appendChild(textElement);
      listItem.appendChild(deleteButton);
      listContainer.appendChild(listItem);
     });
    }
   });
   

