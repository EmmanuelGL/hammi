       
       $(document).ready(function() {
            $('#btnAdd').click(function() {
                var visible2 = $("#input2:visible").length > 0;
                var visible1 = $("#input1:visible").length > 0;
                if($("#input2:visible").length > 0 == false){
                $('#btnDel').attr('disabled','');
                $('#input2').show();
                }
                else if(visible1 == true && visible2 == true){
                    $('#btnAdd').attr('disabled','disabled');
                    $('#input3').show();
                }
            });
 
            $('#btnDel').click(function() {
                var visible3 = $("#input3:visible").length > 0;
                var visible2 = $("#input2:visible").length > 0;
                if($("#input3:visible").length > 0 == true){
                $('#btnAdd').attr('disabled','');
               // $("#input3")[0].reset();
               // $('#input3').attr('')
                $('#input3').hide();
                }
                else if(visible3 === false && visible2 === true){
                    $('#btnDel').attr('disabled','disabled');
                    $('#input2').attr('')
                    $('#input2').hide();
                }
            });
 
            $('#btnAdd1').click(function() {
                var visible3 = $("#inputA3:visible").length > 0;
                var visible2 = $("#inputA2:visible").length > 0;
                var visible1 = $("#inputA1:visible").length > 0;
                if(visible2 === false){
                $('#btnDel1').attr('disabled','');
                $('#inputA2').show();
                }
                else if (visible2 === true){
                    $('#btnAdd1').attr('disabled','disabled');
                    $('#inputA3').show();
                }              
            });
 
            $('#btnDel1').click(function() {
                var visible3 = $("#inputA3:visible").length > 0;
                var visible2 = $("#inputA2:visible").length > 0;
                if(visible3===true){
                    $('#btnAdd1').attr('disabled','');
                    $('#inputA3').hide();
                }
                else if (visible3 === false && visible2 === true ){
                    $('#btnDel1').attr('disabled','disabled');
                    $('#inputA2').hide();
                }
            });
 
            $('#btnDel').attr('disabled','disabled');
            $('#btnDel1').attr('disabled','disabled');
        });
// function agregar() {
// 	campo = '<div class="col-xs-3 clonedInput" id="input2">Nombre<input type="text" name="name" id="name2" placeholder="nombre2" class="form-control" ng-model="nombre2"></div>';
// 	$("#prueba").append(campo);
// }
