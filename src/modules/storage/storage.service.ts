import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
// @Injectable()
export class StorageService {
  constructor() {
    console.log(StorageService.name, Math.random());
  }
}
