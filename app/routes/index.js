import Router from 'koa-router'
import login from './login'
import translation from './translation'

const router = Router()

// 翻译
router.use('/api', translation.routes(), translation.allowedMethods())

// 登录
router.use('/api', login.routes(), login.allowedMethods())

export default router

