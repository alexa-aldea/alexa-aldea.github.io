document.addEventListener("DOMContentLoaded", function startWebApp(iEvent)
  {
  	start();
  }
);

function start() {    	
	result = computeNoDeathsPer1MPop();
        renderChart(result.labels, result.dataset, result.legend);
}    

function renderChart(labels, dataset, legend) {
    console.log(labels);
    console.log(legend);
    console.log(dataset);	
     var ctx = document.getElementById("coronitaChart").getContext('2d');
     var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels : labels,
          datasets: [
            {
              data : dataset[legend[0]],
              label: legend[0],
              borderColor: "#228DA3",
              fill: false
            },
            {
              data : dataset[legend[1]],
              label: legend[1],
              borderColor: "#313074",
              fill: false
            },
            {
              data : dataset[legend[2]],
              label: legend[2],
              borderColor: "#B93658",
              fill: false
            },
            {
              data : dataset[legend[3]],
              label: legend[3],
              borderColor: "#E5861A",
              fill: false
            },
          ]
        },
        options: {
          title: {
            display: true,
            text: "Coronita's daily victims/1M pop",
            fontSize: 18,
          },
        }
      });

}







