// login-middleware.js
module.exports = (req, res, next) => {
  if (req.path == '/login') {
  	if (req.method == 'POST') {
  		if (req.body.username === 'a' && req.body.password === 'a') {
      		res.status(200).json({})
    	} else if(req.body.username === 'b' && req.body.password === 'b') {
    		res.status(500).json({message: 'Unknown Error'})
    	} else {
      		res.status(400).json({message: 'Wrong Password'})
    	}
  	} else {
  		res.status(405).json({message: 'Method Not Allowed'})
  	}
  } else {
    next()
  }
}