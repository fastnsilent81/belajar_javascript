//Object berisi para seller minuman
//object ini disediakan

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan object bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 */
function beliTermurah(toBuy) {
	var sellers = {
		BobaFett: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.15
		},
		BobaFest: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
		},
		ChatTime: {
			items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
		},
		Kokumi: {
			items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
		}
	};

	 // Declare an object 
	

	// Using Object.keys() method to get length 
	//Object.keys(sellers).length; 

	//return Object.keys(sellers)[0];
	//return sellers[Object.keys(sellers)[0]].items;
	//return sellers[Object.keys(sellers)[0]].items.length;
	//return sellers[Object.keys(sellers)[0]].items[1].name;

	/*
	
	*/
	var drink = '';
	var temp_harga = 0;
	var temp_harga2 = 0;
	var jumlah_seller = Object.keys(sellers).length;
	var current_seller = '';
	var message = '';
	if(toBuy.length == 0){
		message = "Pembeli tidak membeli apa-apa";
	}
	else{
		for(var i=0;i<toBuy.length;i++){
			drink = toBuy[i];
			for(var j=0;j<jumlah_seller;j++){
				//current_seler = Object.keys(sellers)[j];
				for(var k=0;k<sellers[Object.keys(sellers)[j]].items.length;k++){
					if(drink == sellers[Object.keys(sellers)[j]].items[k].name){ //jika nama minuman sama
						//ambil harganya
						if(j == 0 ) {//seller pertama
							temp_harga = sellers[Object.keys(sellers)[j]].items[k].price - (sellers[Object.keys(sellers)[j]].items[k].price * sellers[Object.keys(sellers)[j]].discount);
						}
						else{
							temp_harga2 = sellers[Object.keys(sellers)[j]].items[k].price - (sellers[Object.keys(sellers)[j]].items[k].price * sellers[Object.keys(sellers)[j]].discount);
							if(temp_harga > temp_harga2){
								current_seler = Object.keys(sellers)[j];
								temp_harga = temp_harga2;							
							}
						}
					}
				}
			}		
			message = message + drink+' bisa dibeli dengan harga paling murah '+temp_harga+' di '+ current_seler+' \n';
			current_seler = '';
		}
	}
	

	return message;
	


}

var tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
var tc2 = ['Fett Drink'];
var tc3 = [];
var tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
*/
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(
	beliTermurah(tc4)
); /**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */