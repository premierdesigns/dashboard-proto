import { Injectable } from '@angular/core';

import { Resource } from './resource';
import { RESOURCES } from './resources-list';

@Injectable()
export class ResourcesService {

  getResources(): Promise<Resource[]> {
    return Promise.resolve(RESOURCES);
  }

  constructor() { }

}
