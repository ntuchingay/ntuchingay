$(document).ready(function(){
  // showing correct date the calender
  var training = ['20160102','20160104','20160106','20160108', 
                  '20160109','20160111','20160113','20160115', 
                  '20160116','20160118','20160120','20160123', 
                  '20160125','20160127','20160130','20160201', 
                  '20160203','20160206','20160213','20160215', 
                  '20160218','20160219','20160220','20160221'];

  var current = moment().format("YYYYMMDD");  //string
  var i = 0;
  var k = 0;

  var cancel = ['20160108'];
  var cancel_html = '<span class="label label-danger">Cancelled</span>';

  for (i in training) {
    if (training[i] >= current) {
      break;
    };
    i++;
  };
  var for_table = parseInt(i);
  //for_table += 1;
  for(var j=1; j<4; i++, j++) {
    var temp = moment(training[i], "YYYYMMDD").format("YYYY-MMMM-D").split("-");
    $('#year' + String(j)).html(temp[1] + " " + temp[0]);
    $('#date' + String(j)).html(temp[2]);
    $('#foot' + String(j)).html(moment(training[i], "YYYYMMDD").format("dddd"));
    for (k in cancel) {
      // mark special conditions
      if (cancel[k] == training[i]) {
        $('#foot' + String(j)).html(moment(training[i], "YYYYMMDD").format("dddd") + ' '+ cancel_html);
      }
    }
  }
  while(for_table) {
    $('#trainingTable tr:nth-child(' + String(for_table) + ') > td').addClass("text-muted");
    for_table--;
  }
})

$(document).ready(function(){
  var counter = 0, // to keep track of current slide
      $items = $(".col-md-5 .dateBtn"), // a collection of all of the slides, caching for performance
      numItems = $items.length; // total number of slides

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){
      var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
      $items.removeClass('show'); // remove .show from whichever element currently has it
      $items.eq(itemToShow).addClass('show');    
  };

  // add click events to prev & next buttons 
  $('.next').on('click', function(){
      counter++;
      showCurrent(); 
  });
  $('.prev').on('click', function(){
      counter--;
      showCurrent(); 
  });
});