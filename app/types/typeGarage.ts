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
  slug: EntryFieldTypes.Symbol; // ✅ WAJIB TAMBAH INI

  tahunProduksi?: EntryFieldTypes.Integer;
  jalanKilometer?: EntryFieldTypes.Integer;
  image?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  thumbnail?: EntryFieldTypes.AssetLink;
  pajak?: EntryFieldTypes.Boolean;
  merekMobil?: EntryFieldTypes.Symbol;
  nomotrPlat?: EntryFieldTypes.Symbol;
  namaPemilik?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
  variasi?: EntryFieldTypes.Symbol;
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
    tahunProduksi: string;
    jalanKilometer: string;
    description: string;
    merekMobil: string;
    nomorPlat: string;
    namaPemilik: string;
    variasi: string[];
    image?: Array<{
      fields: {
        file: {
          url: string;
        };
      };
    }>;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    pajak: boolean;
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
