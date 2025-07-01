import { Text } from "../models/Text";
import { texts } from "../storage/texts";
import { v4 as uuidv4 } from "uuid";

export function createText(title: string, content: string, author: string): Text {
    const newText: Text = {
        id: uuidv4(),
        title,
        content,
        status: 'draft',
        autor: author,
        createdAt: new Date(),
    };
    texts.push(newText);
    return newText;
}

export function listTexts(): Text[] { return texts; }