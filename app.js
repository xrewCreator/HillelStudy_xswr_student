class Accaunt {
  constructor(webdata) {
    let [{ name: nameVar, number: numberVar, id: idVar }] = webdata;

    this.name = nameVar;
    this.number = numberVar;
    this.id = idVar;
  }
}

class UI {
  static displayUser() {
    let list = Store.readUser();
    $("#user-list").html("");

    list.forEach((user) => {
      UI.addUserToTable(user);
    });
  }

  static addUserToTable(user) {
    let table_rows = $("#user-list");
    table_rows.append(`
            <tr>
                <td>${user.name}</td>
                <td>${user.number}</td>
                <td>${user.id}</td>
            </tr>
        `);
  }
}

class Store {
  static addUser(name) {
    let user = new Accaunt(data);
    let arr = Store.readUser();
    arr.push(user);

    localStorage.setItem("list", JSON.stringify(arr));
    UI.displayUser();
  }
  static readUser() {
    let list = [];

    let storage = localStorage.getItem("list");
    if (storage !== null) {
      list = JSON.parse(storage);
    }
    return list;
  }
}

$("#submit").click(function (e) {
  e.preventDefault();

  var input1 = $("#name").val();
  var input2 = $("#number").val();
  var input3 = $("#id").val();
  $("#user-list").append(`<tr>
  <td>${input1}</td>
  <td>${input2}</td>
  <td>${input3}</td>
</tr>`);
});

$(document).ready(() => UI.displayUser());
