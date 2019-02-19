$.when( $.ready ).then(function() {

	var qnum = -1;

	$("#alts").click(function() {
		
		if (qnum == -1) {

			qnum += 1;
			var h2Header = "<h2>" + data[qnum].question +"</h2>";
			$("h1").replaceWith(h2Header);
			generateButtons(qnum);

		} else {

			if($(this).attr("data") == "false"){
				$(this).addClass("wrong");
			}

		}
		
	});

} );

function generateButtons(id){

	$("#alts").empty();

	for (let choice of data[id].choices){
		$("#alts").append('<button data="'+choice.answer+'">'+choice.item+'</button>');
	}

}

data = [
	{
		question: `Do you need a shared consistent data store?`,
		fact: `If you don't need a consistent data store, you don't need a Blockchain. Consider a spreadsheet.`,
		choices: [
		{
			id: Math.random(),
			item: "YES",
			answer: true
		},
		{
			id: Math.random(),
			item: "NO",
			answer: false
		}
		]
	},
	{
	question: `Does more than one entity need to contribute data?`,
	fact: `Blockchains are usually used when data comes from multiple entities. Consider using a database.`,
	choices: [
		{
		id: Math.random(),
		item: "YES",
		answer: true
		},
		{
		id: Math.random(),
		item: "NO",
		answer: false
		},
		{
		id: Math.random(),
		item: "NO... BUT I NEED AUDITING",
		answer: true
		}
	]
	},
	{
	question: `Data records, once written, are never updated or deleted?`,
	fact: `Blockchains do not allow for modification of historical data, they are strongly auditable. Consider a database.`,
	choices: [
		{
		id: Math.random(),
		item: "YES",
		answer: true
		},
		{
		id: Math.random(),
		item: "NO",
		answer: false
		}
	]
	},
	{
	question: `Sensitive identifiers will not be written to the data store?`,
	fact: `You should not write sensitive information to a Blockchain that requires long term confidentiality. Try an encrypted database.`,
	choices: [
		{
		id: Math.random(),
		item: "YES",
		answer: true
		},
		{
		id: Math.random(),
		item: "NO",
		answer: false
		}
	]
	},
	{
	question: `Are entities with write access having a hard time deciding who should be in control of the data store?`,
	fact: `If there are no trust issues over who runs the data store a traditional database should suffice.`,
	choices: [
		{
		id: Math.random(),
		item: "YES",
		answer: true
		},
		{
		id: Math.random(),
		item: "NO",
		answer: false
		}
	]
	},
	{
	question: `Do you want a tamperproof log of all writes to the data store?`,
	fact: `If you don't need to audit what happened and when it happened a database will suffice.`,
	choices: [
		{
		id: Math.random(),
		item: "YES",
		answer: true
		},
		{
		id: Math.random(),
		item: "NO",
		answer: false
		}
	]
	}
];