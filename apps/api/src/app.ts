import { createApp } from '@api/core/factories/create-app.js'
import defineOpenAPI from '@api/core/openapi/config.js'
import productRouter from '@api/features/product/index.js'

const app = createApp()

defineOpenAPI(app)

app.route('/products', productRouter)

export default app
