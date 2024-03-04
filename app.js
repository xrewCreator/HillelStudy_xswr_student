document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aspect")
    .addEventListener('change', function () {
      var selectedAgency = this.value;
      var url = 'https://api.spacexdata.com/v4/crew';

      fetch(url).then(function(data){
        return data.json();
      }).then(function (data) {
        displayCrewMembers(data, selectedAgency);
        
      });
    });
});

function displayCrewMembers(crewData, selectedAgency) {
  var crewListContainer = document.getElementById("list");
  crewListContainer.innerHTML = "";

  crewData.forEach(function(crewMember) {
    
    if (crewMember.agency === selectedAgency) {
      
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "mb-2");
      cardDiv.style.width = "16rem";
      var image = document.createElement("img");
      image.classList.add("card-img-center");
      image.src = crewMember.image;
      image.style.width = "90%";
      cardDiv.appendChild(image);
      var cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");
      var nameElement = document.createElement("h4");
      nameElement.classList.add("card-title");
      nameElement.textContent = crewMember.name;
      cardBodyDiv.appendChild(nameElement);
      var agencyElement = document.createElement("p");
      agencyElement.classList.add("card-text");
      agencyElement.textContent = "Agency" + crewMember.agency;
      cardBodyDiv.appendChild(agencyElement);
      var link = document.createElement("a");
      link.classList.add("btn", "btn-info");
      link.href = crewMember.wikipedia;
      link.textContent = "More information";
      link.target = "_blank";
      cardBodyDiv.appendChild(link);
      cardDiv.appendChild(cardBodyDiv);
      crewListContainer.appendChild(cardDiv);
    }
  });
};
