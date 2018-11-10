/**
 * This file is autogenerated. Do not edit directly.
 */
import * as swapi from "./gqliteral/backingTypes";

export type BaseScalarNames = "String" | "Int" | "Float" | "ID" | "Boolean";

export type Generated_Interface_Character = {
  implementingTypes: "Droid" | "Human";
  backingType: swapi.Droid | swapi.Human;
  fields: {
    appearsIn: {
      returnType:
        | null
        | GeneratedEnums["Episode"][]
        | PromiseLike<GeneratedEnums["Episode"][]>
        | PromiseLike<GeneratedEnums["Episode"]>[];
      args: {};
    };
    friends: {
      returnType:
        | null
        | Generated_Interface_Character["backingType"][]
        | PromiseLike<Generated_Interface_Character["backingType"][]>
        | PromiseLike<Generated_Interface_Character["backingType"]>[];
      args: {};
    };
    id: {
      returnType: null | string | PromiseLike<string>;
      args: {};
    };
    name: {
      returnType: null | string | PromiseLike<string>;
      args: {};
    };
  };
};

export type Generated_Type_Query = {
  backingType: any;
  fields: {
    droid: {
      returnType:
        | null
        | Generated_Type_Droid["backingType"]
        | PromiseLike<Generated_Type_Droid["backingType"]>;
      args: {
        id: string;
      };
    };
    hero: {
      returnType:
        | null
        | Generated_Interface_Character["backingType"]
        | PromiseLike<Generated_Interface_Character["backingType"]>;
      args: {
        episode: GeneratedEnums["Episode"];
      };
    };
    human: {
      returnType:
        | null
        | Generated_Type_Human["backingType"]
        | PromiseLike<Generated_Type_Human["backingType"]>;
      args: {
        id: string;
      };
    };
  };
};

export type Generated_Type_Droid = {
  backingType: swapi.Droid;
  fields: Generated_Interface_Character["fields"] & {
    primaryFunction: {
      returnType: null | string | PromiseLike<string>;
      args: {};
    };
  };
};

export type Generated_Type_Human = {
  backingType: swapi.Human;
  fields: Generated_Interface_Character["fields"] & {
    homePlanet: {
      returnType: string | PromiseLike<string>;
      args: {};
    };
  };
};

export type GeneratedScalars = {};
export type GeneratedInterfaces = {
  Character: Generated_Interface_Character;
};
export type GeneratedUnions = {};
export type GeneratedEnums = {
  Episode: 5 | 6 | 4;
  MoreEpisodes: 5 | 6 | 4 | "OTHER";
};
export type GeneratedInputObjects = {};
export type GeneratedObjects = {
  Query: Generated_Type_Query;
  Droid: Generated_Type_Droid;
  Human: Generated_Type_Human;
};

export interface GeneratedSchema {
  context: any;
  enums: GeneratedEnums;
  objects: GeneratedObjects;
  inputObjects: GeneratedInputObjects;
  unions: GeneratedUnions;
  scalars: GeneratedScalars;
  interfaces: GeneratedInterfaces;

  // For simplicity in autocomplete:
  availableInputTypes:
    | BaseScalarNames
    | Extract<keyof GeneratedInputObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedScalars, string>;
  availableOutputTypes:
    | BaseScalarNames
    | Extract<keyof GeneratedObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedUnions, string>
    | Extract<keyof GeneratedInterfaces, string>
    | Extract<keyof GeneratedScalars, string>;
}
export type Gen = GeneratedSchema;