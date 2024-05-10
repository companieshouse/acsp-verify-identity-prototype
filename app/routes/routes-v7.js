//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
 * Start page
 */
router.post('/v7/start-page', function (req, res) {

    res.redirect('name')
    
})




/*
 * Name
 */
router.post('/v7/name', function (req, res) {

    res.redirect('email-address')
    
})

/*
 * Email address
 */
router.post('/v7/email-address', function (req, res) {

    res.redirect('dob')
    
})



/*
 * Date of birth
 */
router.post('/v7/dob', function (req, res) {

    res.redirect('address-lookup')
    
})




/*
 * lookup  address
 */
router.post('/v7/address-lookup', function (req, res) {

          //if house number is empty
          if (req.session.data['house-number'] === '') {

            res.redirect('address-list')
    
          } else {
            // go to the confirm address page
            res.redirect('address-confirm')
        
          }
        
    
})


/*
 * Confirm home address
 */
router.post('/v7/address-confirm', function (req, res) {

    res.redirect('date-identity-checks')
    
})



/*
 * Date the documents were checked
 */
router.post('/v7/date-identity-checks', function (req, res) {

    res.redirect('format-of-the-documents-checked')
    
})




/*
 * Format the documents were checked
 */
router.post('/v7/format-of-the-documents-checked', function (req, res) {

     //if house number is empty
     if (req.session.data['security-check'] === 'yes') {

        res.redirect('documents-checked-r1')

      } else {
        // go to the confirm address page
        res.redirect('documents-checked-r2')
    
      }

})



/*
 * Document group 1
 */
router.post('/v7/documents-checked-r1', function (req, res) {

    res.redirect('id-check')
    
})



/*
 * Document group 2
 */
router.post('/v7/documents-checked-r2', function (req, res) {

    res.redirect('id-check')
    
})

/*
 * Declaration 
 */
router.post('/v7/id-check', function (req, res) {

    res.redirect('check-your-answers')
    
})

/*
 * Check your answers before sending your application 
 */
router.post('/v7/check-your-answers', function (req, res) {

    res.redirect('confirmation')
    
})













  module.exports = router