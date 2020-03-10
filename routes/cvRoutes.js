const express = require('express');
const User = require('../models/users');
const CV = require('../models/CV');
const route = express.Router();

route.get('/users', async(req, res)=>{
  try {
	  const usersCount = await User.find({});

	if(usersCount){
		return res.status(200).json({ success: true, data: usersCount})
	}else {
		return res.status(500).json({ success: false, msg: "Internal server error"})
	}
  } catch (error) {
	  console.error(error);
	  return res.status(400).json({ success: false, msg: 'Something went wrong'})
  }
	
});
route.get('/cv/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findById(id);

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(500).json({ success: false, msg: 'Internal server error' });
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});
route.post('/cv', async (req, res) => {
	const newCV = req.body;
	const email = req.body.email;
	try {
		const isExist = await CV.findOne({ email });
		if(isExist){
			return res.status(401).json({ success: false, msg: "Email already Exists"})
		}else{
			const newDoc = new CV(newCV);
			newDoc.save((error, data) => {
				if (error) {
					return res.status(500).json({ success: false, msg: 'Internal Error' });
				}

				return res.status(200).json({ success: true });
			});
		}
		
		
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});
route.post('/cvs', async (req, res) => {
	const newCVs = req.body;
	try {
		const insertMany = await CV.insertMany(newCVs);
		if(insertMany){
			return res.status(200).json({ success: true });
		}else{
			return res.status(500).json({success: false, msg: "Internal Error"})
		}
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Something went wrong' });
	}
});
route.put('/cv', async (req, res) => {
	const updatedObj = req.body;
	const id = req.body._id;
	try {
		const cv = await CV.findByIdAndUpdate({_id:id},updatedObj);
		if(cv){
			return res.status(200).json({ success: true})
		}else{
			return res.status(500).json({ success: false, msg: "Something went wrong"})
		}
        
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});

route.put('/cvs', async (req, res) => {
	const updatedCVS = req.body;
	
	try {
	     for(let i=0; i<updatedCVS.length;i++){
			 let id = updatedCVS[i]._id;
			 let updatedObj = updatedCVS[i];
			 await CV.findByIdAndUpdate({_id:id},updatedObj)
		 }
		
		return res.status(200).json({ success: true });
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});
route.delete('/cv', async (req, res) => {
	const id = req.body.id;
	try {
		const cv = await CV.findByIdAndDelete(id);

		if (cv) {
			return res.status(200).json({ success: true});
		} else {
			return res.status(404).json({ success: false, msg: 'Document not found' });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});

route.delete('/cvs', async (req, res) => {
	const ids = req.body.ids;
	try {
		const cv = await CV.deleteMany({ _id: { $in: ids}});
		if (cv) {
			return res.status(200).json({ success: true });
		} else {
			return res.status(404).json({ success: false, msg: 'Document not found' });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});
route.get('/cvs', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.find({});

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(500).json({ success: false, msg: 'Internal server error' });
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});
module.exports = route;
