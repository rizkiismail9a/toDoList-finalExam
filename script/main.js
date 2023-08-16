/**
 * Color 1 : #607EAA
 * Color 2 : #AC7088
 * Color 3 : #EED180
 * Color 4 : #F37878
 * Color 5 : #90C8AC
 * Color 6 : #D8CCA3
 * Color 7 : #82A284
 */

let todoList = [
  {
    id: 1,
    date: "2022-08-10",
    time: "11:30",
    todo: "Belanja Mingguan",
    color: "#90C8AC",
  },
  {
    id: 2,
    date: "2022-08-10",
    time: "10:30",
    todo: "Memasak makanan",
    color: "#F37878",
  },
  {
    id: 3,
    date: "2022-08-20",
    time: "17:30",
    todo: "Belajar Coding",
    color: "#EED180",
  },
  {
    id: 4,
    date: "2022-08-13",
    time: "14:30",
    todo: "Bersih-bersih rumah",
    color: "#82A284",
  },
  {
    id: 5,
    date: "2022-08-16",
    time: "19:30",
    todo: "Mencuci Baju",
    color: "#607EAA",
  },
];

const listContainer = document.getElementById("list-todo");

const showLists = (data) => {
  let content = "";
  data.forEach((item, index) => {
    content += `<div style="background-color: ${item.color};">
    <h5>${item.todo}</h5>
    <p>${item.time}</p>
    <h6>${item.date}</h6>
    <a style="color: white" onclick="deleteTask(${index})">Hapus</a>
    <button style="background-color: transparent; border: none; color: white; font-weight: bold;" onclick="editTask(event, ${index})">Edit</button>
  </div>`;
  });
  listContainer.innerHTML = content;
};

showLists(todoList);

const deleteTask = (index) => {
  todoList.splice(index, 1);
  showLists(todoList);
};

const sortAscending = () => {
  todoList.sort((a, b) => {
    const date1 = new Date(a.date + " " + a.time);
    const date2 = new Date(b.date + " " + b.time);
    return date1 - date2;
  });
  showLists(todoList);
};
const sortDescending = () => {
  todoList.sort((a, b) => {
    const date1 = new Date(a.date + " " + a.time);
    const date2 = new Date(b.date + " " + b.time);
    return date2 - date1;
  });
  showLists(todoList);
};
const clearForm = () => {
  document.getElementById("inputDate").value = "";
  document.getElementById("inputTime").value = "";
  document.getElementById("inputTodo").value = "";
  document.getElementById("option1").checked = true;
};
const createTask = (e) => {
  e.preventDefault();
  const inputDate = document.getElementById("inputDate").value;
  const inputTime = document.getElementById("inputTime").value;
  const inputTodo = document.getElementById("inputTodo").value;
  const colorOption1 = document.getElementById("option1").checked;
  const colorOption2 = document.getElementById("option2").checked;
  const colorOption3 = document.getElementById("option3").checked;
  const colorOption4 = document.getElementById("option4").checked;
  const colorOption5 = document.getElementById("option5").checked;
  const colorOption6 = document.getElementById("option6").checked;
  const colorOption7 = document.getElementById("option7").checked;

  let color = "";
  if (colorOption1) {
    color = "#607EAA";
  } else if (colorOption2) {
    color = "#AC7088";
  } else if (colorOption3) {
    color = "#EED180";
  } else if (colorOption4) {
    color = "#90C8AC";
  } else if (colorOption5) {
    color = "#90C8AC";
  } else if (colorOption6) {
    color = "#D8CCA3";
  } else if (colorOption7) {
    color = "#82A284";
  }
  if (!inputDate || !inputTime || !inputTodo) {
    return alert("Masukkan data terlebih dahulu");
  }
  const newTask = {
    id: todoList.length + 1,
    date: inputDate,
    time: inputTime,
    todo: inputTodo,
    color,
  };
  console.log(newTask);
  todoList.push(newTask);
  clearForm();
  showLists(todoList);
};

const searchTask = () => {
  const keyword = document.getElementById("search").value;
  const result = todoList.filter((item) => item.todo.toLowerCase().includes(keyword.toLowerCase()));
  showLists(result);
};

const editTask = (e, index) => {
  e.preventDefault();
  document.getElementById("inputDate").value = document.querySelectorAll("h6")[index].textContent;
  document.getElementById("inputTime").value = document.querySelectorAll("p")[index].textContent;
  document.getElementById("inputTodo").value = document.querySelectorAll("h5")[index].textContent;
  document.querySelector(".btn-primary").style.display = "none";
  const tombolUpdate = document.createElement("button");
  tombolUpdate.innerHTML = "Edit Memo";
  tombolUpdate.classList = "btn btn-primary";
  tombolUpdate.setAttribute("onclick", `updateMemo(event, ${index})`);
  tombolUpdate.setAttribute("id", "editBuku");
  document.querySelectorAll("div.col-12")[1].appendChild(tombolUpdate);
};

const updateMemo = (e, index) => {
  e.preventDefault();
  const inputDate = document.getElementById("inputDate").value;
  const inputTime = document.getElementById("inputTime").value;
  const inputTodo = document.getElementById("inputTodo").value;
  const colorOption1 = document.getElementById("option1").checked;
  const colorOption2 = document.getElementById("option2").checked;
  const colorOption3 = document.getElementById("option3").checked;
  const colorOption4 = document.getElementById("option4").checked;
  const colorOption5 = document.getElementById("option5").checked;
  const colorOption6 = document.getElementById("option6").checked;
  const colorOption7 = document.getElementById("option7").checked;

  let color = "";
  if (colorOption1) {
    color = "#607EAA";
  } else if (colorOption2) {
    color = "#AC7088";
  } else if (colorOption3) {
    color = "#EED180";
  } else if (colorOption4) {
    color = "#90C8AC";
  } else if (colorOption5) {
    color = "#90C8AC";
  } else if (colorOption6) {
    color = "#D8CCA3";
  } else if (colorOption7) {
    color = "#82A284";
  }
  if (!inputDate || !inputTime || !inputTodo) {
    return alert("Masukkan data terlebih dahulu");
  }
  const newTask = {
    id: todoList.length + 1,
    date: inputDate,
    time: inputTime,
    todo: inputTodo,
    color,
  };
  todoList.splice(index, 1, newTask);
  document.querySelector(".btn-primary").style.display = "block";
  document.getElementById("editBuku").remove();
  clearForm();
  showLists(todoList);
};
