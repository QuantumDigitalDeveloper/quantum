export interface imagePorto {
    id: number;
    name: string;
    deskripsi: string;
    porto_id: number;
    slug    : string;
    url    : string;
}

export interface imageDuplicate {
    category_id: number;
    id         : number;
    url       : string;
    created_at: string;
    updated_at: string;
    category    : imagePorto;
}

export interface categories {
    id        : number;
    name      : string;
    slug      : string;
    created_at: string;
    updated_at: string;
    deskripsi : string;
    porto_id  : number;
}

export interface listPorto {
    category_id: number;
    id         : number;
    name       : string;
    url       : string;
    created_at: string;
    updated_at: string;
    categories    : categories;
}