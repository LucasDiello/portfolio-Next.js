import { StaticImageData } from "next/image";

interface Tech {
    id: number;
    name: string;
    description: string;
}

export type Project = {
    id: number;
    name: string;
    date: string;
    image: StaticImageData;
    images?: StaticImageData[];
    description: string;
    descriptionEn: string;
    link: string;
    github: string;
    technologies: Tech[];
    whatILearned: string;
    whatILearnedEn: string;
    whatIdDoDifferently: string;
    whatIdDoDifferentlyEn: string;
    whatsNext?: string;
    whatsNextEn?: string;
} 

// Criando um tipo que contém apenas o 'id'
export type ProjectId = Pick<Project, 'id'>;