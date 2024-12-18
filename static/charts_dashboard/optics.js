let optics_total_spend_jsonObject = {}

try {
    let optics_total_spend_spares_quarter_values = $('#Optics_total_spend_spares_quarter_values').text()
    optics_total_spend_jsonObject = JSON.parse(optics_total_spend_spares_quarter_values);
} catch (error) {
    optics_total_spend_jsonObject = {}
}

let optics_total_spend_quarter_keys = Object.keys(optics_total_spend_jsonObject);
let optics_total_spend_quarter_values = Object.values(optics_total_spend_jsonObject);

let totalSpendOpticsChart = document.getElementById("totalSpendOpticsChart");

totalSpendOpticsChart.width = 300;
totalSpendOpticsChart.height = 130;

let totalSpendOpticsChartCtx = totalSpendOpticsChart.getContext("2d");
let dataOpticsValues = optics_total_spend_quarter_values;
let totalSpendOpticsChart_data = new Chart(totalSpendOpticsChartCtx, {
    type: "line",
    data: {
        labels: optics_total_spend_quarter_keys,
        datasets: [
            {
                label: "",
                borderColor: "white",
                barPercentage: 5,
                data: dataOpticsValues,
                pointBackgroundColor: dataOpticsValues.map((value, index) => index === dataOpticsValues.length - 1 ? 'red' : 'blue'),
                fill: false,
                borderWidth: 3,
                pointRadius: dataOpticsValues.map((value, index) => index === dataOpticsValues.length - 1 ? 5 : 2),
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

let optics_avg_spend_convert_json = {}
try {
    let optics_avg_spend_quarter_values = $('#Optics_avg_spend_quarter_values').text()
    optics_avg_spend_convert_json = JSON.parse(optics_avg_spend_quarter_values)
} catch (error) {
    optics_avg_spend_convert_json = {}
}
let optics_avg_spend_convert_key_values = Object.keys(optics_avg_spend_convert_json)
let optics_avg_spend_convert_values = Object.values(optics_avg_spend_convert_json)


let optics_avgSpend = document.getElementById("Optics_avg_spend");

optics_avgSpend.width = 300;
optics_avgSpend.height = 130;

let optics_avgSpendCtx = optics_avgSpend.getContext("2d");
let optics_dataAvgSpendValues = optics_avg_spend_convert_values;
let optics_avgSpend_Chart = new Chart(optics_avgSpendCtx, {
    type: "line",
    data: {
        labels: optics_avg_spend_convert_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: optics_dataAvgSpendValues,
                fill: false,
                pointBackgroundColor: optics_dataAvgSpendValues.map((value, index) => index === optics_dataAvgSpendValues.length - 1 ? 'red' : 'blue'),
                pointRadius: optics_dataAvgSpendValues.map((value, index) => index === optics_dataAvgSpendValues.length - 1 ? 5 : 2),
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

let optics_avg_moq_convert_json = {}
try {
    let optics_avg_moq_quarter_values = $('#Optics_avg_moq_quarter_values').text()
    optics_avg_moq_convert_json = JSON.parse(optics_avg_moq_quarter_values)
} catch (error) {
    optics_avg_moq_convert_json = {}
}
let optics_avg_moq_key_values = Object.keys(optics_avg_moq_convert_json)
let optics_avg_moq_values = Object.values(optics_avg_moq_convert_json)

let optics_avgMoq = document.getElementById("Optics_avg_moq");

optics_avgMoq.width = 300;
optics_avgMoq.height = 130;

let optics_avgMoqCtx = optics_avgMoq.getContext("2d");
let optics_avgDataValues = optics_avg_moq_values;
let optics_avgMoqCtx_Chart = new Chart(optics_avgMoqCtx, {
    type: "line",
    data: {
        labels: optics_avg_moq_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: optics_avgDataValues,
                fill: false,
                pointBackgroundColor: optics_avgDataValues.map((value, index) => index === optics_avgDataValues.length - 1 ? 'red' : 'blue'),
                pointRadius: optics_avgDataValues.map((value, index) => index === optics_avgDataValues.length - 1 ? 5 : 2),
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

let optics_convert_json_category_data = {}
try {
    let optics_product_category_data = $('#Optics_product_category_data').text();
    optics_convert_json_category_data = JSON.parse(optics_product_category_data.replace(/'/g, '"'));
} catch (error) {
    optics_convert_json_category_data = {}
}

let optics_product_category_data_keys = Object.keys(optics_convert_json_category_data);
let optics_product_category_data_values = Object.values(optics_convert_json_category_data);

var optics_xValues = optics_product_category_data_keys;
var optics_yValues = optics_product_category_data_values;


var barColors = [];
for (var i = 0; i < optics_yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}

new Chart("Optics_myChart", {
    type: "bar",
    data: {
        labels: optics_xValues,
        datasets: [{
            label: "Commodity Classification Data",
            backgroundColor: barColors,
            data: optics_yValues
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

let optics_convert_json_coospares_data = {}
try {
    let optics_coospares_data_values = $('#Optics_coospares_data_values').text()
    optics_convert_json_coospares_data = JSON.parse(optics_coospares_data_values.replace(/'/g, '"'));
} catch (error) {
    optics_convert_json_coospares_data = {}
}


am4core.ready(function () {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    var chart = am4core.create("Optics_donutChart", am4charts.PieChart);
    chart.data = Object.entries(optics_convert_json_coospares_data).map(([key, value]) => ({
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



const optics_labels = $('#Optics_total_quarter_values_cm').text().trim();
const optics_cleanedData = optics_labels.replace(/^\[|\]$/g, '');
const opticslabelsArray = optics_cleanedData.split(',').map(label => {
    return label.trim().replace(/^["']|["']$/g, '');
});

const opticsinputString = $('#Optics_trend_cm_category_data').text().trim();

// Parse the JSON string into a JavaScript object
const opticsparsedData = JSON.parse(opticsinputString.replace(/'/g, '"'));

// Extract keys and values from the parsed object
const optics_keys = Object.keys(opticsparsedData);
const optics_values = Object.values(opticsparsedData);

// Generate unique colors for each label
const optics_colors = opticsgenerateUniqueColors(optics_keys.length);

// Prepare datasets for Chart.js
let optics_totalSum_data = optics_values.reduce((acc, currentValue) => acc + currentValue, 0);

// Calculate percentage values based on total sum
let optics_percentageValues_data = values.map(value => {
    if (typeof value !== 'number' || isNaN(value)) {
        // console.error(`Invalid value detected: ${value}`);
        return NaN; // Handle invalid values (e.g., NaN, non-numeric values)
    }

    const optics_percentage = (value / optics_totalSum_data) * 100;
    // console.log(`Value: ${value}, Total Sum: ${totalSum_data}, Percentage: ${percentage}`);
    return optics_percentage.toFixed(2);
});
// Debugging output to inspect data and calculations
// console.log(percentageValues_data, totalSum_data, "data")
const optics_datasets = keys.map((key, index) => ({
    label: key,
    data: optics_percentageValues_data,
    borderColor: colors[index],
    backgroundColor: colors[index], // You can also set different background colors if needed
    fill: false
}));


// Function to generate unique colors
function opticsgenerateUniqueColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = (i * (360 / count)) % 360; // Spread hues evenly across the color wheel
        const color = `hsl(${hue}, 70%, 50%)`; // Use HSL color format for unique colors
        colors.push(color);
    }
    return colors;
}

// Create a new Chart.js instance
const opticsctx = document.getElementById('Optics_areaChart').getContext('2d');
const opticsmyChart = new Chart(opticsctx, {
    type: 'line',
    data: {
        labels: opticslabelsArray,
        datasets: optics_keys.length > 0 ? optics_datasets : ''
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


/*let optics_xValuesData = Object.keys(optics_convert_json_coospares_data)
let optics_yValuesData = Object.values(optics_convert_json_coospares_data)

// console.log(xValuesData, 'datas getting')
// console.log(yValuesData, 'datas yValuesData')
let optics_totalSum = optics_yValuesData.reduce((acc, currentValue) => acc + currentValue, 0);
let optics_percentageValues = optics_yValuesData.map(value => ((value / totalSum) * 100).toFixed(2));




var optics_xValues = optics_xValuesData;
var optics_yValues = optics_percentageValues;
var barColors = [];

// Generating random colors
for (var i = 0; i < optics_yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}

new Chart("Optics_donutChart", {
    type: "doughnut",
    data: {
        labels: optics_xValues,
        datasets: [{
            backgroundColor: barColors,
            data: optics_yValues
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
    let optics_product_tend_with_quarter_category = $('#Optics_product_tend_with_quarter_category').text();
    optics_product_tend_with_quarter_category = optics_product_tend_with_quarter_category.replace(/'/g, '"');
} catch (error) {
    optics_product_tend_with_quarter_category = {}
}
// console.log(product_tend_with_quarter_category);

// let getting_keys = Object.values(product_tend_with_quarter_category)
// console.log('getting the datas', getting_keys)
/*
const optics_ctx = document.getElementById('Optics_areaChart').getContext('2d');

const optics_myChart = new Chart(optics_ctx, {
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