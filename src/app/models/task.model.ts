export class Task {
  id: number;
  title: string;
  

  constructor(title: string = '',  
    id: number = null) {
    this.title = title;    
    this.id = id;
  }
}
