export type ImageResource = {
  public_id: string;
  tags: string[];
};

export type ImageSearchResult = {
  resources: ImageResource[];
};

export type Folder = {
  name: string;
  path: string;
};

export type FoldersSearchResult = {
  folders: Folder[];
};
