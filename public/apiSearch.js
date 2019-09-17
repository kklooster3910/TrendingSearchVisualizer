// import am4core from './mapScript';
// const map = require("./mapScript");

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
        // console.log(retDataResults);
        createTrendResults(retDataResults, returnList);
      })
    )
    .catch(err => console.log(err));
    // console.log('something')
    //create div/p tag and append it to an htmlelement
    // find the element/spinner/loader inside of the fetch
    // remove loading element from htlml element either inside
    // createTrend results .then
  e.target.reset();
};

createTrendResults = (returnData, htmlElement) => {
  // debugger;
  // let listItem;
  // console.log(returnData);
  // console.log(htmlElement);
  // let hoverState = columnSeries.columns.template.state.create('hover');

  am4core.ready(function() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;
    // console.log(chart.geodata);
    // Set projection
    chart.projection = new am4maps.projections.NaturalEarth1();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.mapPolygons.template.strokeWidth = 0.5;

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);

    polygonSeries.calculateVisualCenter = true;
    polygonTemplate.tooltipPosition = "fixed";
    // polygonSeries.getElementById("US")
    // console.log(polygonSeries.getPolygonById("US"));
    
    // console.log(am4maps.mapPolygonSeries.getPolygonById('FR'));
    // var france = polygonSeries.getPolygonById("FR");
    // console.log(france)
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = chart.colors.getIndex(2);
 
    // Create active state
    // var activeState = polygonTemplate.states.create("active");
    // activeState.properties.fill = chart.colors.getIndex(4);

    // Create an event to toggle "active" state
    // polygonTemplate.events.on("focus", function(ev) {
    //   ev.target.isActive = !ev.target.isActive;
    // });
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    // console.log(polygonSeries.mapPolygons);
    console.log(polygonTemplate.state)
    returnData.map(trendItem => {
      listItem = document.createElement("li");
      // console.log(trendItem)
      listItem.innerHTML = trendItem.geoName + " " + trendItem.value;
      // listItem.innerHTML = trendItem.value
      htmlElement.appendChild(listItem);
      if (trendItem.value >= 0) {
        chart.geodata.features.forEach((country, idx) => {
          
          // country.properties.isHover = true;
          // console.log(country);
          // // console.log(country.data);
          // console.log(polygonSeries);
          // console.log(polygonSeries.data);
          // polygonSeries.data = [{
          //   "id": country.id,
          //   "name": country.properties.name,
          //   "value": 100,
          //   "fill": am4core.color("#F05C5C")
          // }]
          // let identifier = idx;
          if (country.id === trendItem.geoCode) {
            // console.log(country);
            // console.log(polygonSeries.data);
            let newObj;
            let color;
            if (trendItem.value > 95) {
              color = am4core.color("#239B56");
            } else if (trendItem.value > 85 && trendItem.value <= 95) {
              color = am4core.color("#2ECC71");
            } else if (trendItem.value > 75 && trendItem.value <= 85) {
              color = am4core.color("#F1C40F");
            } else if (trendItem.value > 65 && trendItem.value <= 75) {
              color = am4core.color("#F39C12");
            } else if (trendItem.value > 55 && trendItem.value <= 65) {
              color = am4core.color("#E67E22");
            } else if (trendItem.value > 45 && trendItem.value <= 55) {
              color = am4core.color("#D35400");
            } else if (trendItem.value > 35 && trendItem.value <= 45) {
              color = am4core.color("#C0392B");
            } else if (trendItem.value > 25 && trendItem.value <= 35) {
              color = am4core.color("#9B59B6");
            } else if (trendItem.value > 15 && trendItem.value <= 25) {
              color = am4core.color("#7D3C98");
            } else {
              color = am4core.color("#2C3E50");
            }
            newObj = {
              id: country.id,
              name: country.properties.name,
              value: trendItem.value,
              fill: color
            };
            polygonSeries.data.push(newObj)
            // polygonSeries.data = [
            //   {
            //     id: country.id,
            //     name: country.properties.name,
            //     value: trendItem.value,
            //     fill: am4core.color("#F05C5C"),
            //     [idx]: true,
            //   },
              // {
              //   id: "FR",
              //   name: "France",
              //   value: 98,
              //   fill: am4core.color("#F05C5C")
              // },
            // ];
            // let count = polygonSeries.getPolygonById(country.id);
            // var france = polygonSeries.getPolygonById("FR");
            // console.log(count);
            // console.log(france);
            // console.log(country.id.toString());
            // console.log(polygonSeries);
            // console.log(polygonSeries.getPolygonById("FR"));
            // let count = polygonSeries.getPolygonByID(country.id)
            // console.log.log(count)
            // console.log(polygonTemplate.propertyFields);
            // polygonTemplate.propertyFields.hover = "hover";
          }
          // console.log(polygonSeries.data);
        });
      }
      // console.log(polygonTemplate);
      // if (trendItem.value > 90 && trendItem.value <= 100) {
        //     let activeState = polygonTemplate.state.create('active');
        //     activeState.properties.fill = chart.colors.getIndex(4);
        // };
      });
      // polygonTemplate.propertyFields.fill = "fill";
      polygonTemplate.propertyFields.fill = "fill";
    });
};
// createTrendResults(retDataResults, returnList);
// console.log(retDataResults)
apiSearchForm.addEventListener("submit", interestByRegionSearch);
