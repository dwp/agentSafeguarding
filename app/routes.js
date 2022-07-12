const express = require('express')
const router = express.Router()

// end-to-end journey: police yes no
router.post('/beta/incident_manager_journey/v1/route_police', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['policeQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no") {
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/v1/04comments')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/v1/03action')
  }

})

// end-to-end journey: mike black - route to outside DWP route - add on behalf
router.post('/beta/incident_manager_journey/v1/add_witness/route', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var inDWP = req.session.data['full-name'].toLowerCase()

  // Check whether the variable matches a condition
  if (inDWP == "mike" || inDWP == "mike black") {
    // Send user to next page
    res.redirect('00add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('01list_witness')
  }

})



// end-to-end journey: 'yes' to 'add witness'
router.post('/beta/incident_manager_journey/v1/route_witness', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var addWitness = req.session.data['witnessQuestion']

  // Check whether the variable matches a condition
  if (addWitness == "no") {
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/v1/02police')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/v1/add_witness/00add_witness')
  }

})


// Run this code when a form is submitted to 'test' asking for ref number only if the police were called
router.post('/beta/incident_manager/test', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['policeQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no") {
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
  if (werePoliceCalled == "no") {
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
  if (isItTim == "mike" || isItTim == "mike black") {
    // Send user to next page
    res.redirect('00add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('01list_witness')
  }

})
// VIDEO --------
// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/video/09recorddata', function (req, res) {

  // Make a variable from each answer field
  var whyField = req.session.data['why']
  var howField = req.session.data['how']
  var whatField = req.session.data['what']
  var nextField = req.session.data['next']
  var witnessesField = req.session.data['witnesses']
  var endField = req.session.data['end']
  var feelField = req.session.data['feel']

  // set field values for error page from submitted values 
  if (whyField == "") {
    req.session.data['why'] = "BLANK" + witnessesField
  }

  if (howField == "") {
    req.session.data['how'] = "BLANK"
    req.session.data['howb'] = "I asked him what he had done in his job search"
  } else {
    req.session.data['howb'] = howField
  }
  if (whatField == "") {
    req.session.data['what'] = "BLANK"
    req.session.data['whatb'] = "he said - youre no use you stupid cow!"
  } else {
    req.session.data['whatb'] = whatField
  }
  if (nextField == "") {
    req.session.data['next'] = "BLANK"
    req.session.data['nextb'] = "Please dont call me names, I'm trying to help you"
  } else {
    req.session.data['nextb'] = nextField
  }
  if (witnessesField = "yes") {
    req.session.data['witnessesYes'] = true
    req.session.data['witnessesYesb'] = true
  } else if (witnessesField = "no") {
    req.session.data['witnessesNo'] = true
    req.session.data['witnessesNob'] = true
  } else {
    req.session.data['witnessesYesb'] = true
    req.session.data['witnessesNob'] = false
    req.session.data['witnesses'] = "BLANK"
  }

  if (endField == "") {
    req.session.data['end'] = "BLANK"
    req.session.data['endb'] = "He walked out"
  } else {
    req.session.data['endb'] = endField
  }
  if (feelField == "") {
    req.session.data['feel'] = "BLANK"
    req.session.data['feelb'] = "I was upset"
  } else {
    req.session.data['feelb'] = feelField
  }

  res.redirect('09describe_error')
  //res.redirect('display_description')

})

router.post('/beta/_UR/20220714/video/09recorddata2', function (req, res) {

  res.redirect('display_description')
})

// ONBEHALF /////////////////////////////////////////
router.post('/beta/_UR/20220714/onbehalf/02recorddata', function (req, res) {

  res.redirect('02behalf_error2')
})

router.post('/beta/_UR/20220714/onbehalf/02recorddata2', function (req, res) {

  res.redirect('display_description')
})


// JOURNAL /////////////////////////////////////////
// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/journal/09recorddata', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var whyField = req.session.data['why2']
  var howField = req.session.data['how2']
  var whatField = req.session.data['what2']
  var nextField = req.session.data['next2']
  var witnessesField = req.session.data['witnesses2']
  var endField = req.session.data['end2']
  var feelField = req.session.data['feel2']


  if (whyField == "") {
    req.session.data['why2'] = "I asked him what he had done in his job search"
  }
  // force blank
  req.session.data['how2'] = ""

  if (whatField == "") {
    req.session.data['what2'] = "he said - youre no use you stupid cow!"
  }
  if (nextField == "") {
    req.session.data['next2'] = "I asked him what he had done in his job search"
    // force blank
    req.session.data['witnesses2'] = ""
  }
  if (endField == "") {
    req.session.data['end2'] = "He walked out"
  }
  if (feelField == "") {
    req.session.data['feel2'] = "I was upset"
  }
  res.redirect('09describe_error')
})

// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/journal/09recorddata2', function (req, res) {

  // Make a variable and give it the value from 'prnQuestion'
  var whyField = req.session.data['why2']
  var howField = req.session.data['how2']
  var whatField = req.session.data['what2']
  var nextField = req.session.data['next2']
  var witnessesField = req.session.data['witnesses2']
  var endField = req.session.data['end2']
  var feelField = req.session.data['feel2']


  if (whyField == "") {
    req.session.data['why2'] = "Attending regular fortnightly appointment to review job-seeking activity."
  }
  if (whatField == "") {
    req.session.data['what2'] = "he said - youre no use you stupid cow!"
  }
  if (nextField == "") {
    req.session.data['next2'] = "I asked him what he had done in his job search"
  }
  if (endField == "") {
    req.session.data['end2'] = "He walked out"
  }
  if (feelField == "") {
    req.session.data['feel2'] = "I was upset"
  }
  res.redirect('display_description')
})

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version

const lettergeneratorV1 = require('./routes/lettergeneratorV1');;


//copy the router use and update the sprint version

router.use(lettergeneratorV1);

module.exports = router
