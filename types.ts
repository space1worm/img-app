export type ImageResource = {
  public_id: string;
  tags: string[];
};

export type ImageSearchResults = {
  resources: ImageResource[];
};
