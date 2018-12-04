import Router from 'koa-router'
const {Translate} = require('@google-cloud/translate')

const router = Router()

router.get('/translation', async (ctx, next) => {
    const parameter = ctx.request.body
    console.log('parameter', parameter)

    ctx.body = 'ddd'

})

export default router

