var config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX.appspot.com",
    messagingSenderId: "00000000000000"
};
firebase.initializeApp(config);

function Rodn() {
    //URLから検索されたobjectIDを確認します。
    de = location.search;
    idd = de.split("=");
    var url1 = 'msg/' + idd[1] + '/name'
    var url2 = 'msg/' + idd[1] + '/memo'

    //Firebaseから「name」データを取得してきます
    firebase.database();
    var commentsRef = firebase.database().ref(url1)
    commentsRef.on('value', function (snapshot) {
        names = snapshot.val();
        //「name」データを出力
        document.getElementById('name').textContent = names;

    });
    //Firebaseから「memo」データを取得してきます
    var commentsRef = firebase.database().ref(url2)
    commentsRef.on('value', function (snapshot) {
        memos = snapshot.val();
        //「name」データを出力
        document.getElementById('memo').textContent = memos;

    });

}
Rodn();