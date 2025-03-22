const express = require('express')
const aiController = require('../controller/ai.controller')
const router = express.Router()


router.post('/get-review',aiController.getReview)
router.post('/get-documentation',aiController.getDocumentation)
router.post('/code-refactoring',aiController.aiCodeRefactoring)
router.post('/code-languageConversion',aiController.aiCodeLanguageConversion)
router.post('/code-bugDetection',aiController.getBugDetection)
router.post('/code-generateUnitTest',aiController.unitTestGeneration)
router.post('/code-algorithmExplanation',aiController.getAlgorithmExplanation)
router.post('/code-codeOptimization',aiController.codeOptmization)

module.exports = router