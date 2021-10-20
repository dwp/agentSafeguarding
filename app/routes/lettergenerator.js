const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// ROUTES FOR THE LETTER GENERATOR


router.post('/beta/lettergenerator/first-or-second', (req, res) => {
  res.redirect('/beta/lettergenerator/where-did-the-incident-take-place')
})
;


router.post('/beta/lettergenerator/where-did-the-incident-take-place', function(req, res) {
  if (req.body['where-did-the-incident-take-place'] === 'written') {
    res.redirect('decide-action');
  } if (req.body['where-did-the-incident-take-place'] === 'uc-diary') {
    res.redirect('decide-action');
  } if (req.body['where-did-the-incident-take-place'] === 'phone') {
    res.redirect('what-happened-phone');
  } else {
    res.redirect('what-happened');
  }
});


router.post('/beta/lettergenerator/what-happened', (req, res) => {
  res.redirect('/beta/lettergenerator/decide-action')
})
;

router.post('/beta/lettergenerator/what-happened-phone', (req, res) => {
  res.redirect('/beta/lettergenerator/decide-action')
})
;


router.post('/beta/lettergenerator/decide-action', function(req, res) {
  if (req.body['decide-control-measures'] === 'yes') {
    res.redirect('add-control-measures');
  } else {
    res.redirect('letter');
  }
});


router.post('/beta/lettergenerator/add-control-measures', (req, res) => {
  res.redirect('/beta/lettergenerator/letter')
})
;


router.post('/beta/lettergenerator/letter', (req, res) => {
  res.redirect('../../prototype-admin/clear-data')
})
;


module.exports = router
