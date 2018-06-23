/*<ul id="ul-example" class="row-fluid">
  <li class="span4" data-color="gray">
    <div class="thumbnail">
      <div class="thumbnail-image">
        <img src="/images/dinosaurs/Stegosaurus_BW.jpg" />
      </div>
      <div class="caption">
        <h3>Stegosaurus armatus</h3>
        <p>State: Colorado</p>
        <p>Year: 1982</p>
        <p><a href="http://en.wikipedia.org/wiki/Stegosaurus" class="btn btn-primary">View</a> <a href="#" class="btn">View</a></p>
      </div>
    </div>
  </li>
  
</ul>

*//*
$(document).ready( function() {
  function ulWriter(rowIndex, record, columns, cellWriter) {
    var cssClass = "span4", li;
    if (rowIndex % 3 === 0) { cssClass += ' first'; }
    li = '<li class="' + cssClass + '"><div class="thumbnail"><div class="panel-heading"><a>' + record.thumbnail + '</a></div><div class="caption">' + record.caption + '</div></div></li>';
    return li;
  }
  
  // Function that creates our records from the DOM when the page is loaded
  function ulReader(index, li, record) {
    var $li = $(li),
        $caption = $li.find('.caption');
    record.thumbnail = $li.find('.panel-heading').html();
    record.caption = $caption.html();
    record.label = $caption.find('h3').text();
    record.description = $caption.find('p').text();
    record.color = $li.data('color');
  }
  
  $('#ul-example').dynatable({
    table: {
      bodyRowSelector: 'li'
    },
    dataset: {
      perPageDefault: 5,
      perPageOptions: [5,10]
    },
    writers: {
      _rowWriter: ulWriter
    },
    readers: {
      _rowReader: ulReader
    },
    params: {
      records: 'kittens'
    }
  });
});*/


/*$(document).ready(function() {
  $('#local1').DataTable( {
      dom: 'Bfrtip',
      buttons: [
          'copyHtml5',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5'
      ],
      "oTableTools": {
          "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
        },
        "language": {
          "search": "Buscar:",
          "zeroRecords": "No se encontraron datos",
          "infoEmpty": "No hay datos para mostrar",
          "info": "Mostrando del _START_ al _END_, de un total de _TOTAL_ entradas",
          "paginate": {
              "first": "Primeros",
              "last": "Ultimos",
              "next": "Siguiente",
              "previous": "Anterior"
          },
      },
  } );
} );
*/
// $(document).ready(function(){
//   $("#local").jPaginate();
// });




