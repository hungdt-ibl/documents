const restify = require('restify')
const config = require('./config')
const connection = require('./database')

const server = restify.createServer({
  name: config.name,
  version: config.version,
  url: config.hostname
})
server.listen(config.port, function () {
  console.log('%s listening at %s', server.name, server.url)
  server.get('/employees', function (req, res) {
    connection.query('select * from employee', function (error, results, fields) {
      if (error) {
        console.log('error', error)
      }
      res.end(JSON.stringify(results))
    })
  })
  server.get('/employees/:id', function (req, res) {
    connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
      if (error) {
        console.log('error', error)
      }
      res.end(JSON.stringify(results))
    })
  })
  server.post('/employees', function (req, res) {
    const postData = req.body
    connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
      if (error) {
        console.log('error', error)
      }
      res.end(JSON.stringify(results))
    })
  })
  server.put('/employees', function (req, res) {
    connection.query(
      'UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?',
      [req.body.employee_name, req.body.employee_salary, req.body.employee_age, req.body.id],
      function (error, results, fields) {
        if (error) {
          console.log('error', error)
        }
        res.end(JSON.stringify(results))
      })
  })
})
