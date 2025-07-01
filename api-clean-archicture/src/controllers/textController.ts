import { Request, Response } from 'express';
import { createText, listTexts } from '../services/textService';

export function createTextController(req: Request, res: Response): void {
    const {title, content, autor } = req.body;

    if (!title || !content || !autor) {
        res.status(400).json({ error: 'Campos obrigatórios ausentes!' });
        return;
    }

    const text = createText(title, content, autor);
    res.status(201).json(text);

}

export function listTextsController(req: Request, res: Response): void {
    const texts = listTexts();
    res.status(200).json(texts);
}