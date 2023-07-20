"use strict";

var router = require('express').Router();

var User = require('../models/User'); // REGISTER


router.post('/register', function _callee(req, res) {
  var newUser, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          user = _context.sent;
          res.status(200).json(user);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // LOGIN

module.exports = router;