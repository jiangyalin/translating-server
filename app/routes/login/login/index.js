import Router from 'koa-router'
// import User from './model'

const router = Router()

// 登录
router.get('/', async (ctx, next) => {
    const parameter = ctx.request.body
    console.log('parameter', parameter)

    ctx.body = 'ddd'

    // const criteria = { is_deleted: 1, is_active: 1, password: parameter.password, $or: [{ nickname: parameter.username }, { phone: parameter.username }, { eMail: parameter.username }] } // 查询条件
    // const populate = []
    // const fields = { name: 1, nickname: 1, gender: 1, phone: 1, eMail: 1, birthDate: 1, avatar: 1, type: 1 } // 待返回的字段
    // const options = { sort: [{ createTime: -1 }] } // 排序
    //
    // ctx.body = await User(criteria, fields, options, populate).then((resolve) => {
    //     return resolve
    // }).catch((reject) => {
    //     return reject
    // })

})

export default router
