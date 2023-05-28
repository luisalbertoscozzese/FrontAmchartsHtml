var dataPieChart = [{
  category: "Ingresos",
  value: 120,
  sliceSettings: {
    fill: am5.color(0x68ad5c),
  },
  breakdown: [{
    category: "Septiembre",
    value: 2025
  }, {
    category: "Octubre",
    value: 1882
  }, {
    category: "Noviembre",
    value: 1809
  }, {
    category: "Diciembre",
    value: 2002
  }, {
    category: "Enero",
    value: 1742
  }, {
    category: "Febrero",
    value: 1828
  }, {
    category: "Marzo",
    value: 1699
  }]
}, {
  category: "Engresos",
  value: 75,
  sliceSettings: {
    fill: am5.color(0xdc4534),
  },
  breakdown: [{
    category: "Septiembre",
    value: 1699
  }, {
    category: "Octubre",
    value: 1828
  }, {
    category: "Noviembre",
    value: 1742
  }, {
    category: "Diciembre",
    value: 2002
  }, {
    category: "Enero",
    value: 1809
  }, {
    category: "Febrero",
    value: 1882
  }, {
    category: "Marzo",
    value: 2025
  }]
}, {
  category: "Otros",
  value: 100,
  sliceSettings: {
    fill: am5.color(0xd7a700),
  },
  breakdown: [{
    category: "Septiembre",
    value: 2002
  }, {
    category: "Octubre",
    value: 1809
  }, {
    category: "Noviembre",
    value: 1882
  }, {
    category: "Diciembre",
    value: 2025
  }, {
    category: "Enero",
    value: 1699
  }, {
    category: "Febrero",
    value: 1828
  }, {
    category: "Marzo",
    value: 1742
  }]
}]

var root = am5.Root.new("PieChart");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(am5.Container.new(root, {
  width: am5.p100,
  height: am5.p100,
  layout: root.horizontalLayout
}));

var columnChart = container.children.push(am5xy.XYChart.new(root, {
  width: am5.p50,
  panX: false,
  panY: false,
  wheelX: "none",
  wheelY: "none",
  layout: root.verticalLayout
}));

var yRenderer = am5xy.AxisRendererY.new(root, {});
var yAxis = columnChart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: yRenderer
}));

yRenderer.grid.template.setAll({
  location: 1
})

var xAxis = columnChart.xAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererX.new(root, {
    strokeOpacity: 0.1
  })
}));

var columnSeries = columnChart.series.push(am5xy.ColumnSeries.new(root, {
  name: name,
  xAxis: xAxis,
  yAxis: yAxis,
  valueXField: "value",
  categoryYField: "category"
}));

columnSeries.columns.template.setAll({
  tooltipText: "{categoryY}: {valueX}"
});

columnChart.appear(1000, 100);

var pieChart = container.children.push(
  am5percent.PieChart.new(root, {
    width: am5.p50,
    innerRadius: am5.percent(50)
  })
);

var pieSeries = pieChart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  })
);

pieSeries.slices.template.setAll({
  templateField: "sliceSettings",
  strokeOpacity: 0
});

var currentSlice;
pieSeries.slices.template.on("active", function(active, slice) {
  if (currentSlice && currentSlice != slice && active) {
    currentSlice.set("active", false)
  }

  var color = slice.get("fill");

  label1.setAll({
    fill: color,
    text: root.numberFormatter.format(slice.dataItem.get("valuePercentTotal"), "#.'%'")
  });

  label2.set("text", slice.dataItem.get("category"));

  columnSeries.columns.template.setAll({
    fill: slice.get("fill"),
    stroke: slice.get("fill")
  });

  columnSeries.data.setAll(slice.dataItem.dataContext.breakdown);
  yAxis.data.setAll(slice.dataItem.dataContext.breakdown);

  currentSlice = slice;
});

pieSeries.labels.template.set("forceHidden", true);
pieSeries.ticks.template.set("forceHidden", true);

pieSeries.data.setAll(dataPieChart);

var label1 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
  text: "",
  fontSize: 35,
  fontweight: "bold",
  centerX: am5.p50,
  centerY: am5.p50
}));

var label2 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
  text: "",
  fontSize: 12,
  centerX: am5.p50,
  centerY: am5.p50,
  dy: 30
}));

pieSeries.events.on("datavalidated", function() {
  pieSeries.slices.getIndex(0).set("active", true);
});