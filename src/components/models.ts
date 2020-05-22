export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Button {
    [id: string]: {
        name: string;
        route: string;
    }
}
