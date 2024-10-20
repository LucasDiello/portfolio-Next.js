import { StaticImageData } from "next/image";

interface Tech {
    id: number;
    name: string;
    description: string;
    descriptionEn: string;
}

export type Project = {
    id: number;
    name: string;
    date: string;
    dateEn: string;
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

export type ProjectBackEnd = {
    title: string;
    description: string;
    descriptionEn: string;
    techs: string[],
    github: string;
  };

export type ProjectId = Pick<Project, 'id'>;