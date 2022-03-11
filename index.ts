// Import stylesheets
//import 'wijmo/styles/themes/wijmo.theme.material.css';
import 'wijmo/styles/wijmo-core.css';
import './style.css';

import { FlexGrid } from 'wijmo/wijmo.grid';

// create the grid
var theGrid = new FlexGrid('#theGrid', {
  selectionMode: 'MultiRange',
  itemsSource: getData(50),
});

// apply star sizing to all columns
theGrid.columns.forEach((col) => (col.width = '*'));

// get some random data
function getCountries() {
  return 'US,Germany,UK,Japan,Italy,Greece'.split(',');
}

function getData(cnt: number) {
  let countries = getCountries(),
    data: any[] = [];
  for (var i = 0; i < cnt; i++) {
    data.push({
      id: i,
      date: new Date(2020, i % 12, (i + 1) % 25),
      country: countries[i % countries.length],
      downloads: Math.round(Math.random() * 1000),
      checked: i % 4 == 0,
    });
  }
  return data;
}
