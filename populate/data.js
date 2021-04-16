// npm run populate　　package.jsonに追加　node populate/index.js
// 上記のコマンドを使用し MongoDB　にデータを置き換える
// const data = {
//   portfolios: [
//     {
//       title: 'microCMSを導入したDEMOサイト',
//       company: 'Netcentric',
//       companyWebsite: 'www.google.com',
//       location: 'Spain, Barcelona',
//       description: 'Doing something, programing....',
//       userId: "google-oauth2|104089146895301857372",
//       startDate: '01/01/2014',
//       endDate: '01/01/2016',
//       cardTitle: 'Vue',
//       type: 'WEB',
//       webSite: "https://elated-pasteur-5f1303.netlify.app",
//       portfolioURL: ""

//     },
//     {
//       title: 'Job in Siemens',
//       company: 'Siemens',
//       companyWebsite: 'www.google.com',
//       location: 'Slovakia, Kosice',
//       description: 'Responsoble for parsing framework for JSON medical data.',
//       userId: "google-oauth2|104089146895301857372",
//       startDate: '01/01/2011',
//       endDate: '01/01/2013',
//       cardTitle: 'ASP.NET Core',
//       type: 'WEB',
//       webSite: "",
//       portfolioURL: "https://docs.google.com/presentation/d/e/2PACX-1vTTigpK-hvCKfKs6N01_GP1IYtF3o-K9E9UHliny-wMPawzg02bvB6yqzz_T8fr4QfYm1FtfHCYTy7L/embed?start=false&loop=false&delayms=3000"
//     },
//     {
//       title: 'Work in USA',
//       company: 'WhoKnows',
//       companyWebsite: 'www.google.com',
//       location: 'USA, Montana',
//       description: 'So much responsibility....Overloaaaaaad',
//       userId: "google-oauth2|104089146895301857372",
//       startDate: '01/01/2010',
//       endDate: '01/01/2011',
//       cardTitle: 'ASP.NET Core',
//       type: 'WEB',
//       webSite: "",
//       portfolioURL: "https://docs.google.com/presentation/d/e/2PACX-1vQoK9oWDuYroQtozZ6oD3fgkkD6fw5b4exnmC89OLIiIO8zQquLjYAga4LFUlNU5MOPO8QE7X4OcsFn/embed?start=false&loop=false&delayms=3000"
//     }
//   ]
// }

// module.exports = data;


const data = {
  portfolios: [
    {
      title: 'microCMSを導入したDEMOサイト',
      description: 'Doing something, programing....',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'Vue',
      classification: 'WEB',
      webSite: "https://elated-pasteur-5f1303.netlify.app",
      slideUrl: "https://elated-pasteur-5f1303.netlify.app"

    },
    {
      title: 'Job in Siemens',
      description: 'Responsoble for parsing framework for JSON medical data.',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTTigpK-hvCKfKs6N01_GP1IYtF3o-K9E9UHliny-wMPawzg02bvB6yqzz_T8fr4QfYm1FtfHCYTy7L/embed?start=false&loop=false&delayms=3000"
    },
    {
      title: 'Work in USA',
      description: 'So much responsibility....Overloaaaaaad',
      userId: "google-oauth2|104089146895301857372",
      headTitle: 'ASP.NET Core',
      classification: 'WEB',
      webSite: "",
      slideUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQoK9oWDuYroQtozZ6oD3fgkkD6fw5b4exnmC89OLIiIO8zQquLjYAga4LFUlNU5MOPO8QE7X4OcsFn/embed?start=false&loop=false&delayms=3000"
    }
  ]
}

module.exports = data;