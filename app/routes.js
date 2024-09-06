//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



router.use('/', require('./routes/routes-v4.js'))


router.use('/', require('./routes/routes-v5.js'))

router.use('/', require('./routes/routes-v6.js'))


router.use('/', require('./routes/routes-v7.js'))

router.use('/', require('./routes/routes-v8.js'))

router.use('/', require('./routes/routes-v9.js'))


module.exports = router