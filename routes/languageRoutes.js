import express from 'express';
import {
  addLanguage,
  addAllLanguage,
  getAllLanguages,
  getShowingLanguage,
  getLanguageById,
  updateLanguage,
  updateStatus,
  deleteLanguage,
  updateManyLanguage,
  deleteManyLanguage,
} from '../controller/languageController.js';

const router = express.Router();

// add a language
router.post('/add', addLanguage);

// add all language
router.post('/add/all', addAllLanguage);

// get only showing language
router.get('/show', getShowingLanguage);

// get all language
router.get('/all', getAllLanguages);

// get a language
router.get('/:id', getLanguageById);

// update a language
router.put('/:id', updateLanguage);

// update many language
router.patch('/update/many', updateManyLanguage);

// show/hide a language
router.put('/status/:id', updateStatus);

// delete a language
router.delete('/:id', deleteLanguage);

//delete many language
router.patch('/delete/many', deleteManyLanguage);

export default router;
