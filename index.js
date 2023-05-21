// calling api using jquery

$.ajax({
    method: 'GET',
  url: 'https://api.rootnet.in/covid19-in/stats/latest',

 success:function (response){
    var data=response.data.regional
    var summary=response.data.summary
    for(var i=0;i<data.length;++i){
        var tablerow=`<tr><td>${data[i].loc}</td>
        <td>${data[i].confirmedCasesForeign}</td>
        <td>${data[i].confirmedCasesIndian}</td>
        <td>${data[i].totalConfirmed
        }</td>
        <td>${data[i].deaths}</td>
        <td>${data[i].discharged}</td>
        </tr>`
        $('#tbody').append(tablerow)
    }
$('#covidtable').DataTable()


    var summar=`<tr>
    <td >${summary.confirmedCasesIndian}</td>
    <td >${summary.confirmedCasesForeign}</td>
    <td >${summary.total}</td>
    <td >${summary.discharged}</td>
    <td >${summary.deaths}</td>
    <td >${summary.confirmedButLocationUnidentified}</td>
    <td>${response.lastRefreshed}</td>
    <td>covid19india.org</td>
    </tr>`
    $('#tsummary').append(summar)
        },
        failure:function(error){

            console.log("faliure")
        //   alert(response.respnseText)
        }
     
})
