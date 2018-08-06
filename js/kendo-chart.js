function createChart() {
	// pie chart for ui/ux skills
	$("#chart-uiux").kendoChart({
		title: {
			position: "bottom",
			text: "My UI/UX Design Skills"
		},
		legend: {
			visible: true,
			position: "bottom"
		},
		chartArea: {
			background: ""
		},
		seriesDefaults: {
			labels: {
				visible: true,
				background: "transparent",
				template: "#= category # \n #= value#%"
			}
		},
		series: [{
			type: "pie",
			startAngle: 100,
			data: [{
				category: "UX Researching",
				value: 50,
				color: "#bd2c29"
			},{
				category: "UI Design",
				value: 40,
				color: "#e56e1e"
			},{
				category: "UX Analyzing",
				value: 10,
				color: "#fff500"
			}],
			overlay: {
      			gradient: "none"
    		}
		}],
		tooltip: {
			visible: true,
			format: "{0}%"
		}
	});
	// / pie chart for ui/ux skills

	// pie chart for frontend  skills
	$("#chart-frontend").kendoChart({
	title: {
		position: "bottom",
		text: "My Front End Develoment Skills"
	},
	legend: {
		visible: true,
		position: "bottom"
	},
	chartArea: {
		background: ""
	},
	seriesDefaults: {
		labels: {
			visible: true,
			background: "transparent",
			template: "#= category # \n #= value#%"
		}
	},
	series: [{
		type: "pie",
		startAngle: 100,
		data: [{
			category: "HTML5",
			value: 35,
			color: "#bd2c29"
		},{
			category: "CSS3",
			value: 30,
			color: "#e56e1e"
		},{
			category: "JS",
			value: 15,
			color: "#fff500"
		},{
			category: "SCSS",
			value: 10,
			color: "#31aa36"
		},{
			category: "AngularJS",
			value: 5,
			color: "#005ca1"
		},{
			category: "ReactJS",
			value: 5,
			color: "#954489"
		}],

		overlay: {
  		gradient: "none"
		}
		}],
		tooltip: {
			visible: true,
			format: "{0}%"
		},
	});
	// pie chart for frontend  skills

	// column chart for skill readiness vs salary
	$("#chart-salary").kendoChart({
	    title: {
	    	position: "bottom",
	        text: "Skill Readiness vs Salary in 2018"
	    },
	    legend: {
	        position: "bottom"
	    },
	    seriesDefaults: {
	        type: "column"
	    },
	    series: [{
	        name: "Marketing",
	        data: [2000, 2500, 3000, 3500, 3600, 3800, 3900, 3950, 4000, 4100],
	        color: "#005ca1"
	    }, {
	        name: "Sales",
	        data: [2500, 2600, 2700, 2750, 2800, 2850, 2900, 2950, 3000, 3050],
	        color: "#31aa36"
	    }, {
	        name: "HR",
	        data: [1500, 1600, 1650, 1650, 1650, 1650, 1700, 1750, 1800, 2000],
	        color: "#fff500"
	    },{
	        name: "Engineering",
	        data: [3000, 3500, 4000, 5000, 5500, 6000, 7000, 7500, 8000, 9000],
	        color: "#e56e1e"
	    }],
	    valueAxis: {
	    	title: {
		      text: "Monthly Salary (SGD)"
		    },
	        labels: {
	            format: "{0}"
	        },
	        line: {
	            visible: false
	        },
	        axisCrossingValue: 0
	    },
	    categoryAxis: {
	    	title: {
		      text: "Skill Readiness (%)"
		    },
	        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
	        line: {
	            visible: false
	        },
	        labels: {
	            padding: {top: 0}
	        }
	    },
	    tooltip: {
	        visible: true,
	        format: "{0}%",
	        template: "#= series.name #: #= value #"
	    }
	});

// / column chart for skill readiness vs salary
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);


jQuery(window).on("resize", function(event) {
	var chartDiv1 = jQuery("#chart-uiux");
	var chartDiv2 = jQuery("#chart-frontend");
	var chartDiv3 = jQuery("#chart-salary");
	var chart1 = chartDiv1.data("kendoChart");
	var chart2 = chartDiv2.data("kendoChart");
	var chart3 = chartDiv3.data("kendoChart");

   // disable animation
   //chart1.options.transitions = false;
   //chart2.options.transitions = false;
   //chart3.options.transitions = false;

   // Temporarily hide, then set size of chart to container (which will naturally resize itself), then show it again
   chartDiv1.css({ display:"none" });
   chartDiv1.css({ width:chartDiv1.parent().innerWidth(), display:"block" });

   chartDiv2.css({ display:"none" });
   chartDiv2.css({ width:chartDiv2.parent().innerWidth(), display:"block" });

   chartDiv3.css({ display:"none" });
   chartDiv3.css({ width:chartDiv3.parent().innerWidth(), display:"block" });

   chart1.redraw();  
   chart2.redraw(); 
   chart3.redraw(); 
});
