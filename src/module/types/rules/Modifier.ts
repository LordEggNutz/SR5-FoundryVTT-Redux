declare namespace Shadowrun {
    /**
     * The general types of modifiers supported by the system.
     * 
     * For the actual modifier identifiers see config.ts#SR5.modifierTypes
     */
    export type ModifierTypes = string

    /** All situational modifiers affecting any actor placed on the canvas.
     */
    export interface SituationModifiersSourceData {
        environmental: EnvironmentalModifiersSourceData
        noise: NoiseModifiersSourceData
        background_count: BackgroundCountModifiersSourceData
    }

    export interface SituationModifiersData {
        environmental: EnvironmentalModifiersData
        noise: NoiseModifiersData
        background_count: BackgroundCountModifiersData
    }

    export type ActiveModifierValue = Record<string, number>

    /**
     * A source modifier can contain modifier selections or fixed values
     */
     export interface SourceModifierData {
        // Merged active modifier selections by both the local and all global modifier selections.
        active: ActiveModifierValue
        // A user set default / fixed value to be applied instead of what's selected.
        fixed?: number
    }

    /**
     * A Modifier contains all necessary data to use and apply modifiers.
     * It's created from one or more SourceModifiers from different documents
     * using SituationalModifier instances.
     */
    export interface ModifierData extends SourceModifierData {
        // The derived total modifier for this modifier category.
        total: number
    }

    // Situational physical / enviornmental modifiers
    export interface EnvironmentalModifierCategories {
        light: number
        wind: number
        visibility: number
        range: number
        value: number
    }

    /* 
     * These modifiers only deal with the selection of which environmental modifiers are active currently.
     */
    export interface EnvironmentalModifiersSourceData extends SourceModifierData {
        active: Partial<EnvironmentalModifierCategories>
    }

    export interface EnvironmentalModifiersData extends ModifierData {
        active: Partial<EnvironmentalModifierCategories>
    }

    /** These levels define the value of each environmental modifier level
     */
    export type EnvironmentalModifierLevels = {
        good: number
        light: number
        moderate: number
        heavy: number
        extreme: number
    }

    // Situational noise modifiers
    export interface NoiseModifierCategories {
        // AS no selection is done, only provide the fixed value
        value: number
    }

    export interface NoiseModifiersSourceData extends SourceModifierData {
        active: Partial<NoiseModifierCategories>
    }

    export interface NoiseModifiersData extends ModifierData {
        active: Partial<NoiseModifierCategories>
    }

    // Situational magic modifiers.
    export interface BackgroundCountModifierCategories {
        // AS no selection is done, only provide the fixed value
        value: number
    }

    export interface BackgroundCountModifiersSourceData extends SourceModifierData {
        active: Partial<BackgroundCountModifierCategories>
    }

    export interface BackgroundCountModifiersData extends ModifierData {
        active: Partial<BackgroundCountModifierCategories>
    }
}