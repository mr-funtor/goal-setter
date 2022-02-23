const asyncHandler= require('express-async-handler')

// Get goals
//route GET /api/goals
const getGoals= asyncHandler(async(req,res)=>{
	res.json({message:'get goals'})
})



// Set goals
//route POST /api/goals
const setGoal= asyncHandler(async(req,res)=>{
	if(!req.body.text){
		res.status(400);
		throw new Error('Please add field')
		
}
	res.json({message:'create goals'})
})

// Update goals
//route PUT /api/goals/:id
//access private
const updateGoal= asyncHandler(async(req,res)=>{
	res.status(200).json({message:`Update goal ${req.params.id}`})
})

//Delete goals
//route DELETE /api/goals/:id
//access private
const deleteGoal= asyncHandler(async(req,res)=>{
	res.json({message:`Delete goal ${req.params.id}`})
})


module.exports={
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
}
