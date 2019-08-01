let app = require('express')();

app.post('/api/v1/parse', (req, res) => {
    let name=req.body.data;
    name.
  res
    .status(200)
    .send({
      statusCode: 200,
      data: {
        firstName: 'JOHN0000',
        lastName: 'MICHAEL000',
        clientId: '9994567'
      }
    });
});

app.post('/api/v2/parse', (req, res) => {
  res
    .status(200)
    .send({
      statusCode: 200,
      data: {
        firstName: 'JOHN',
        lastName: 'MICHAEL',
        clientId: '999-4567'
      }
    });
});
app.listen(5001,()=>console.log('listening on 5001'))