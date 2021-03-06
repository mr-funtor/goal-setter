const asyncHandler= require('express-async-handler');

const Goal= require('../models/goalModel');


// Get goals
//route GET /api/goals
const getGoals= asyncHandler(async(req,res)=>{
	const goals= await Goal.find();
	
	res.status(200).json(goals);
})



// Set goals
//route POST /api/goals
const setGoal= asyncHandler(async(req,res)=>{
	if(!req.body.text){
		res.status(400);
		throw new Error('Please add field')
		
	}
	
	const goal= await Goal.create({
		text:req.body.text,
	})
	
	
	res.json(goal);
})

// Update goals
//route PUT /api/goals/:id
//access private
const updateGoal= asyncHandler(async(req,res)=>{
	const goal =await Goal.findById(req.params.id);
	
	if(!goal){
		res.status(400)
		throw new Error('Goal not found');
	}
	
	const updatedGoal=await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new:true});
	
	res.status(200).json(updatedGoal);
})

//Delete goals
//route DELETE /api/goals/:id
//access private
const deleteGoal= asyncHandler(async(req,res)=>{
	const goal =await Goal.findById(req.params.id);
	
	if(!goal){
		res.status(400)
		throw new Error('Goal not found');
	}

	await goal.deleteOne({_id:req.params.id});
	
	res.json({id:req.params.id})
})


module.exports={
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
}
