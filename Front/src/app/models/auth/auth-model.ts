export interface Auth {
    id?: string;
    access_token: string;
    user: { id: number };
  }