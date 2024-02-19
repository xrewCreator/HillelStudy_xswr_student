class Country {
  constructor(webdata) {
    let [
      {
        name: { common: nameVar },
        flag: flagVar,
        area: areaVar,
        capital: [capVar],
        latlng: [latVar, lonVar],
      },
    ] = webdata;

    this.name = nameVar;
    this.area = areaVar;
    this.flag = flagVar;
    this.capital = capVar;
    this.cap_lat = latVar;
    this.cap_lon = lonVar;
  }
}

// ------------------------- UI --------------------------

class UI {
  static displayCountries() {
    let list = Store.readCountries();
    $("#country-list").html("");
    list.forEach((country) => {
      UI.addCountryToTable(country);
    });
  }

  static addCountryToTable(country) {
    let table_rows = $("#country-list");
    table_rows.append(`
            <tr>
                <td>${country.flag}</td>
                <td>${country.name}</td>
                <td>${country.area}</td>
                <td>${country.capital}</td>
                <td><a href="" class="btn btn-danger delete">X</td>
            </tr>
        `);
  }

  static deleteRow(btn) {
    btn.parentElement.parentElement.remove();
  }

  static showError(message) {
    let div = $("<div></div>");
    div.attr("class", `alert alert-danger`);
    div.text(message);
    $("#search-country").before(div);

    setTimeout(() => {
      $(".alert").remove();
    }, 3000);
  }
}

// --------------------- Storing DATA -------------------
class Store {
  static addCountry(name) {
    $.ajax({
      type: "GET",
      url: `https://restcountries.com/v3.1/name/${name}`,
      dataType: "json",
    })
      .done(function (data) {
        let country = new Country(data);
        let arr = Store.readCountries();
        arr.push(country);
        localStorage.setItem("list", JSON.stringify(arr));
        UI.displayCountries();
      })
      .fail((xhr, status, error) => {
        UI.showError("this country is not found" + error);
      });
  }

  static readCountries() {
    let list = [];
    let storage = localStorage.getItem("list");
    if (storage !== null) {
      list = JSON.parse(storage);
    }
    return list;
  }

  static readCountries(name) {
    let arr = Store.readCountries();
    arr.forEach((country, index) => {
      if (country.name === name) {
        arr.splice(index, 1);
      }
    });
    localStorage.setItem("list", JSON.stringify(arr));
  }
}

$(".form-control").click(function (e) {
  e.preventDefault();
  let name = $("#country-name").val();
  console.log(name);
  Store.addCountry(name);
});

$(document).ready(() => UI.displayCountries());

$("#country-list").click(function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    // Store.removeCountry($(e.target).parent().parent().children().eq(1));
    Store.removeCountry(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent
    );
  }
});
