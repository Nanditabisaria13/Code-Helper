const aiService = require('../services/ai.service')
const aiDocumentation = require('../services/ai.documentation')
const aiCodeRefactoring = require('../services/ai.codeRefactoring')
const aiCodeLanguageConversion = require('../services/ai.languageConversion')
const aiBugDetection = require('../services/ai.BugDetection')
const aiUnitTestGeneration = require('../services/ai.UnitTestGeneration')
const aiAlgorithmExplanation = require('../services/ai.algorithmExplanation');
const aiCodeOptimization = require('../services/ai.codeOptimization')

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const response = await aiService.generateContent(code);
        res.status(200).send(response);
    } catch (error) {
        console.error('Error generating code review:', error);
        res.status(500).send('An error occurred while generating the code review');
    }
};

module.exports.getDocumentation = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const documentation = await aiDocumentation.generateDocumentation(code);
        res.status(200).send(documentation);
    } catch (error) {
        console.error('Error generating code documentation:', error);
        res.status(500).send('An error occurred while generating the code documentation');
    }
};

module.exports.aiCodeRefactoring = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const refactorCode = await aiCodeRefactoring.codeRefactoring(code);
        res.status(200).send(refactorCode);
    } catch (error) {
        console.error('Error in coding refactoring:', error);
        res.status(500).send('An error occurred while code refactoring');
    }
};


module.exports.aiCodeLanguageConversion = async(req,res)=>{
    const {code, targetLanguage} = req.body

    if(!code || !targetLanguage){
        return res.status(400).send('Code and Target Language is required')
    }

    try {
        const convertedCode = await aiCodeLanguageConversion.codeLanguageConversion(code,targetLanguage)
        res.status(200).send(convertedCode)
    } catch (error) {
        console.error('Error in Language Conversion:', error);
        res.status(500).send('An error occurred while Language Conversion'); 
    }
}


module.exports.getBugDetection = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const bugReport = await aiBugDetection.detectBugs(code);
        res.status(200).send(bugReport);
    } catch (error) {
        console.error('Error detecting bugs:', error);
        res.status(500).send('An error occurred while detecting bugs');
    }
};

module.exports.unitTestGeneration = async(req,res)=>{
    const code = req.body.code
     
    if(!code){
        return res.status(400).send('Code is required')
    }
    try {
        const generateUnitTest = await aiUnitTestGeneration.UnitTestGeneration(code)
        res.status(200).send(generateUnitTest)
    } catch (error) {
        console.error('Error in Unit Test Generation:', error);
        res.status(500).send('An error occurred while Unit Test Generation');
    }
}


module.exports.getAlgorithmExplanation = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const explanation = await aiAlgorithmExplanation.generateAlgorithmExplanation(code);
        res.status(200).send(explanation);
    } catch (error) {
        console.error('Error generating algorithm explanation:', error);
        res.status(500).send('An error occurred while generating the algorithm explanation');
    }
};

module.exports.codeOptmization = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Code is required');
    }

    try {
        const optimizedCode = await aiCodeOptimization.generateCodeOptimizationExplanation(code);
        res.status(200).send(optimizedCode);
    } catch (error) {
        console.error('Error generating code optimization:', error);
        res.status(500).send('An error occurred while optimize the coee');
    }
};

