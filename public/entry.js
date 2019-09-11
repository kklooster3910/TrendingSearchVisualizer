// const googleTrends = require('google-trends-api');
// const HttpsProxyAgent = require('https-proxy-agent')

// let proxyAgent = new HttpsProxyAgent('https://proxy-host:8888/');

// let query = {
//     keyword: 'Women\'s march',
//     agent: proxyAgent
// };

// console.log(query)
// console.log(proxyAgent)

// googleTrends
//   .interestOverTime(query)
//   .then(res => {
//     console.log("results: ", res);
//   })
//   .catch(err => {
//     console.log("oh no, you have an error:", err);
//   });

// googleTrends
// .interestOverTime(query)
// .then(function(results) {
//     console.log("These proxied results are incredible", results);
// })
// .catch(function(err) {
//     console.error(
//     "Oh no there was an error, double check your proxy settings",
//     err
//     );
// });

// Access-Control-Allow-Origin

// googleTrends
//   .interestOverTime({ keyword: "Women's march" })
//   .then(function(results) {
//     console.log("These results are awesome", results);
//   })
//   .catch(function(err) {
//     console.error("Oh no there was an error", err);
// });

// googleTrends.interestOverTime({ keyword: "Women's march" }, function(
//   err,
//   results
// ) {
//   if (err) console.error("there was an error!", err);
//   else console.log("my sweet sweet results", results);
// });
// const googleTrends_URL = `http://localhost:5000/interestOverTime/`;
// export const getGoogleTrendsData = keyword => {
//     return fetch(
//         ${googleTrends_URL}${keyword},
//         {
//             method: 'GET',
//             headers,
//         }
//     )
//     .then(res => res.json())
//     .then(data => data)
// }

console.log("working?")