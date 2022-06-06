const express = require('express')
const router = express.Router()

// end-to-end journey: police yes no
router.post('/beta/incident_manager_journey/route_police', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['policeQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no"){
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/04comments')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/03action')
  }

})

// end-to-end journey: mike black - route to outside DWP route - add on behalf
router.post('/beta/incident_manager_journey/add_witness/route', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var inDWP = req.session.data['full-name'].toLowerCase()

  // Check whether the variable matches a condition
  if (inDWP == "mike" || inDWP == "mike black"){
    // Send user to next page
    res.redirect('00add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('01list_witness')
  }

})



// end-to-end journey: 'yes' to 'add witness'
router.post('/beta/incident_manager_journey/route_witness', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var addWitness = req.session.data['witnessQuestion']

  // Check whether the variable matches a condition
  if (addWitness == "no"){
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/02police')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/add_witness/00add_witness')
  }

})


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
