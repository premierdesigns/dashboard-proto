export class Card {
  header: string;
  title: string;
  body: string;
  link: string;
  type: string;
  description: string;
  icon: string;
  image: string;
  size: string;

  constructor(options: {
    header?: string,
    title?: string,
    body?: string,
    link?: string,
    type?: string,
    description?: string,
    icon?: string,
    image?: string,
    size?: string
    } = {}) {
    this.header = options.header || '';
    this.title = options.title || '';
    this.body = options.body || '';
    this.link = options.link || '';
    this.type = options.type || '';
    this.description = options.description || '';
    this.icon = options.icon || '';
    this.image = options.image || '';
    this.size = options.size || '';
  }
}
