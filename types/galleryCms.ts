export interface TypeImgAsset {
  sys: { id: string };
  fields: {
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