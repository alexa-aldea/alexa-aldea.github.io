var population = {
   'SWE': 10084524,
    'NOR':  5411300,
    'DNK':  5787448,
    'UK':  67802740,
} ;  

var no_deaths = {
    'SWE': [ 2,  1,  5,  4,  1,  6, 13, 22, 15, 28,  0,  5, 36, 34, 59, 69, 50, 15, 28, 76,114, 96,106, 77,17,12,20,114,170,130],
    'NOR': [ 3,  1,  0,  0,  0,  3,  2,  2,  0,  5,  4,  3,  6,  7,  5,  6,  9,  3,  9,  5, 13, 12,  7,  5,  6, 9, 6, 5, 11,2],
    'DNK': [ 0,  2,  3,  4,  0, 11,  8,  2,  7, 11, 13,  7,  5, 13, 14, 19, 16, 22, 18,  8, 16, 15, 19, 10, 13, 13, 12, 14, 10,12],
    'UK' :  [33, 40, 33, 56, 48, 54, 87, 41,115,181,260,209,180,381,563,569,684,708,621,439,786,938,881,980,917,737,717,778,761, 861],
};
        
function range(lowEnd, highEnd)
{
	var range_list = [];
	for (var i = lowEnd; i <= highEnd; i++) {
    		range_list.push(i);
	}
	return range_list;
}

function computeNoDeathsPer1MPop( )
{
	var result = {labels:[], dataset:{}, legend:[]};

	labels_mar = range(18, 31).map(item => 'Mar'.concat(item.toString()));
	labels_apr = range(1, 16).map(item => 'Apr'.concat(item.toString()));
        result.labels = labels_mar.concat(labels_apr)

	for(var country in population) 
	{
		result.legend.push(country);
		result.dataset[country] = no_deaths[country].map(item => Math.round(item/population[country]*1000000));
 	}	
	
	return result;
}






