/** Must be included from the index file, not the backend one */
const d3  = import('d3');


// TODO: May take the graph div as parameter
function create_graph() {
      var svg = d3.select("svg");
      margin = 200;
      width = svg.attr("width") - margin;
      height = svg.attr("height") - margin;
}
