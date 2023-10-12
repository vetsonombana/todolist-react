export interface Transaction {
  id: number;
  description: string;
  montant: number;
  date: string;
  id_categorie: number;
}

export interface Categorie {
  id: number;
  label: string;
}
