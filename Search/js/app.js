var search = instantsearch({
    appId: 'XXXXXXXXXXX',
    apiKey: 'XXXXXXXXXXXXXXXXX', // メモっていたsearch only API key　adminではないです。
    indexName: 'sample',
    urlSync: true,　　//ブラウザのURLが同期され、ユーザーは現在の検索状態に対応する貼り付けURLをコピーできます。
    searchParameters: {
        hitsPerPage: 10  //1ページあたりの表示するデータ数
    }
});

//検索範囲を縛ることができます
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input'
    })
);

// 検索結果を表示する
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: "キーワード <em>\"{{query}}\"</em>は存在しません"
        }
    })
);

//ページネーション
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
);
//検索をスタートさせる
search.start();