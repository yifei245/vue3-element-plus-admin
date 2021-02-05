import Mock from "mockjs"
const Random = Mock.Random;
const listData = function (){
  let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            id:i+1,
            title: Random.title(3, 5),
            name: Random.cname(),
            date: Random.date() + ' ' + Random.time() 
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles,
        total: articles.length
    }
}
Mock.mock('list', 'get', listData)
const selectData = function (){
    let articles = [];
      for (let i = 0; i < 10; i++) {
          let newArticleObject = {
              id:i+1,
              label: Random.title(3, 5),
              value: Random.cname()
          }
          articles.push(newArticleObject)
      }
      return articles
}
Mock.mock('select', 'get', selectData)
Mock.setup({
    timeout: 400
})