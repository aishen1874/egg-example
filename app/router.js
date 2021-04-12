'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  router.get('/', controller.home.index)

  router.get('/login', controller.home.login)

  router.get('/newsList', controller.news.getNewsList)

  router.get('/newsDetail/:newsId', controller.news.getNewsDetail)
}
