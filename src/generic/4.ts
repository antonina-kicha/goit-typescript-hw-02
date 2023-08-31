/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IpageTitle {
  title: string
}

class Component <T extends IpageTitle> {
  constructor (public props:T) {

  }
}

class Page extends Component <IpageTitle> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};