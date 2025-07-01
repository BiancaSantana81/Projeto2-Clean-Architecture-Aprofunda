export interface Text {
    id: string;
    title: string;
    content: string;
    status: 'draft' | 'published' | 'archived';
    autor: string;
    createdAt: Date;
}