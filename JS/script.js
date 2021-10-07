function consultar() {
    $.ajax (
            {
                url      : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                type     : 'GET',
                dataType : 'json',
                success  :  function(json){                                
                                $("#idDivConsulta").empty();
                                for (i=0; i<json.items.length; i++){
                                    $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ")
                                    }                                
                                console.log(json) 
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function insertar() {
    var planeta;
    planeta = {codigo:31 , nombre:'POLONIA'};

    $.ajax (
            {
                url      : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                type     : 'POST',
                data     :  planeta,
                success  :  function(response){
                                console.log(response);
                },
                error    :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function borrar() {
    //Se declara variable donde almacenaremos el codigo del planeta
    var planeta;
    // Se asigna el codigo a eliminar
    planeta = {codigo: 31};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(planeta);
    $.ajax (
            {
                url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                type         : 'DELETE',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}

function actualizar() {
    //Se declara variable donde almacenaremos los datos del planeta a modificar
    var planeta;
    // Se asignan los nuevos valores del planeta
    planeta = {codigo: 31, nombre: "NUEVO POLONIA"};
    //Se convierte a formato JSON
    datosEnvio = JSON.stringify(planeta);
    $.ajax (
            {
                url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                type         : 'PUT',
                data         :  datosEnvio,
                contentType  : 'application/json',
                success      :  function(response){
                                console.log(response);
                },
                error        :  function(xhr,status){
                                console.log(xhr);
                }
            }        
        );
}