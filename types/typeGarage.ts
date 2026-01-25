import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeGarageFields {
  title: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Symbol;
  tahunMobil?: EntryFieldTypes.Integer;
  kilometer?: EntryFieldTypes.Integer;
  image?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  thumbnail?: EntryFieldTypes.AssetLink;
  pajak?: EntryFieldTypes.Boolean;
}

export type TypeGarageSkeleton = EntrySkeletonType<TypeGarageFields, "garage">;
export type TypeGarage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGarageSkeleton, Modifiers, Locales>;

export interface TypeGarageAsset {
  sys: { id: string };
  fields: {
    title: string;
    price: string;
    tahunMobil: string;
    kilometer: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    pajak: string;
    slug: string;

    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}
