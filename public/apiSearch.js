const apiSearchForm = document.getElementById("api-search-form");
const returnList = document.getElementById("api-return-list");
let retDataResults;

interestByRegionSearch = e => {
  e.preventDefault();
  const searchParam = document.querySelector("[name=search-param]").value;
  const url = document.location.origin + "/interestByRegion/" + searchParam;
  fetch(url)
    .then(data =>
      data.json().then(retData => {
        // console.log(retData);
        // console.log(retData.default.geoMapData);
        retDataResults = retData.default.geoMapData;
        createTrendResults(retDataResults, returnList);
    })
    )
    .catch(err => console.log(err));
    e.target.reset();
};

createTrendResults = (returnData, htmlElement) => {
    // debugger;
    // let listItem;
    // console.log(returnData);
    // console.log(htmlElement);
    returnData.map(trendItem => {
        listItem = document.createElement("li");
        listItem.innerHTML = trendItem.geoName + ' ' + trendItem.value
        // listItem.innerHTML = trendItem.value
        htmlElement.appendChild(listItem);
        console.log(polygonTemplate);
        // if (trendItem.value > 90 && trendItem.value <= 100) {
        //     let activeState = polygonTemplate.state.create('active');
        //     activeState.properties.fill = chart.colors.getIndex(4);
        // };
    });
};
// createTrendResults(retDataResults, returnList);
// console.log(retDataResults)
apiSearchForm.addEventListener("submit", interestByRegionSearch);
