const input = document.querySelector('#input');
const btn = document.querySelector('#create-btn');
const todos = document.querySelector('#todo_list');

// ------- func delete --------
const deleteTodo = function (div) {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
        div.remove();
    }
}

// ------- func edit --------
const editTodo = function (h3) {
    const newText = prompt('Enter new text');
    if (newText.trim().length < 1) {
        alert('Please enter new text');
    } else {
        h3.innerText = newText;
    }
}


const createActionButtons = function (onDelete, onEdit) {
    const divButtons = document.createElement('div');
    const btn_delete = document.createElement('button');
    const btn_edit = document.createElement('button');

    divButtons.setAttribute("class", "buttons_div");
    btn_delete.setAttribute('class', 'delete_button');
    btn_edit.setAttribute('class', 'edit_button');

    btn_delete.innerHTML = 'Delete';
    btn_edit.innerHTML = 'Edit';

    divButtons.append(btn_edit);
    divButtons.append(btn_delete);

    // -------- add listeners ---------
    btn_delete.addEventListener('click', (e) => {
        onDelete()
    })

    btn_edit.addEventListener('click', (e) => {
        onEdit()
    })

    return divButtons;
}


const createToDo = function () {

    // ------ add div & text ------
    const div = document.createElement('div');
    const text = document.createElement('h3');

    if (!input.value.trim()) return alert('Please enter an input!');
    text.innerText = input.value;

    div.setAttribute("class", "block_text");
    div.append(text);
    todos.append(div);

    // ------- create buttons --------
    const divButtons = createActionButtons(
        () => {
            deleteTodo(div)
        },
        () => {
            editTodo(text)
        }
    );

    div.append(divButtons);

    input.value = '';
}


btn.addEventListener("click", createToDo);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        createToDo();
    }
})

