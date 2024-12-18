
// let totalSpendCableChart = document.getElementById("totalSpendCableChart");
// let total_spend_values = $('#totalSpendValues').text()
// const cabelSpendparsedData = JSON.parse(total_spend_values);

// const cableKeys = Object.keys(cabelSpendparsedData);
// const cableValues = Object.values(cabelSpendparsedData);
// const total = cableValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // console.log('totoal', total)
// $('#total_spend_counts').text('$ ' + total)

// let total_spend_avg_values = $('#totalAvgSpendValues').text()
// const cabelAvgSpendparsedData = JSON.parse(total_spend_avg_values);

// const cableAvgKeys = Object.keys(cabelAvgSpendparsedData);
// const cableAvgValues = Object.values(cabelAvgSpendparsedData);
// const cableAvgtotal = cableAvgValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // console.log('totoal', total)
// $('#total_avg_spend_counts').text('$ ' + cableAvgtotal)

// let total_spend_avgMOQ_values = $('#totalAvgMoqValues').text()
// const cabelNOQAvgSpendparsedData = JSON.parse(total_spend_avgMOQ_values);

// const cableMOQAvgKeys = Object.keys(cabelNOQAvgSpendparsedData);
// const cableMOQAvgValues = Object.values(cabelNOQAvgSpendparsedData);
// const cableMOQAvgtotal = cableMOQAvgValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // console.log('totoal', total)
// $('#total_avg_moq_data').text('$ ' + cableMOQAvgtotal)


// const supplierSpendData = $('#treeMapSupllierSpend').text()
// const supplierSpendDataString = supplierSpendData.replace(/'/g, '"');
// const spendDataConvertJson = JSON.parse(supplierSpendDataString)

// const categoryBreakUpSpend = $('#categoryBreakUp').text()
// const jsonString = categoryBreakUpSpend.replace(/'/g, '"');
// // console.log('this is getting datas', jsonString)
// const categoryUpSpendConvertJson = JSON.parse(jsonString)


// const categoryKeys = Object.keys(categoryUpSpendConvertJson);
// const categoryValues = Object.values(categoryUpSpendConvertJson);

// // console.log('this is getting data', categoryKeys)
// // console.log('this is getting data', categoryValues)
// // const cableData = { total_spend_data_counts }
// // const keysArray = Object.keys(cableData);
// // const valuesArray = Object.values(cableData);


// const cable_data_quote_raised = $('#cable_data_quote_raised').val()
// const cable_data_quote_not_raised = $('#cable_data_quote_not_raised').val()
// const cable_data_not_raised = $('#cable_data_not_raised').val()

// const cable_data_rfq_raised = $('#cable_data_rfq_raised').val()
// const cable_data_rfq_not_raised = $('#cable_data_rfq_not_raised').val()

// console.log(cable_data_rfq_raised)
// console.log(cable_data_rfq_not_raised)

// totalSpendCableChart.width = 300;
// totalSpendCableChart.height = 130;

// let totalSpendCableChartCtx = totalSpendCableChart.getContext("2d");
// let dataCableValues = cableValues;
// let totalSpendCableChart_data = new Chart(totalSpendCableChartCtx, {
//     type: "line",
//     data: {
//         labels: cableKeys,
//         datasets: [
//             {
//                 label: "",
//                 borderColor: "white",
//                 barPercentage: 5,
//                 data: dataCableValues,
//                 pointBackgroundColor: dataCableValues.map((value, index) => index === dataCableValues.length - 1 ? 'red' : 'blue'),
//                 fill: false,
//                 borderWidth: 3,
//                 pointRadius: dataCableValues.map((value, index) => index === dataCableValues.length - 1 ? 5 : 2),
//             }
//         ]
//     },
//     options: {
//         title: {
//             text: "Gross Volume in 2020",
//             display: true,
//         },
//         plugins: {
//             datalabels: {
//                 display: false
//             }
//         },
//         scales: {
//             x: {
//                 display: false
//             },
//             y: {
//                 display: false
//             }
//         },
//         legend: {
//             display: false
//         }
//     }
// });


// let cableAvgSpend = document.getElementById("cable_avg_spend");

// cableAvgSpend.width = 300;
// cableAvgSpend.height = 130;

// let cableAvgSpendCtx = cableAvgSpend.getContext("2d");
// let dataCableAvgSpendValues = cableAvgValues;
// let avgCableSpend_Chart = new Chart(cableAvgSpendCtx, {
//     type: "line",
//     data: {
//         labels: cableAvgKeys,
//         datasets: [
//             {
//                 label: "",
//                 borderColor: "white",
//                 data: dataCableAvgSpendValues,
//                 fill: false,
//                 pointBackgroundColor: dataCableAvgSpendValues.map((value, index) => index === dataCableAvgSpendValues.length - 1 ? 'red' : 'blue'),
//                 pointRadius: dataCableAvgSpendValues.map((value, index) => index === dataCableAvgSpendValues.length - 1 ? 5 : 2),
//                 borderWidth: 3

//             }
//         ]
//     },
//     options: {
//         title: {
//             text: "Gross Volume in 2020",
//             display: true,
//         },
//         plugins: {
//             datalabels: {
//                 display: false
//             }
//         },
//         scales: {
//             x: {
//                 display: false
//             },
//             y: {
//                 display: false
//             }
//         },
//         legend: {
//             display: false
//         }
//     }
// });

// let avgCableMoq = document.getElementById("cable_avg_moq");

// avgCableMoq.width = 300;
// avgCableMoq.height = 130;

// let avgCableMoqCtx = avgCableMoq.getContext("2d");
// let avgCableDataValues = cableMOQAvgValues;
// let avgCableMoqCtx_Chart = new Chart(avgCableMoqCtx, {
//     type: "line",
//     data: {
//         labels: cableMOQAvgKeys,
//         datasets: [
//             {
//                 label: "",
//                 borderColor: "white",
//                 data: avgCableDataValues,
//                 fill: false,
//                 pointBackgroundColor: avgCableDataValues.map((value, index) => index === avgCableDataValues.length - 1 ? 'red' : 'blue'),
//                 pointRadius: avgCableDataValues.map((value, index) => index === avgCableDataValues.length - 1 ? 5 : 2),
//                 borderWidth: 3

//             }
//         ]
//     },
//     options: {
//         title: {
//             text: "Gross Volume in 2020",
//             display: true,
//         },
//         plugins: {
//             datalabels: {
//                 display: false
//             }
//         },
//         scales: {
//             x: {
//                 display: false
//             },
//             y: {
//                 display: false
//             }
//         },
//         legend: {
//             display: false
//         }
//     }
// });


// var xCableValues = categoryKeys;
// var yCableValues = categoryValues;
// var barColors = [];

// for (var i = 0; i < xCableValues.length; i++) {
//     var randomColor = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',1)';
//     barColors.push(randomColor);
// }

// var category_break_options = {
//     series: [{
//         data: yCableValues
//     }],
//     chart: {
//         height: 400,
//         width: 850,
//         type: 'bar',
//         events: {
//             click: function (chart, w, e) {
//                 // console.log(chart, w, e)
//             }
//         }
//     },
//     colors: barColors,
//     plotOptions: {
//         bar: {
//             columnWidth: '8%',
//             distributed: true,
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     legend: {
//         show: false
//     },
//     xaxis: {
//         categories: xCableValues,
//         labels: {
//             style: {
//                 colors: barColors,
//                 fontSize: '12px'
//             }
//         }
//     }
// };

// var cable_product_chart = new ApexCharts(document.querySelector("#cableProductCategorySpend"), category_break_options);
// cable_product_chart.render();
// /*
// new Chart("cableProductCategorySpend", {
//     type: "bar",
//     data: {
//         labels: xCableValues,
//         datasets: [{
//             borderWidth: 3,
//             backgroundColor: barColors,
//             data: yCableValues,
//             barThickness: 40,
//             label: 'Category'
//         }]
//     },
//     options: {
//         legend: { display: true },
//         title: {
//             display: true,
//             text: "World Wine Production 2018"
//         },
//         scales: {
//             xAxes: [{
//                 barPercentage: 0.5,
//                 categoryPercentage: 0.7,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Category'
//                 }
//             }],
//             yAxes: [{
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Values'
//                 }
//             }]
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//             callbacks: {
//                 label: function (tooltipItem, data) {
//                     var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
//                     return datasetLabel + ': ' + tooltipItem.yLabel;
//                 }
//             }
//         }
//     }
// });
// */



// var xCableDonutValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yCableDonutValues = [55, 49, 44, 24, 15];
// var barColors = [
//     "#b91d47",
//     "#00aba9",
//     "#2b5797",
//     "#e8c3b9",
//     "#1e7145"
// ];

// new Chart("donutCableChart", {
//     type: "doughnut",
//     data: {
//         labels: xCableDonutValues,
//         datasets: [{
//             backgroundColor: barColors,
//             data: yCableDonutValues
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: "World Wide Wine Production 2018"
//         }
//     }
// });



// const seriesData = Object.entries(spendDataConvertJson).map(([key, value]) => ({
//     x: key,
//     y: value
// }));

// // Sort the array based on spend values in descending order
// seriesData.sort((a, b) => b.y - a.y);

// var barColors = [];

// for (var i = 0; i < seriesData.length; i++) {
//     var randomColor = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',0.8)';
//     barColors.push(randomColor);
// }

// var optionsTreeMap = {
//     series: [
//         {
//             data: seriesData
//         }
//     ],
//     legend: {
//         show: false
//     },
//     chart: {
//         height: 350,
//         type: 'treemap'
//     },
//     title: {
//         text: 'Supplier Treemap by Spend',
//         align: 'center'
//     },
//     colors: barColors,
//     plotOptions: {
//         treemap: {
//             distributed: true,
//             enableShades: false
//         }
//     }
// };

// var chart = new ApexCharts(document.querySelector("#treeMapCableChart"), optionsTreeMap);
// chart.render();


// var cableAreaChart = {
//     series: [{
//         name: 'series1',
//         data: [31, 40, 28, 51, 42, 109, 100]
//     }, {
//         name: 'series2',
//         data: [11, 32, 45, 32, 34, 52, 41]
//     }],
//     chart: {
//         height: 350,
//         type: 'area'
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: 'smooth'
//     },
//     xaxis: {
//         type: 'datetime',
//         categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//     },
//     tooltip: {
//         x: {
//             format: 'dd/MM/yy HH:mm'
//         },
//     },
// };

// var chart = new ApexCharts(document.querySelector("#cableAreaChart"), cableAreaChart);
// chart.render();


// // console.log('getting values', categoryValues)
// var cableDonutoptions = {
//     series: categoryValues,
//     chart: {
//         type: 'donut',
//         width: '550',
//         height: '600',
//     },
//     labels: categoryKeys,
//     dataLabels: {
//         enabled: true,
//         formatter: function (val) {
//             return val.toFixed(2) + '%';
//         },
//         dropShadow: {
//             enabled: false
//         },
//         value: '%'
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 300
//             },
//             legend: {
//                 position: 'bottom'
//             }
//         }
//     }]
// };

// var dounutchart = new ApexCharts(document.querySelector("#donutCableChart"), cableDonutoptions);
// dounutchart.render();

// // Get the context of the canvas element
// var cablePieChart = document.getElementById('cable_pieChart_quoted').getContext('2d');

// // Define the data for the pie chart
// var data = {
//     labels: ['Quoted ', 'Not Quoted', 'No Bid'],
//     datasets: [{
//         data: [parseInt(cable_data_quote_raised), parseInt(cable_data_quote_not_raised), parseInt(cable_data_not_raised)], // Values for each category
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each slice
//     }]
// };

// // Configure the options for the pie chart
// var options = {
//     responsive: true,
//     maintainAspectRatio: false,
// };

// // Create the pie chart
// var myPieChart = new Chart(cablePieChart, {
//     type: 'pie',
//     data: data,
//     options: options
// });



// // Get the context of the canvas element
// var cableRFQRaisedctx = document.getElementById('myPieChart').getContext('2d');

// // Define the data for the pie chart
// var data = {
//     labels: ['RFQ Raised ', 'Not Raised'],
//     datasets: [{
//         data: [parseInt(cable_data_rfq_raised), parseInt(cable_data_rfq_not_raised)], // Values for each category
//         backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each slice
//     }]
// };

// // Configure the options for the pie chart
// var options = {
//     responsive: true,
//     maintainAspectRatio: false,
// };

// // Create the pie chart
// var myPieChart = new Chart(cableRFQRaisedctx, {
//     type: 'pie',
//     data: data,
//     options: options
// });

