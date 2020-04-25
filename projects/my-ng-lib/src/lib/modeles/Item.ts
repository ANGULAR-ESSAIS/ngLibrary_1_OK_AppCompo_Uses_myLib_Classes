export class Item {
  constructor(private sId: string, private sLabel: string) {

  }

  getId(): string {
    return(this.sId);
  }
  getLabel(): string {
    return(this.sLabel);
  }

}
