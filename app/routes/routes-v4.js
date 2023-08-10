//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

/*
 * Date checks
 */
router.post('/v4/date-identity-checks', function (req, res) {

    res.redirect('documents-checked-1')
    
})



/*
 * UK national 
 */
router.post('/v4/documents-checked-1', function (req, res) {

    res.redirect('documents-checked-2')
    
}) 

/*
 * Group 1
 */
router.post('/v4/documents-checked-2', function (req, res) {
    
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
router.post('/v4/documents-checked-3', function (req, res) {

    

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
router.post('/v4/documents-checked-4', function (req, res) {


    /*
    * Route 1
    */
    if (req.session.data['selectedDocs'] >= "3") {
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
    
    /*
    * Route 2
    */
    else if (req.session.data['group2Docs'] >= "3") {
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
    }
}) 


/*
 * address
 */
router.post('/v4/documents-checked-11', function (req, res) {
  
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
router.post('/v4/documents-checked-6', function (req, res) {



    if (req.session.data['docs-address'] === 'yes') {
        
        res.redirect('documents-checked-8')
    }
    // Otherwise take them to a stop screen
    else{
        res.redirect('documents-checked-10')
    }
    

}) 


router.post('/v4/documents-checked-12', function (req, res) {



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
router.post('/v4/documents-checked-7', function (req, res) {



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
router.post('/v4/documents-checked-8', function (req, res) {
    
    res.redirect('keep-records')

}) 



/*
 * Documents do not meet GPG45 medium standard - Continue to service (review if this should be a stop screen)
 */
router.post('/v4/documents-checked-10', function (req, res) {
    
    res.redirect('keep-records')

}) 



  module.exports = router