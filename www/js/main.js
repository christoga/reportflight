document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD55-o52OHGk97yNQCRfQtnmdL6G4ZgJI0",
	authDomain: "airport-d0ac6.firebaseapp.com",
	databaseURL: "https://airport-d0ac6.firebaseio.com",
	projectId: "airport-d0ac6",
	storageBucket: "airport-d0ac6.appspot.com",
	messagingSenderId: "637529405982"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

function submitReport() {
	var title = $('#reportTitle').val(),
		text = $('#reportText').val(),
		target = $('#reportTarget').val(),
		person = $('#reportSender').val();

	var ref = rootRef.child('flightReport')

	var manager = ref.child('manager/report'),
		maskapai = ref.child('maskapai/report'),
		kemenhub = ref.child('kemenhub/report'),
		ylki = ref.child('ylki/report'),
		keluarga = ref.child('keluarga/report')

	if (target == 'manager') {
		manager.push().set({
			pengirim: person,
			judul: title,
			pesan: text,
			untuk: 'Manager Bandara'
		}, function(error) {
			if (!error) {
				alert("Komplain mu telah kami terima, terima kasih. :)")
			}
		})
	} else if (target == 'maskapai') {
		maskapai.push().set({
			pengirim: person,
			judul: title,
			pesan: text,
			untuk: 'Maskapai Penerbangan'
		}, function(error) {
			if (!error) {
				alert("Komplain mu telah kami terima, terima kasih. :)")
			}
		})
	} else if (target == 'kemenhub') {
		kemenhub.push().set({
			pengirim: person,
			judul: title,
			pesan: text,
			untuk: 'Kementrian Perhubungan'
		}, function(error) {
			if (!error) {
				alert("Komplain mu telah kami terima, terima kasih. :)")
			}
		})
	} else if (target == 'ylki') {
		ylki.push().set({
			pengirim: person,
			judul: title,
			pesan: text,
			untuk: 'YLKI - Yayasan Lembaga Konsumen Indonesia'
		}, function(error) {
			if (!error) {
				alert("Komplain mu telah kami terima, terima kasih. :)")
			}
		})
	} else {
		alert('Gagal mengirim pesan')
	}
}