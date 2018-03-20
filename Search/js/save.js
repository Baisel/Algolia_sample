//以下には自分のに表示されたものを入力する
      var config = {
            apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            authDomain: "XXXXXXXXXXX.firebaseapp.com",
            databaseURL: "https://XXXXXXXXXXX.firebaseio.com",
            projectId: "XXXXXXXXXXX",
            storageBucket: "XXXXXXXXXX.appspot.com",
            messagingSenderId: "0000000000000"
        };
        firebase.initializeApp(config);

        function Create() {
           //入力データを取得
            names = document.getElementById("tx1").value;
            memos = document.getElementById("tx2").value;

            //Firebaseのデータベースにデータを保存する
            firebase.database();
            var commentsRef = firebase.database().ref('msg');
            commentsRef.push({ name: names, memo: memos })
            alert("保存");
        }