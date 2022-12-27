import Character from "../models/character"

export type LocaleText = {
    pt: string
    en: string
}

export type Stats = {
    bravery: number
    friendly: number
    dreadful: number
    cowardly: number
    rational: number
}

export type RankResult = {
    character: Character,
    difference: number,
}