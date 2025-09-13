
const historyModel = require('../models/historyModel')

// save a new result:
module.exports.saveResult =  async (req, res) => {
  try {
    const { feature, input, output} = req.body;
    
    if(!feature || !input || !output){
        return  res.status(401).json({message:'Something went wrong'});
    }
   
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized: no user found' });
    }
    
    const newHistory = new historyModel({
      userId: req.user.id,
      feature,
      input,
      output,
    });

    await newHistory.save();
   return  res.status(201).json({ success: true, history: newHistory });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// get all saved result for a user:

module.exports.getAllSavedResult = async (req, res) => {
  try {
    const history = await historyModel.find({ userId: req.user.id });
    return res.status(201).json({ success: true, history })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete the history:
module.exports.deleteHistory  = async (req, res) => {
  try {
  const deleted =   await historyModel.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!deleted) return res.status(401).json({ message: 'History not found' });
    return res.status(201).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
