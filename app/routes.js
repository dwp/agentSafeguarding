const express = require('express')
const router = express.Router()


// Run this code when a form is submitted to 'test' asking for ref number only if the police were called
router.post('/beta/incident_manager/test', function (req, res) {

    // Make a variable and give it the value from 'prnQuestion'
    var werePoliceCalled = req.session.data['policeQuestion']
  
    // Check whether the variable matches a condition
    if (werePoliceCalled == "no"){
      // Send user to next page
      res.redirect('/beta/incident_manager/04add_soars')
    } else {
      // Send user to ineligible page
      res.redirect('/beta/incident_manager/02action')
    }
  
  })

// Run this code when a form is submitted to 'test2' asking if reported in SOARS
router.post('/beta/incident_manager/test2', function (req, res) {

    // Make a variable and give it the value from 'prnQuestion'
    var werePoliceCalled = req.session.data['soarsQuestion']
  
    // Check whether the variable matches a condition
    if (werePoliceCalled == "no"){
      // Send user to next page
      res.redirect('end')
    } else {
      // Send user to ineligible page
      res.redirect('/beta/incident_manager/05fast')
    }
  
  })

// Run this code when a form is submitted to 'route' in witnesses to simulate on behalf of journey
router.post('/beta/incident_manager/add_witness/route', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var isItTim = req.session.data['full-name'].toLowerCase()

  // Check whether the variable matches a condition
  if (isItTim == "mike" || isItTim == "mike black"){
    // Send user to next page
    res.redirect('00add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('01list_witness')
  }

})



// Add your routes here - above the module.exports line

// copy the const name and the file path to new version

const lettergeneratorV1 = require('./routes/lettergeneratorV1');;


//copy the router use and update the sprint version

router.use(lettergeneratorV1);

module.exports = router
