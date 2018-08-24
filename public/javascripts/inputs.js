       
       $(document).ready(function() {
           //nombre del alumno aumenta nombres
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
            //nombre del alumno reduce nombres
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
            //apellido del alumno aumenta
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
            //apellido del alumno reduce
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
            //nombre sinodal aumenta
             $('#btnAddsinodal').click(function() {
                var visible3 = $("#sinodal3:visible").length > 0;
                var visible2 = $("#sinodal2:visible").length > 0;
                var visible1 = $("#sinodal1:visible").length > 0;
                if(visible2 === false){
                $('#btnDelsinodal').attr('disabled','');
                $('#sinodal2').show();
                }
                else if (visible2 === true){
                    $('#btnAddsinodal').attr('disabled','disabled');
                    $('#sinodal3').show();
                }              
            });
            //nombre sinodal reduce 
            $('#btnDelsinodal').click(function() {
                var visible3 = $("#sinodal3:visible").length > 0;
                var visible2 = $("#sinodal2:visible").length > 0;
                if(visible3===true){
                    $('#btnAddsinodal').attr('disabled','');
                    $('#sinodal3').hide();
                }
                else if (visible3 === false && visible2 === true ){
                    $('#btnDelsinodal').attr('disabled','disabled');
                    $('#sinodal2').hide();
                }
            });

            //apellido sinodal aumenta
            $('#btnAddsinodalap').click(function() {
                var visible3 = $("#sinodalap3:visible").length > 0;
                var visible2 = $("#sinodalap2:visible").length > 0;
                var visible1 = $("#sinodalap1:visible").length > 0;
                if(visible2 === false){
                $('#btnDelsinodalap').attr('disabled','');
                $('#sinodalap2').show();
                }
                else if (visible2 === true){
                    $('#btnAddsinodalap').attr('disabled','disabled');
                    $('#sinodalap3').show();
                }              
            });
            //apellido sinodal reduce 
            $('#btnDelsinodalap').click(function() {
                var visible3 = $("#sinodalap3:visible").length > 0;
                var visible2 = $("#sinodalap2:visible").length > 0;
                if(visible3===true){
                    $('#btnAddsinodalap').attr('disabled','');
                    $('#sinodalap3').hide();
                }
                else if (visible3 === false && visible2 === true ){
                    $('#btnDelsinodalap').attr('disabled','disabled');
                    $('#sinodalap2').hide();
                }
            });
 
            $('#btnDel').attr('disabled','disabled');
            $('#btnDel1').attr('disabled','disabled');
            $('#btnDelsinodal').attr('disabled','disabled');
            $('#btnDelsinodalap').attr('disabled','disabled');
        });

