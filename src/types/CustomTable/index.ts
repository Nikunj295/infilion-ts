export interface DataItem {
    id:string | number;
    name:string;
    first_name:string;
    last_name:string;
    image:string;
}
  
export interface CustomTableProps{
    data: DataItem[];
}
