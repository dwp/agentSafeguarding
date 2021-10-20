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

router.post('/beta/lettergeneratorV1/start', (req, res) => {
  res.redirect('/beta/lettergeneratorV1/first-or-second')
})
;

router.post('/beta/lettergeneratorV1/first-or-second', (req, res) => {
  res.redirect('/beta/lettergeneratorV1/where-did-the-incident-take-place')
})
;


router.post('/beta/lettergeneratorV1/where-did-the-incident-take-place', function(req, res) {
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


router.post('/beta/lettergeneratorV1/what-happened', (req, res) => {
  res.redirect('/beta/lettergeneratorV1/decide-action')
})
;

router.post('/beta/lettergeneratorV1/what-happened-phone', (req, res) => {
  res.redirect('/beta/lettergeneratorV1/decide-action')
})
;


router.post('/beta/lettergeneratorV1/decide-action', function(req, res) {
  if (req.body['decide-control-measures'] === 'yes') {
    res.redirect('add-control-measures');
  } else {
    res.redirect('letter');
  }
});


router.post('/beta/lettergeneratorV1/add-control-measures', (req, res) => {
  res.redirect('/beta/lettergeneratorV1/letter')
})
;


router.post('/beta/lettergeneratorV1/letter', (req, res) => {
  res.redirect('../../prototype-admin/clear-data')
})
;


module.exports = router
