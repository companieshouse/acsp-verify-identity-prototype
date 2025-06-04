//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
 * Start page
 */
router.post('/v2-amend/start-page', function (req, res) {

    res.redirect('')
    
})



/*
 * What do you want to change?
 */
router.post('/v2-amend/what-do-you-want-to-change', function (req, res) {


    if (req.session.data['data-to-change'].includes("name")) {

        res.redirect('name')

    }
    else if (req.session.data['data-to-change'].includes("statement")) {

        res.redirect('name-for-the-register')

    }
    else if (req.session.data['data-to-change'].includes("dob")){

        res.redirect('dob')

    }
     else if (req.session.data['data-to-change'].includes("home-address")) {

        res.redirect('address-lookup')

    }
     else if (req.session.data['data-to-change'].includes("email")){

        res.redirect('email-address')

    }
    else if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
     else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
        
        // reason for the change
        res.redirect('reason-for-change')
        
    
    }
 


    
})




/*
 * Public name, on the register
 */
router.post('/v2-amend/name', function (req, res) {

    if (req.session.data['data-to-change'].includes("statement")) {

        res.redirect('name-for-the-register')

    }
    else if (req.session.data['data-to-change'].includes("dob")){

        res.redirect('dob')

    }
     else if (req.session.data['data-to-change'].includes("home-address")) {

        res.redirect('address-lookup')

    }
     else if (req.session.data['data-to-change'].includes("email")){

        res.redirect('email-address')

    }
     else if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
     else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
        // reason for the change
        res.redirect('reason-for-change')
    }
    
})

/*
 * Public name, on the register - Not needed for this service 
 */
/* router.post('/v2-amend/name-on-register', function (req, res) {


     //Name preference 

     if (req.session.data['registerName'] === 'doc') {

        res.redirect('email-address')

      } else {
        // go to the confirm address page
        res.redirect('name-for-the-register')
    
      }

    
}) */


/*
 * Name for the register 
 */
router.post('/v2-amend/name-for-the-register', function (req, res) {

    if (req.session.data['data-to-change'].includes("dob")){

        res.redirect('dob')

    }
     else if (req.session.data['data-to-change'].includes("home-address")) {

        res.redirect('address-lookup')

    }
     else if (req.session.data['data-to-change'].includes("email")){

        res.redirect('email-address')

    }
     else if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
     else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
        // reason for the change
        res.redirect('reason-for-change')
    }
})

/*
 * Personal code - Content could be moved onto the email page
 */
/* router.post('/v2-amend/personal-code', function (req, res) {

    res.redirect('email-address')
    
}) */


/*
 * Date of birth
 */
router.post('/v2-amend/dob', function (req, res) {

    if (req.session.data['data-to-change'].includes("home-address")) {

        res.redirect('address-lookup')

    }
    else if (req.session.data['data-to-change'].includes("email")){

        res.redirect('email-address')

    }
     else if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
     else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
       // reason for the change
        res.redirect('reason-for-change')
    }
    
})







/*
 * lookup  address
 */
router.post('/v2-amend/address-lookup', function (req, res) {

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
router.post('/v2-amend/address-confirm', function (req, res) {


    if (req.session.data['data-to-change'].includes("email")){

        res.redirect('email-address')

    }
     else if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
     else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
        // reason for the change
        res.redirect('reason-for-change')
    }




    
})






/*
 * Email address
 */
router.post('/v2-amend/email-address', function (req, res) {

    if (req.session.data['data-to-change'].includes("date-checked-completed")){

        res.redirect('date-identity-checks')

    }
    else if (req.session.data['data-to-change'].includes("documents-checked")) {

        res.redirect('format-of-the-documents-checked')

    }
    else {
        // reason for the change
        res.redirect('reason-for-change')
    }
    
})






/*
 * Date the documents were checked
 */
router.post('/v2-amend/date-identity-checks', function (req, res) {

    res.redirect('format-of-the-documents-checked')
    
})




/*
 * Format the documents were checked
 */
router.post('/v2-amend/format-of-the-documents-checked', function (req, res) {

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
router.post('/v2-amend/documents-checked-r1', function (req, res) {

    res.redirect('id-document-details')
    
})



/*
 * Document group 2
 */
router.post('/v2-amend/documents-checked-r2', function (req, res) {

    res.redirect('id-document-details')
    
})


/*
 * Document details used for IDV
 */
router.post('/v2-amend/id-document-details', function (req, res) {

    res.redirect('reason-for-change')
    
})



/*
 * Declaration 
 */
router.post('/v2-amend/id-check', function (req, res) {

    // reason for the change
    res.redirect('reason-for-change')
    
})



/*
 * Reason for change
 */
router.post('/v2-amend/reason-for-change', function (req, res) {

    // reason for the change
    res.redirect('check-your-answers')
    
})


/*
 * Check your answers before sending your application 
 */
router.post('/v2-amend/check-your-answers', function (req, res) {

    res.redirect('confirmation')
    
})



  module.exports = router