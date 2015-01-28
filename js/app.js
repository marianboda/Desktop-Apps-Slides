console.log('included')
$(document).ready(function(){

var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['JavaScript', 12],
            ['css', 3],
            ['other', 3],
            ['no language', 7],
        ],
        type : 'pie',
				bindto: '#chart',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
		legend: {
			position: 'right'
		}
})

});
