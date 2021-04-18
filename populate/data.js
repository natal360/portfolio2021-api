// npm run populate　　package.jsonに追加　node populate/index.js
// 上記のコマンドを使用し MongoDB　にデータを置き換える

const data = {
  portfolios: [
    {
      title: 'カスタムアイデンティティ',
      description: 'ユーザー認証を詳細に設定出来るようにします',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTTigpK-hvCKfKs6N01_GP1IYtF3o-K9E9UHliny-wMPawzg02bvB6yqzz_T8fr4QfYm1FtfHCYTy7L/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: '予定の管理',
      description: 'カレンダーコントロールで予定を管理します',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQoK9oWDuYroQtozZ6oD3fgkkD6fw5b4exnmC89OLIiIO8zQquLjYAga4LFUlNU5MOPO8QE7X4OcsFn/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: '管理システム',
      description: '社内用申請システム',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQQ5cA-WO4KmfUlyqHBj_TaBhr78KkfMsbS03hw32oGI5p4dyE7Cc8DRZi3_6sGauT_hPVN0fo0vyeb/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: '動画アップロード',
      description: '簡易な動画アップロード',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQuaacy9Sprueb4V5TDYMjZYAiUDf5DGYqGrJaJz4wIZBYdi0lFkDGWc42VUWug3MzAFIk7gvsIlq5G/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: 'Excel ファイル編集',
      description: 'PythonでExcelファイルを一括操作します。',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'Python　GUIアプリ',
      classification: 'デスクトップアプリ',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQaT_jEve7GWbyGVwqmY_QDjcMsIvawAu-zsfAva_M80AwliU8Cmf2WshRYv9Uiu4b3iWwr4h3gIJmY/pub?start=false&loop=false&delayms=3000"
    },
    {
      title: 'microCMSを導入したDEMOサイト',
      description: 'CMSを使用したカフェのサイトです。',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'Vue',
      classification: 'WEB',
      webSite: "https://elated-pasteur-5f1303.netlify.app",
      slideUrl: ""
    },
    {
      title: 'ECサイトデモ',
      description: '表示に時間が掛かります。',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'React',
      classification: 'WEB',
      webSite: "https://crwn-crwn-2021.herokuapp.com/",
      slideUrl: ""
    },
    {
      title: '旧ポートフォリオサイト',
      description: '表示に時間が掛かります。主にC#,VB.net デスクトップアプリのサイトです。ユーザー名 : guest　パスワード : portphorio2020',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'Angular',
      classification: 'WEB',
      webSite: "https://portphorio-app.herokuapp.com",
      slideUrl: ""
    }
  ]
}

module.exports = data;