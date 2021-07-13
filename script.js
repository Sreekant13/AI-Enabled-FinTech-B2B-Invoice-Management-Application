var pg=1;  //initializing page with 1

    document.addEventListener("DOMContentLoaded",function(){
    	loadData(0,11);	//initial 5
    });

    function loadData(start,limit){
    	var xhttp=new XMLHttpRequest();
    	xhttp.open("GET","http://localhost:8080/H2HBABBA3086/getInvoiceData.do?start="+start+"&limit="+limit,false);
    	xhttp.send();
    	console.log(xhttp.responseText);
    	var data=xhttp.responseText;
    	console.log(JSON.parse(data));
    	data=JSON.parse(data);
    	
    	  var cols = [];
          for (var i = 0; i < data.length; i++) {
              for (var k in data[i]) {
                  if (cols.indexOf(k) === -1) {
                      // Push all keys to the array
                      cols.push(k);
                  }
              }
          }
          //Create a table element
          var table = document.createElement("table");
          table.setAttribute('id', 'table');
            
          // Create table row tr element of a table
          var tr = table.insertRow(-1);
          var ck = document.createElement("th");
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = 'ck';
          ck.innerHTML.value = checkbox;
          tr.appendChild(ck);
          for (var i = 0; i < cols.length; i++) {
              // Create the table header th element
              var theader = document.createElement("th");
              
              theader.innerHTML = cols[i];
             
                
              // Append columnName to the table row
              tr.appendChild(theader);
          }
            console.log(data.length)
          // Adding the data to the table
          for (var i = 0; i < data.length; i++) {
                
              // Create a new row
              trow = table.insertRow(-1);
              var checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.id = 'ck';
             
              
              var cell = trow.insertCell(-1);
              cell.appendChild(checkbox);
              for (var j = 1; j <= cols.length; j++) {
                  var cell = trow.insertCell(-1);
                  // Inserting the cell at particular place
                  cell.innerHTML = data[i][cols[j-1]];
              }
          }
            
       // Add the newly created table containing json data
          var el = document.getElementById("empty");
          el.innerHTML = "";
          el.appendChild(table);	
    }

    //####################Pagination####################//

    function prevFunction() {
        if (pg >= 2) {
        	pg--;
        }
        loadData((pg - 1) * 11, 11);
    }
    function nextFunction() {
    	pg++;
        loadData((pg - 1) * 11, 11);
    }

    //#####################################################################################//
    //Get the modal
    var modal = document.getElementById("myModal");
    //Get the button that opens the modal1
    var btn = document.getElementById("add");
    //Get the <span> element that closes the modal1
    var span = document.getElementsByClassName("add_close")[0];
    //When the user clicks the button, open the modal1 
    var spanbut = document.getElementById("add_footer_cancel");
    //var add = document.getElementById("footer_add");
    btn.onclick = function() {
      modal.style.display = "block";
    }

    spanbut.onclick = function(){
      modal.style.display = "none";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }


    //#####################################################################################//


    var modal1 = document.getElementById("myModal1");
    var btn1 = document.getElementById("edit");
    var span1 = document.getElementsByClassName("edit_close")[0];
    var spanbut1 = document.getElementById("edit_footer_cancel");
    btn1.onclick = function() {
      modal1.style.display = "block";
    }
    spanbut1.onclick = function(){
      modal.style.display = "none";
    }
    span1.onclick = function() {
      modal1.style.display = "none";
    }

    //#####################################################################################//

    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("delete");
    var span2 = document.getElementsByClassName("delete_close")[0];
    var spanbut2 = document.getElementById("delete_footer_cancel");
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    spanbut2.onclick = function(){
      modal.style.display = "none";
    }
    span2.onclick = function() {
      modal2.style.display = "none";
    }

    //#####################################################################################//


    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }