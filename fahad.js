const data = [
  {
    rankCode: "A-1",
    gameName: "Olivia Garce",
    rankIcon: "⭐",
    adminRank: "Director",
    supervision: "-",
    status: "Active",
    points: "~~~",
    lastPromotion: "~~~",
    traineeStrikes: "",
    air1: "✔️",
    fto: "✔️",
    ia: "1A",
    discordName: "nnr2."
  },
  {
    rankCode: "A-2",
    gameName: "JACKSON Harly",
    rankIcon: "⭐⭐",
    adminRank: "Assistant Director",
    supervision: "-",
    status: "Active",
    points: "~~~",
    lastPromotion: "~~~",
    traineeStrikes: "",
    air1: "✔️",
    fto: "",
    ia: "1A",
    discordName: ""
  }
];

const tableBody = document.querySelector("#healthTable tbody");
const totalCount = document.getElementById("totalCount");

data.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.rankCode}</td>
    <td>${item.gameName}</td>
    <td>${item.rankIcon}</td>
    <td>${item.adminRank}</td>
    <td>${item.supervision}</td>
    <td><span class="active">${item.status}</span></td>
    <td>${item.points}</td>
    <td>${item.lastPromotion}</td>
    <td>${item.traineeStrikes}</td>
    <td>${item.air1}</td>
    <td>${item.fto}</td>
    <td>${item.ia}</td>
    <td>${item.discordName}</td>
  `;
  tableBody.appendChild(row);
});

totalCount.textContent = data.length;
