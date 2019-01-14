/*********************/
/*                   */
/*ÍNDICE DE SCRIPTING*/
/*                   */
/*********************/

/***LISTADO DE APIS***/

/*--1---API-DE-APLICACIONES---------------------------------*/
/*--2---API-DE-BALANCE--------------------------------------*/
/*--3---API-DE-BANCOS ACEPTADOS PARA RETIROS----------------*/
/*--4---API-DE-BLOQUEO POR VISA-----------------------------*/
/*--5---API-DE-CAMPAÑA COMERCIAL----------------------------*/
/*--6---API-DE-CARRITO PAQUETES EN UNA MISMA ETIQUETA-------*/
/*--7---API-DE-CATEGORÍAS-----------------------------------*/
/*--8---API-DE-CODIGO POSTAL DE MLM-------------------------*/
/*--9---API-DE-COSTOS DE ENVÍO------------------------------*/
/*--10--API-DE-CREDIT LEVEL---------------------------------*/
/*--11--API-DE-CUANTAS OFERTAS TIENE UNA SUBASTA------------*/
/*--12--API-DE-ESHOP----------------------------------------*/
/*--13--API-DE-ETIQUETA ML----------------------------------*/
/*--14--API-DE-FORMAS DE ENVÍO POR SITE---------------------*/
/*--15--API-DE-ITEM EN B=P----------------------------------*/
/*--16--API-DE-ÍTEMS----------------------------------------*/
/*--17--API-DE-LIBERACIÓN DE DINERO-------------------------*/
/*--18--API-DE-LIMITE MP POINT------------------------------*/
/*--19--API-DE-MEDIACIONES----------------------------------*/
/*--20--API-DE-MEDIOS DE PAGO ACEPTADOS POR SITE------------*/
/*--21--API-DE-MÉTODOS ACEPTADOS DE PAGO--------------------*/
/*--22--API-DE-MONTOS MÍNIMOS Y MÁXIMOS POR MEDIO DE PAGO---*/
/*--23--API-DE-OPERACIONES A LIBERAR------------------------*/
/*--24--API-DE-OPERACIONES RETENIDAS POR CHARGEBACKS--------*/
/*--25--API-DE-OPERACIONES RETENIDAS POR DEVOLUCIÓN EXPRESS-*/
/*--26--API-DE-OPINIONES------------------------------------*/
/*--27--API-DE-ORDERS---------------------------------------*/
/*--28--API-DE-PREGUNTAS REALIZADAS EN EL ÍTEM--------------*/
/*--29--API-DE-PREGUNTAS SIN RESPONDER----------------------*/
/*--30--API-DE-TITULARIDAD DE POINT-------------------------*/
/*--31--API-DE-USUARIO CONFIABLE----------------------------*/
/*--32--API-DE-VALIDACIÓN CÓDIGO UNIVERSAL DE PRODUCTO------*/


/*CÓDIGO*/
/*------API-DE-APLICACIONES---------------------------------*/

/*------API-DE-BALANCE--------------------------------------*/
/*------API-DE-BANCOS ACEPTADOS PARA RETIROS----------------*/
/*------API-DE-BLOQUEO POR VISA-----------------------------*/
/*------API-DE-CAMPAÑA COMERCIAL----------------------------*/
/*------API-DE-CARRITO PAQUETES EN UNA MISMA ETIQUETA-------*/
/*------API-DE-CATEGORÍAS-----------------------------------*/
/*------API-DE-CODIGO POSTAL DE MLM-------------------------*/
/*------API-DE-COSTOS DE ENVÍO------------------------------*/
/*------API-DE-CREDIT LEVEL---------------------------------*/
/*------API-DE-CUANTAS OFERTAS TIENE UNA SUBASTA------------*/
/*------API-DE-ESHOP----------------------------------------*/
/*------API-DE-ETIQUETA ML----------------------------------*/
/*------API-DE-FORMAS DE ENVÍO POR SITE---------------------*/
/*------API-DE-ITEM EN B=P----------------------------------*/
/*------API-DE-ÍTEMS----------------------------------------*/
/*------API-DE-LIBERACIÓN DE DINERO-------------------------*/
/*------API-DE-LIMITE MP POINT------------------------------*/
/*------API-DE-MEDIACIONES----------------------------------*/
/*------API-DE-MEDIOS DE PAGO ACEPTADOS POR SITE------------*/
/*------API-DE-MÉTODOS ACEPTADOS DE PAGO--------------------*/
/*------API-DE-MONTOS MÍNIMOS Y MÁXIMOS POR MEDIO DE PAGO---*/
/*------API-DE-OPERACIONES A LIBERAR------------------------*/
/*------API-DE-OPERACIONES RETENIDAS POR CHARGEBACKS--------*/
/*------API-DE-OPERACIONES RETENIDAS POR DEVOLUCIÓN EXPRESS-*/
/*------API-DE-OPINIONES------------------------------------*/
/*------API-DE-ORDERS---------------------------------------*/
/*------API-DE-PREGUNTAS REALIZADAS EN EL ÍTEM--------------*/
/*------API-DE-PREGUNTAS SIN RESPONDER----------------------*/
/*------API-DE-TITULARIDAD DE POINT-------------------------*/
const URL_TITULARIDAD = 'https://api.mercadolibre.com/point/services/poi/BBPOS-';
let SERIAL /*Test: 01099942713844*/
let URL_COMPLETA

window.addEventListener('load', function() {
    let IDE_BOTOM = document.getElementById("ejapi-30");
    let IDE_BOTOM2 = document.getElementById("ejapi-30");
    IDE_BOTOM.addEventListener('click', buscarPoint, false);
});

function buscarPoint() {
    SERIAL = document.getElementById("serialpoint").value.trim()
    URL_COMPLETA = `${URL_TITULARIDAD}${SERIAL}`
    consulta(URL_COMPLETA, OPTS)
        .then(function(data) {
            addElement(data)
        })
        .catch(function() {
            alert("Revisa el Serial")
        })
}

function addElement(data) {
    document.getElementById("resultado-point").innerHTML = `El dueño es: ${data.user_id}`;
}

/*------API-DE-USUARIO CONFIABLE----------------------------*/
/*------API-DE-VALIDACIÓN CÓDIGO UNIVERSAL DE PRODUCTO------*/


/*----------API TITULARIDAD POINT----------*/



/*----------API Liberación Cobros Mercado Pado----------*/

/*    URL_COMPLETA = `https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=2959486596&user_id=189920495&access_token=XXXXXX'` */



const OPTS = { crossDomain: true };
let promese





function consulta(URL_COMPLETA, OPTS) {
    promese = new Promise((resolve, reject) => {
        $.get(URL_COMPLETA, OPTS, function(data) {
            resolve(data)
        }).fail(() => reject())
    })

    return promese
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function buscarCobro() {
    let user = document.getElementById("user_id").value.trim()
    let cobro = document.getElementById("cobro_id").value.trim()
    let token = document.getElementById("cobro_id").value.trim()
    URL_COMPLETA = `https://api.mercadolibre.com/mercadopago_account/movements/search?reference_id=${cobro}&user_id=${user}&access_token=${token}'`
    consulta(URL_COMPLETA, OPTS)
        .then(function(data) {
            addElement(data)
        })
        .catch(function() {
            alert("Revisa el Serial")
        })
}