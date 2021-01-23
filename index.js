const tables = [
  {
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 25,
    tasksFinished: 25,
    topic: "java script",
  },
  {
    startedAt: new Date("2021-01-20:14:30"),
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 20,
    tasksFinished: 15,
    topic: "Objects",
  },
  {
    startedAt: new Date("2021-01-20:10:00"),
    finishedAt: new Date("2021-01-20:12:00"),
    tasksGiven: 30,
    tasksFinished: 20,
    topic: "Arrays",
  },
  {
    startedAt: new Date("2021-01-20:9:00"),
    finishedAt: new Date("2021-01-20:15:30"),
    tasksGiven: 24,
    tasksFinished: 0,
    topic: "Conditions",
  },
  {
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:12:30"),
    tasksGiven: 16,
    tasksFinished: 8,
    topic: "Loops",
  },
  {
    startedAt: new Date("2021-01-20:09:00"),
    finishedAt: new Date("2021-01-20:16:00"),
    tasksGiven: 10,
    tasksFinished: 3,
    topic: "more HTML",
  },
  {
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:12:00"),
    tasksGiven: 25,
    tasksFinished: 20,
    topic: "Github",
  },
  {
    startedAt: new Date("2021-01-20:16:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    tasksGiven: 28,
    tasksFinished: 18,
    topic: "CSS",
  },
  {
    startedAt: new Date("2021-01-20:15:00"),
    finishedAt: new Date("2021-01-20:20:00"),
    tasksGiven: 24,
    tasksFinished: 20,
    topic: "HTML",
  },
  {
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 25,
    tasksFinished: 25,
    topic: "java script",
  },
];

// time formater ->  HH:MM
function dateFormater(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (Number(minutes) < 10) minutes = "0" + minutes;
  if (Number(hours) < 10) hours = "0" + hours;
  return hours + ":" + minutes;
}

function createTable(tableData) {
  const tab = document.createElement("table");
  let tableHeader = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  //table header
  let header = Object.keys(tables[0]);
  let thr = document.createElement("tr");
  for (key of header) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    thr.appendChild(th);
  }
  tableHeader.appendChild(thr);
  tab.appendChild(tableHeader);

  //table body
  tableData.forEach(function (rowData) {
    let row = document.createElement("tr");
    for (let [key, value] of Object.entries(rowData)) {
      let cell = document.createElement("td");
      if (value instanceof Date)
        cell.appendChild(document.createTextNode(dateFormater(value)));
      else cell.appendChild(document.createTextNode(value));
      if(key === "totalTime") cell.style.backgroundColor = getColor(value);
      if(key === "tasksFinishedPrecent") cell.style.backgroundColor = getColor1(value);
        
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  });
  tab.appendChild(tableBody);
  document.body.appendChild(tab);
}
let colorScheme = [
    {val: 2 ,color: '#ff3399'},
    {val: 5, color: '#ff9966'},]

function getColor(x){
    for(let i = 0; i < colorScheme.length; i++)
    {
        if(x <= colorScheme[i]["val"])
        {
            return colorScheme[i]["color"]
        }  
    }
    return "#cc3399"
} 
let colorscheme1 = [
    {val: 50 ,color: "#6699ff"},
    {val: 75 , color: "#009999"},]

    function getColor1(y) {
        console.log(colorscheme1)
        for(let i = 0; i < colorscheme1.length; i++)
        {
            if(y <= colorscheme1[i]["val"])
            {
                return colorscheme1[i]["color"]
            }  
        }
        return "#00cc66"  
    }


for (tableArr of tables) {
  tableArr.totalTime = Math.floor(
    (tableArr.finishedAt - tableArr.startedAt) / 1000 / 60 / 60
  );

  tableArr.tasksFinishedPrecent = Math.floor(
    (tableArr.tasksFinished / tableArr.tasksGiven) * 100
  );
}

createTable(tables);
