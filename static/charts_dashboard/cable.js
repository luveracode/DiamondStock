
let cable_total_spend_jsonObject = {};
try {
    let cable_total_spend_spares_quarter_values = $('#Cable_total_spend_spares_quarter_values').text()
    cable_total_spend_jsonObject = JSON.parse(cable_total_spend_spares_quarter_values);
} catch (error) {
    cable_total_spend_jsonObject = {}
}
let cable_total_spend_quarter_keys = Object.keys(cable_total_spend_jsonObject);
let cable_total_spend_quarter_values = Object.values(cable_total_spend_jsonObject);


let totalSpendCableChart = document.getElementById("totalSpendCableChart");

totalSpendCableChart.width = 300;
totalSpendCableChart.height = 130;

let totalSpendCableChartCtx = totalSpendCableChart.getContext("2d");
let dataCableValues = cable_total_spend_quarter_values;
let totalSpendCableChart_data = new Chart(totalSpendCableChartCtx, {
    type: "line",
    data: {
        labels: cable_total_spend_quarter_keys,
        datasets: [
            {
                label: "",
                borderColor: "white",
                barPercentage: 5,
                data: dataCableValues,
                pointBackgroundColor: dataCableValues.map((value, index) => index === dataCableValues.length - 1 ? 'red' : 'blue'),
                fill: false,
                borderWidth: 3,
                pointRadius: dataCableValues.map((value, index) => index === dataCableValues.length - 1 ? 5 : 2),
            }
        ]
    },
    options: {
        title: {
            text: "Gross Volume in 2020",
            display: true,
        },
        plugins: {
            datalabels: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        legend: {
            display: false
        }
    }
});


let cable_avg_spend_convert_json = {};
try {
    let cable_avg_spend_quarter_values = $('#Cable_avg_spend_quarter_values').text()
    cable_avg_spend_convert_json = JSON.parse(cable_avg_spend_quarter_values)
} catch (error) {
    cable_avg_spend_convert_json = {}
}
let cable_avg_spend_convert_key_values = Object.keys(cable_avg_spend_convert_json)
let cable_avg_spend_convert_values = Object.values(cable_avg_spend_convert_json)


let cable_avgSpend = document.getElementById("Cable_avg_spend");

cable_avgSpend.width = 300;
cable_avgSpend.height = 130;

let cable_avgSpendCtx = cable_avgSpend.getContext("2d");
let cable_dataAvgSpendValues = cable_avg_spend_convert_values;
let cable_avgSpend_Chart = new Chart(cable_avgSpendCtx, {
    type: "line",
    data: {
        labels: cable_avg_spend_convert_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: cable_dataAvgSpendValues,
                fill: false,
                pointBackgroundColor: cable_dataAvgSpendValues.map((value, index) => index === cable_dataAvgSpendValues.length - 1 ? 'red' : 'blue'),
                pointRadius: cable_dataAvgSpendValues.map((value, index) => index === cable_dataAvgSpendValues.length - 1 ? 5 : 2),
                borderWidth: 3

            }
        ]
    },
    options: {
        title: {
            text: "Gross Volume in 2020",
            display: true,
        },
        plugins: {
            datalabels: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        legend: {
            display: false
        }
    }
});

let cable_avg_moq_convert_json = {}
try {
    let cable_avg_moq_quarter_values = $('#Cable_avg_moq_quarter_values').text()
    cable_avg_moq_convert_json = JSON.parse(cable_avg_moq_quarter_values)
} catch (error) {
    cable_avg_moq_convert_json = {}
}
let cable_avg_moq_key_values = Object.keys(cable_avg_moq_convert_json)
let cable_avg_moq_values = Object.values(cable_avg_moq_convert_json)

let cable_avgMoq = document.getElementById("Cable_avg_moq");

cable_avgMoq.width = 300;
cable_avgMoq.height = 130;

let cable_avgMoqCtx = cable_avgMoq.getContext("2d");
let cable_avgDataValues = cable_avg_moq_values;
let cable_avgMoqCtx_Chart = new Chart(cable_avgMoqCtx, {
    type: "line",
    data: {
        labels: cable_avg_moq_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: cable_avgDataValues,
                fill: false,
                pointBackgroundColor: cable_avgDataValues.map((value, index) => index === cable_avgDataValues.length - 1 ? 'red' : 'blue'),
                pointRadius: cable_avgDataValues.map((value, index) => index === cable_avgDataValues.length - 1 ? 5 : 2),
                borderWidth: 3

            }
        ]
    },
    options: {
        title: {
            text: "Gross Volume in 2020",
            display: true,
        },
        plugins: {
            datalabels: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        legend: {
            display: false
        }
    }
});

let cable_convert_json_category_data = {}
try {
    let cable_product_category_data = $('#Cable_product_category_data').text();
    cable_convert_json_category_data = JSON.parse(cable_product_category_data.replace(/'/g, '"'));
} catch (error) {
    cable_convert_json_category_data = {}
}
let cable_product_category_data_keys = Object.keys(cable_convert_json_category_data);
let cable_product_category_data_values = Object.values(cable_convert_json_category_data);

var cable_xValues = cable_product_category_data_keys;
var cable_yValues = cable_product_category_data_values;


var barColors = [];
for (var i = 0; i < cable_yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}

new Chart("Cable_myChart", {
    type: "bar",
    data: {
        labels: cable_xValues,
        datasets: [{
            label: "Commodity Classification Data",
            backgroundColor: barColors,
            data: cable_yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Commodity Classification Data Chart"
        },
        // Wrap the options in an 'options' property
        layout: {
            padding: {
                left: 0,
                right: 0,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        // Set height and width
        height: 400,
        width: 1000
    }
});


let cable_convert_json_coospares_data = {}
try {
    let cable_coospares_data_values = $('#Cable_coospares_data_values').text()
    cable_convert_json_coospares_data = JSON.parse(cable_coospares_data_values.replace(/'/g, '"'));
} catch (error) {
    cable_convert_json_coospares_data = {};
}



am4core.ready(function () {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    var chart = am4core.create("Cable_donutChart", am4charts.PieChart);
    chart.data = Object.entries(cable_convert_json_coospares_data).map(([key, value]) => ({
        channel: key,
        spend: value
    }));

    chart.innerRadius = am4core.percent(50);

    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "spend";
    pieSeries.dataFields.category = "channel";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.slices.template.tooltipText = "$ {value}";

    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

});


/*let cable_xValuesData = Object.keys(cable_convert_json_coospares_data)
let cable_yValuesData = Object.values(cable_convert_json_coospares_data)

// console.log(xValuesData, 'datas getting')
// console.log(yValuesData, 'datas yValuesData')
let cable_totalSum = cable_yValuesData.reduce((acc, currentValue) => acc + currentValue, 0);
let cable_percentageValues = cable_yValuesData.map(value => ((value / totalSum) * 100).toFixed(2));




var cable_xValues = cable_xValuesData;
var cable_yValues = cable_percentageValues;
var barColors = [];

// Generating random colors
for (var i = 0; i < cable_yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}

new Chart("Cable_donutChart", {
    type: "doughnut",
    data: {
        labels: cable_xValues,
        datasets: [{
            backgroundColor: barColors,
            data: cable_yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                    return percentage + "%";
                }
            }
        }
    }
});

*/


try {
    let cable_product_tend_with_quarter_category = $('#Cable_product_tend_with_quarter_category').text();
    cable_product_tend_with_quarter_category = cable_product_tend_with_quarter_category.replace(/'/g, '"');
}
catch (error) {
    cable_product_tend_with_quarter_category = {};
}

// Replace single quotes with double quotes

// console.log(product_tend_with_quarter_category);
// let getting_keys = Object.values(product_tend_with_quarter_category)
// console.log('getting the datas', getting_keys)

/*
const cable_ctx = document.getElementById('Cable_areaChart').getContext('2d');

const cable_myChart = new Chart(cable_ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 75, 35, 20, 55, 80, 65],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                fill: false
            },
            {
                label: 'Dataset 2',
                data: [80, 45, 60, 55, 30, 70, 85],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                fill: false
            }
        ]
    },
    options: {
        plugins: {
            filler: {
                propagate: true
            }
        }
    }
}); 
*/
const cable_labels = $('#Cable_total_quarter_values_cm').text().trim();
const cable_cleanedData = cable_labels.replace(/^\[|\]$/g, '');
const cablelabelsArray = cable_cleanedData.split(',').map(label => {
    return label.trim().replace(/^["']|["']$/g, '');
});

const cableinputString = $('#Cable_trend_cm_category_data').text().trim();

// Parse the JSON string into a JavaScript object
const cableparsedData = JSON.parse(cableinputString.replace(/'/g, '"'));

// Extract keys and values from the parsed object
const cable_keys = Object.keys(cableparsedData);
const cable_values = Object.values(cableparsedData);

// Generate unique colors for each label
let cable_colors = [];
if (cable_keys.length > 0) {
    cable_colors = cablegenerateUniqueColors(cable_keys.length);
    // console.log('Cable colors generated:', cable_colors);
} else {
    console.error('Insufficient data: Either cable_keys or cable_values length is not greater than 1.');
}

// Prepare datasets for Chart.js
let cable_totalSum_data = cable_values.reduce((acc, currentValue) => acc + currentValue, 0);

// Calculate percentage values based on total sum
let cable_percentageValues_data = cable_values.map(value => {
    if (typeof value !== 'number' || isNaN(value)) {
        console.error(`Invalid value detected: ${value}`);
        return NaN; // Handle invalid values (e.g., NaN, non-numeric values)
    }

    const cable_percentage = (value / cable_totalSum_data) * 100;
    // console.log(`Value: ${value}, Total Sum: ${cable_totalSum_data}, Percentage: ${cable_percentage}`);
    return cable_percentage.toFixed(2);
});

// Debugging output to inspect data and calculations
// console.log(cable_percentageValues_data, cable_totalSum_data, "data")
const cable_datasets = cable_keys.map((key, index) => ({
    label: key,
    data: [cable_percentageValues_data[index]], // corrected to use the index to match key with data
    borderColor: cable_colors[index],
    backgroundColor: cable_colors[index], // You can also set different background colors if needed
    fill: false
}));

// Function to generate unique colors
function cablegenerateUniqueColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = (i * (360 / count)) % 360; // Spread hues evenly across the color wheel
        const color = `hsl(${hue}, 70%, 50%)`; // Use HSL color format for unique colors
        colors.push(color);
    }
    return colors;
}

// Create a new Chart.js instance
const cablectx = document.getElementById('Cable_areaChart').getContext('2d');
const cablemyChart = new Chart(cablectx, {
    type: 'line',
    data: {
        labels: cablelabelsArray,
        datasets: cable_keys.length > 0 ? cable_datasets : ''
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Quarter',
                    color: 'black'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value in Millions',
                    color: 'black'
                }
            }
        }
    }
});




