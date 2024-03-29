//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
 * Check the standards been met
 */
router.post('/v7/start-page', function (req, res) {

    res.redirect('check-standard-met')
    
})



/*
 * Check the standards been met
 */
router.post('/v7/check-standard-met', function (req, res) {

    res.redirect('name')
    
})


/*
 * Name
 */
router.post('/v7/name', function (req, res) {

    res.redirect('dob')
    
})

/*
 * date of birth
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

    res.redirect('email-address')
    
})





/*
 * Email and mobile number for sending personal code
 */
router.post('/v7/email-address', function (req, res) {

    res.redirect('date-identity-checks')
    
})





/*
 * Date checks
 */
router.post('/v7/date-identity-checks', function (req, res) {

    res.redirect('documents-checked-2')
    
})



/*
 * UK national 

router.post('/v6/documents-checked-1', function (req, res) {

    res.redirect('documents-checked-2')
    
})  */

/*
 * Group 1
 */
router.post('/v7/documents-checked-2', function (req, res) {
    
    //if 3 documents are selected ->  res.redirect('documents-checked-6')

    // if (req.session.data['selectedDocs'] >= "3") {
    //     res.redirect('documents-checked-6')
    // }
    // else {

        res.redirect('documents-checked-3')
    // }

}) 

/*
 * Group 2
 */
router.post('/v7/documents-checked-3', function (req, res) {

    

    //1 document from Group 1 AND 2 or more documents are selected from Group 2 - END journey 
     /* Route 1
    */

    // if (req.session.data['selectedDocs'] >= "3") {
    //     res.redirect('documents-checked-6')
    // }

    // else if ((req.session.data['selectedDocs'] == "1") && (req.session.data['group2Docs'] >= "2")) {
        
    //     res.redirect('documents-checked-6')

    // }
    // /* Route 1
    // */
    // else if ((req.session.data['selectedDocs'] == "2") && (req.session.data['group2Docs'] >= "1")) {
        
    //     res.redirect('documents-checked-6')

    // }
   
    

    // /* Route 2
    // */
    // else if ((req.session.data['selectedDocs'] == "0") && (req.session.data['group2Docs'] >= "3")) {

    //     res.redirect('documents-checked-12')
    //     //different page after this - route 2 
    // }
    

    // /* Route 1 and 2 (fall through to group 3)
    // */

    // else{

    //     res.redirect('documents-checked-4')

    // }
    res.redirect('documents-checked-4')

}) 

/*
 * Group 3
 */
router.post('/v7/documents-checked-4', function (req, res) {


    /*
    * Route 1
    */
   /* if (req.session.data['selectedDocs'] >= "3") {
         res.redirect('documents-checked-6')
    }
    else if ((req.session.data['selectedDocs'] == "1") && (req.session.data['group2Docs'] >= "2")) {
         res.redirect('documents-checked-6')

    }
    else if ((req.session.data['selectedDocs'] == "2") && (req.session.data['group2Docs'] >= "1")) 
    {   
         res.redirect('documents-checked-6')
    }
    else if((req.session.data['selectedDocs'] == "1") && (req.session.data['group3Docs'] >= "2")) {
        
        res.redirect('documents-checked-6')
    }
    else if ((req.session.data['selectedDocs'] == "2") && (req.session.data['group3Docs'] >= "1")) {   
        res.redirect('documents-checked-6')
    }
    else if((req.session.data['selectedDocs'] == "1") && (req.session.data['group2Docs'] == "1") && (req.session.data['group3Docs'] >= "1")){
        res.redirect('documents-checked-6')
    }
    */
    /*
    * Route 2
    */
    /*else if (req.session.data['group2Docs'] >= "3") {
        res.redirect('documents-checked-12')
    }
    else if ((req.session.data['group2Docs'] == "1") && (req.session.data['group3Docs'] >= "2")) {
        res.redirect('documents-checked-12') 
    }
    else if ((req.session.data['group2Docs'] == "2") && (req.session.data['group3Docs'] >= "1")) {
        res.redirect('documents-checked-12')
    }
    //check?
    else {
        res.redirect('documents-checked-10')
    } */

    res.redirect('documents-checked-8')

}) 


/*
 * address
 */
router.post('/v7/documents-checked-11', function (req, res) {
  
  /*
    * Route 3
    */
   if ((req.session.data['birthCert'] == "no")){   
    res.redirect('documents-checked-10')
    }   
    else{
            if ((req.session.data['group2Docs'] >= "4") ) {
            
                res.redirect('documents-checked-8')
            }
            else if ((req.session.data['group2Docs'] == "1")  && (req.session.data['group3Docs'] >= "3")) {
                
                    res.redirect('documents-checked-8')
            }
            else if ((req.session.data['group2Docs'] == "2")  && (req.session.data['group3Docs'] >= "2")) {
                
                res.redirect('documents-checked-8')
            }
            else if ((req.session.data['group2Docs'] == "3")  && (req.session.data['group3Docs'] >= "1")) {
                
                res.redirect('documents-checked-8')
            }   
            else{
                res.redirect('documents-checked-10')

                }
    }

}) 


/*
 * address
 */
router.post('/v7/documents-checked-6', function (req, res) {



    if (req.session.data['docs-address'] === 'yes') {
        
        res.redirect('documents-checked-8')
    }
    // Otherwise take them to a stop screen
    else{
        res.redirect('documents-checked-10')
    }
    

}) 


router.post('/v7/documents-checked-12', function (req, res) {



   if (req.session.data['address-DOB'] === 'yes') {
       
       res.redirect('documents-checked-8')
   }
   // Otherwise take them to a stop screen
   else{
       res.redirect('documents-checked-10')
   }
   

}) 



/*
 * address unsual
 */
router.post('/v7/documents-checked-7', function (req, res) {



     if (req.session.data['address-issues'] === 'yes') {
        res.redirect('documents-checked-8')
        
    }
    // Otherwise take them to a stop screen
    else{

        res.redirect('keep-records')


    }

}) 


/*
 * address history check
 */
router.post('/v7/documents-checked-8', function (req, res) {
    
    res.redirect('keep-records')

}) 



/*
 * Documents do not meet GPG45 medium standard - Continue to service (review if this should be a stop screen)
 */
router.post('/v7/documents-checked-10', function (req, res) {
    
    res.redirect('keep-records')

}) 


/*
* TESTING
*/


// Add your routes here
// ******* oe-details validation ********************************
router.get('/v7/zzz', function (req, res) {
    // Set URl
    res.render('/v5/zzz', {
      currentUrl: req.originalUrl
    })
  })
  
  router.post('/v7/zzz', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var emailHasError = false
  
    // Check if user has filled out a email
    if (req.session.data['emailAddress'] === '') {
      // No value so add error to array
      emailHasError = true
      errors.push({
        text: 'Enter your email address',
        href: '#emailAddress'
      })

      res.render('v5/pre-one-login/sign-in', {
        errorEmail: emailHasError,
        errorList: errors
      })
    }

  // ******* oe-details validation ********************************

 else {
      // User inputted value so move to next page
      res.redirect('/v7/pre-one-login/resident')
    }
  })






  module.exports = router