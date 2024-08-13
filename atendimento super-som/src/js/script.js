const weekdaylist = document.querySelectorAll("#weekday")
const btdropdown = document.querySelector("#bt-dropdown")
const agendamentos = []
const horarios = createArrayOfHours()
const workspaceatendimentos = document.querySelector("#div-workspace-atendimento")
let texto = ""

for (let i = 0; i < 5; i++) {
  agendamentos.push([])

  for (let j = 0; j < horarios.length; j++) {
    agendamentos[i].push({
      horario: horarios[j]
    });

  }

}

weekdaylist.forEach((value) => {
  value.addEventListener("click", () => {
    texto = value.innerText
    btdropdown.innerText = texto
  })
})

agendamentos[0].forEach((value) => {
  const item = CreateItem(value.horario, 0)
  workspaceatendimentos.appendChild(item)

  if (value.horario.includes('11:30')) {
    workspaceatendimentos.appendChild(CreateItemLunch())
  }
})

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function createArrayOfHours() {
  const arrayHours = [];

  for (let i = 8; i <= 18; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 12) break;
      if (i === 13 && j === 0) continue;
      if (i === 18 && j === 1) continue;

      arrayHours.push(`${i.toString().padStart(2, '0')}:${(j * 3).toString().padEnd('2', '0')} ${i <= 12 ? 'AM' : 'PM'}`);
    }
  }

  return arrayHours;
}

function CreateItem(horario, clientes) {
  const item = document.createElement("div")
  item.classList.add("item-hour")
  const hour = document.createElement("strong")
  hour.innerText = horario
  const span = document.createElement("span")
  const paragraph = document.createElement("p")
  paragraph.innerText = "Cliente (ver detalhes)"

  item.appendChild(hour)
  item.appendChild(span)
  item.appendChild(paragraph)

  return item
}

function CreateItemLunch() {
  const item = document.createElement("div")
  item.classList.add("item-hour")
  const hour = document.createElement("strong")
  hour.innerText = "Almoço"
  const span = document.createElement("span")
  const paragraph = document.createElement("p")
  paragraph.innerText = "Intervalo"

  item.appendChild(hour)
  item.appendChild(span)
  item.appendChild(paragraph)

  return item
}