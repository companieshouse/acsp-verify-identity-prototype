//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
 * Start page
 */
router.post('/v13/start-page', function (req, res) {

    res.redirect('name')
    
})

/*
 * Public name, on the register
 */
router.post('/v13/name', function (req, res) {

    res.redirect('name-on-register')
    
})

/*
 * Public name, on the register
 */
router.post('/v13/name-on-register', function (req, res) {


     //Name preference 

     if (req.session.data['registerName'] === 'doc') {

        res.redirect('personal-code')

      } else {
        // go to the confirm address page
        res.redirect('name-for-the-register')
    
      }




    
})



/*
 * Name
 */
router.post('/v13/name-for-the-register', function (req, res) {

    res.redirect('personal-code')
    
})

/*
 * Personal code
 */
router.post('/v13/personal-code', function (req, res) {

    res.redirect('email-address')
    
})

/*
 * Email address
 */
router.post('/v13/email-address', function (req, res) {

    res.redirect('email-address-confirm')
    
})


/*
 * Email address confirm
 */
router.post('/v13/email-address-confirm', function (req, res) {

    res.redirect('dob')
    
})

/*
 * Date of birth
 */
router.post('/v13/dob', function (req, res) {

    res.redirect('address-lookup')
    
})




/*
 * lookup  address
 */
router.post('/v13/address-lookup', function (req, res) {

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
router.post('/v13/address-confirm', function (req, res) {

    res.redirect('date-identity-checks')
    
})



/*
 * Date the documents were checked
 */
router.post('/v13/date-identity-checks', function (req, res) {

    res.redirect('format-of-the-documents-checked')
    
})




/*
 * Format the documents were checked
 */
router.post('/v13/format-of-the-documents-checked', function (req, res) {

     //if house number is empty
     if (req.session.data['security-check'] === 'Yes') {

        res.redirect('documents-checked-r1')

      } else {
        // go to the confirm address page
        res.redirect('documents-checked-r2')
    
      }

})




/*
 * Document group 1
 */
router.post('/v13/documents-checked-r1', function (req, res) {

    res.redirect('id-document-details')
    
})



/*
 * Document group 2
 */
router.post('/v13/documents-checked-r2', function (req, res) {

    res.redirect('id-document-details')
    
})


/*
 * Document details used for IDV
 */
router.post('/v13/id-document-details', function (req, res) {

    res.redirect('id-check')
    
})



/*
 * Declaration 
 */
router.post('/v13/id-check', function (req, res) {

    res.redirect('check-your-answers')
    
})

/*
 * Check your answers before sending your application 
 */
router.post('/v13/check-your-answers', function (req, res) {

    res.redirect('confirmation')
    
})













  module.exports = router