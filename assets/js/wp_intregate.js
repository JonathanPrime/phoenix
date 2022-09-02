'use strict';
// var product_arr=[];
// sessionStorage.setItem("products",product_arr);

function send_data() {
    var form = new FormData(document.forms['ams'] )
    var msg = "Hola Phoenix, mucho gusto, soy "+form.get('name')+". Me gustaría contactarlo para saber sobre "+form.get('subject')+". Por favor envíeme detalles a "+form.get('sender')+"."
    window.open(`https://wa.me/573102305250?text=${msg}`);
    location.reload()
    }

    
function add_product(param1) {
        if (search(param1)==0){
       var i = sessionStorage.length
        sessionStorage.setItem("products"+i,param1);
        console.log(sessionStorage)
        alert('Agregado a la lista de cotizaciones.')
    }else{
        alert('Este producto ya está agregado en la lista de cotizaciones.')
    }

}
 
function search(param2) {
    var flag=0;
    for (let index = 0; index < sessionStorage.length; index++) {
        if(param2==sessionStorage.getItem('products'+index)){
            flag=flag+1
        }
    }
    return flag  
}
    
function send_quote(){
    var quote_list='';
    for (let index = 0; index < sessionStorage.length; index++) {
        var p = sessionStorage.getItem('products'+index)
        quote_list=quote_list+p+", "
        }
    var form = new FormData(document.forms['ams_q'] )
    // alert (typeof(form.get('Additional')))
    // console.log(typeof(form.get('Additional')))
    // console.log(form.get('Additional'))
    if(form.get('Additional')!==""){
    var msg = "Hola Phoenix, mucho gusto, soy "+form.get('Name')+". quiero saber acerca de "+quote_list+" también quiero saber acerca de "+form.get('Additional')+". Puedes enviarme los detalles por correo a "+form.get('Email')+" o llámame al "+form.get('Mobile')+"."
    window.open(`https://wa.me/573102305250?text=${msg}`);
    sessionStorage.clear()
    location.reload()
    }else{
        var msg = "Hola Phoenix, mucho gusto, soy "+form.get('Name')+". quiero saber acerca de "+quote_list+". Puedes enviarme los detalles por correo a "+form.get('Email')+" o llámame al "+form.get('Mobile')+"."
        window.open(`https://wa.me/573102305250?text=${msg}`);
        sessionStorage.clear()
    location.reload()
    }
    
    
}