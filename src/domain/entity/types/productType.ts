  export interface ProductInput {
    id: string;
    name: string;
    categoryId?: string | null;
    price: number;
    description: string | null;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date | null;
  }
  
  export interface ProductDTO {
    id: string;
    name: string;
    categoryId?: string | null;
    price: number;
    description: string | null;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date | null;
  }
  