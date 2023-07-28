//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
 * UK national 
 */
router.post('/v4/documents-checked-1', function (req, res) {

    res.redirect('documents-checked-2')
    
}) 

/*
 * Group 2
 */
router.post('/v4/documents-checked-2', function (req, res) {
    
    //if 3 documents are selected ->  res.redirect('documents-checked-6')

    //if 2 documents are selected -> 
    if (req.session.data['selectedDocs'] >= "3") {
        res.redirect('documents-checked-6')
    }
    else if(req.session.data['selectedDocs'] <= "2") {

        res.redirect('documents-checked-3')
    }

}) 

/*
 * Group 3
 */
router.post('/v4/documents-checked-3', function (req, res) {


     //if 2 documents are selected -> 
     if (req.session.data['group2Docs'] >= "2") {
        res.redirect('documents-checked-6')
    }
    else if(req.session.data['group2Docs'] <= "2") {

        res.redirect('documents-checked-4')
    }

}) 


/*
 * address
 */
router.post('/v4/documents-checked-6', function (req, res) {


     //If it is the relevant officer, ask to confirm the statement. 
     if (req.session.data['docs-address'] === 'yes') {
        
        res.redirect('documents-checked-7')
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


     //If it is the relevant officer, ask to confirm the statement. 
     if (req.session.data['address-issues'] === 'yes') {
        res.redirect('documents-checked-8')
        
    }
    // Otherwise take them to a stop screen
    else{

        res.redirect('documents-checked-9')


    }

}) 








  module.exports = router