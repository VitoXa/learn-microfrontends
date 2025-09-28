
    export type RemoteKeys = 'federation_provider/Input' | 'federation_provider/List';
    type PackageType<T> = T extends 'federation_provider/List' ? typeof import('federation_provider/List') :T extends 'federation_provider/Input' ? typeof import('federation_provider/Input') :any;