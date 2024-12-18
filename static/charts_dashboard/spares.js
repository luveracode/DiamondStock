let logginUserGroup = $('#gettingLoginUser').val()

const graphActive = (gettingId) => {

    const datas = ['sparesGraph', 'opticsGraph', 'cablesGraph'];

    if (datas.includes(gettingId)) {
        datas.map((value, index) => {
            const element = document.getElementById(value);
            const addingActive = document.getElementById(value + 'Active')
            if (gettingId !== value) {
                element.classList.add('d-none');
                addingActive.classList.remove('activeGraph')
            } else {
                element.classList.remove('d-none');
                addingActive.classList.add('activeGraph')
            }
        });
    } else {
        datas.map((value, index) => {
            const element = document.getElementById(value);
            const addingActive = document.getElementById(value + 'Active')
            if (gettingId.id !== value) {
                element.classList.add('d-none');
                addingActive.classList.remove('activeGraph')
            } else {
                element.classList.remove('d-none');
                addingActive.classList.add('activeGraph')
            }
        });
    }
};




if (logginUserGroup == "Spares/") {
    const cablesGraph = document.getElementById('cablesGraph')
    const opticsGraph = document.getElementById('opticsGraph')
    const cableGraphTab = document.getElementById('cableGraphTab')
    const opticsGraphTab = document.getElementById('opticsGraphTab')
    cablesGraph.classList.add('d-none')
    opticsGraph.classList.add('d-none')
    cableGraphTab.classList.add('d-none')
    opticsGraphTab.classList.add('d-none')
    graphActive('sparesGraph')
}
else if (logginUserGroup == "Cable/") {
    const sparesGraph = document.getElementById('sparesGraph')
    const opticsGraph = document.getElementById('opticsGraph')
    const sparesGraphTab = document.getElementById('sparesGraphTab')
    const opticsGraphTab = document.getElementById('opticsGraphTab')
    sparesGraph.classList.add('d-none')
    opticsGraph.classList.add('d-none')
    sparesGraphTab.classList.add('d-none')
    opticsGraphTab.classList.add('d-none')
    graphActive('cablesGraph')
}
let total_spend_jsonObject = {}
try {

    let total_spend_spares_quarter_values = $('#total_spend_spares_quarter_values').text()
    total_spend_jsonObject = JSON.parse(total_spend_spares_quarter_values);
} catch (error) {
    total_spend_jsonObject = {}
}

let total_spend_quarter_keys = Object.keys(total_spend_jsonObject);
let total_spend_quarter_values = Object.values(total_spend_jsonObject);
let totalSpendChart = document.getElementById("totalSpendChart");

totalSpendChart.width = 300;
totalSpendChart.height = 130;

let totalSpendChartCtx = totalSpendChart.getContext("2d");
let dataValues = total_spend_quarter_values;

let totalSpendChart_data = new Chart(totalSpendChartCtx, {
    type: "line",
    data: {
        labels: total_spend_quarter_keys,
        datasets: [
            {
                label: "",
                borderColor: "white",
                barPercentage: 5,
                data: dataValues,
                pointBackgroundColor: dataValues.map((value, index) => index === dataValues.length - 1 ? 'red' : 'blue'),
                fill: false,
                borderWidth: 3,
                pointRadius: dataValues.map((value, index) => index === dataValues.length - 1 ? 5 : 2),
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

let avg_spend_convert_json = {}
try {
    let avg_spend_quarter_values = $('#avg_spend_quarter_values').text()
    avg_spend_convert_json = JSON.parse(avg_spend_quarter_values)
} catch (error) {
    avg_spend_convert_json = {}
}

let avg_spend_convert_key_values = Object.keys(avg_spend_convert_json)
let avg_spend_convert_values = Object.values(avg_spend_convert_json)


let avgSpend = document.getElementById("avg_spend");

avgSpend.width = 300;
avgSpend.height = 130;

let avgSpendCtx = avgSpend.getContext("2d");
let dataAvgSpendValues = avg_spend_convert_values;
let avgSpend_Chart = new Chart(avgSpendCtx, {
    type: "line",
    data: {
        labels: avg_spend_convert_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: dataAvgSpendValues,
                fill: false,
                pointBackgroundColor: dataAvgSpendValues.map((value, index) => index === dataAvgSpendValues.length - 1 ? 'red' : 'blue'),
                pointRadius: dataAvgSpendValues.map((value, index) => index === dataAvgSpendValues.length - 1 ? 5 : 2),
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

let avg_moq_convert_json = {}
try {
    let avg_moq_quarter_values = $('#avg_moq_quarter_values').text()
    avg_moq_convert_json = JSON.parse(avg_moq_quarter_values)
} catch {
    avg_moq_convert_json = {}
}
let avg_moq_key_values = Object.keys(avg_moq_convert_json)
let avg_moq_values = Object.values(avg_moq_convert_json)

let avgMoq = document.getElementById("avg_moq");

avgMoq.width = 300;
avgMoq.height = 130;

let avgMoqCtx = avgMoq.getContext("2d");
let avgDataValues = avg_moq_values;
let avgMoqCtx_Chart = new Chart(avgMoqCtx, {
    type: "line",
    data: {
        labels: avg_moq_key_values,
        datasets: [
            {
                label: "",
                borderColor: "white",
                data: avgDataValues,
                fill: false,
                pointBackgroundColor: avgDataValues.map((value, index) => index === avgDataValues.length - 1 ? 'red' : 'blue'),
                pointRadius: avgDataValues.map((value, index) => index === avgDataValues.length - 1 ? 5 : 2),
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

let convert_json_category_data = {};
try {
    let product_category_data = $('#product_category_data').text();
    convert_json_category_data = JSON.parse(product_category_data.replace(/'/g, '"'));
} catch (error) {
    convert_json_category_data = {}
}

let product_category_data_keys = Object.keys(convert_json_category_data);
let product_category_data_values = Object.values(convert_json_category_data);

var xValues = product_category_data_keys;
var yValues = product_category_data_values;

var barColors = [];
for (var i = 0; i < yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: "Commodity Classification Data",
            backgroundColor: barColors,
            data: yValues,
            barThickness: 50, 
            categoryPercentage: 0.8, 
            barPercentage: 0.9, 
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Commodity Classification Data Chart"
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 3, // Change this value to adjust the aspect ratio
    }
});

let convert_json_coospares_data = {}
try {
    let coospares_data_values = $('#coospares_data_values').text()
    convert_json_coospares_data = JSON.parse(coospares_data_values.replace(/'/g, '"'));
} catch (error) {
    convert_json_coospares_data = {}
}

/*let xValuesData = Object.keys(convert_json_coospares_data)
let yValuesData = Object.values(convert_json_coospares_data)

// console.log(xValuesData, 'datas getting')
// console.log(yValuesData, 'datas yValuesData')
// console.log(convert_json_coospares_data, 'datas yValuesData')
let totalSum = yValuesData.reduce((acc, currentValue) => acc + currentValue, 0);
let percentageValues = yValuesData.map(value => ((value / totalSum) * 100).toFixed(2));



var xValues = xValuesData;
var yValues = percentageValues.map(value => parseFloat(value)); // Ensure yValues are numbers
var barColors = [];

// Generating random colors
for (var i = 0; i < yValues.length; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    barColors.push(randomColor);
}
*/

am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create("donutChart", am4charts.PieChart);
    chart.data = Object.entries(convert_json_coospares_data).map(([key, value]) => ({
        channel: key,
        spend: value
    }));

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "spend";
    pieSeries.dataFields.category = "channel";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // Customize the tooltip text
    pieSeries.slices.template.tooltipText = "$ {value}";

    // Initial animation settings
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
});

const labels = $('#total_quarter_values_cm_data').text().trim();
const cleanedData = labels.replace(/^\[|\]$/g, '');
const labelsArray = cleanedData.split(',').map(label => {
    return label.trim().replace(/^["']|["']$/g, '');
});

const inputString = $('#trend_cm_category_data_values').text().trim();

// Parse the JSON string into a JavaScript object
const parsedData = JSON.parse(inputString.replace(/'/g, '"'));

// Extract keys and values from the parsed object
const keys = Object.keys(parsedData);
const values = Object.values(parsedData);

// Generate unique colors for each label
const colors = generateUniqueColors(keys.length);

// Prepare datasets for Chart.js
let totalSum_data = values.reduce((acc, currentValue) => acc + currentValue, 0);

// Calculate percentage values based on total sum
let percentageValues_data = values.map(value => {
    if (typeof value !== 'number' || isNaN(value)) {
        // console.error(`Invalid value detected: ${value}`);
        return NaN; // Handle invalid values (e.g., NaN, non-numeric values)
    }

    const percentage = (value / totalSum_data) * 100;
    console.log(`Value: ${value}, Total Sum: ${totalSum_data}, Percentage: ${percentage}`);
    return percentage.toFixed(2);
});
// Debugging output to inspect data and calculations
// console.log(percentageValues_data, totalSum_data, "data")
const datasets = keys.map((key, index) => ({
    label: key,
    data: percentageValues_data,
    borderColor: colors[index],
    backgroundColor: colors[index], // You can also set different background colors if needed
    fill: false
}));


// Function to generate unique colors
function generateUniqueColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = (i * (360 / count)) % 360; // Spread hues evenly across the color wheel
        const color = `hsl(${hue}, 70%, 50%)`; // Use HSL color format for unique colors
        colors.push(color);
    }
    return colors;
}

// Create a new Chart.js instance
const ctx = document.getElementById('areaChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelsArray,
        datasets: keys.length > 0 ? datasets : ''
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
