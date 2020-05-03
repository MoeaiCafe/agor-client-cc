import { Context } from '../../lib/ecs-ts/context/Context';
import { System } from '../../lib/ecs-ts/systems/System';

export abstract class SystemBase implements System {
  protected readonly _context: Context;

  constructor(context: Context) {
    this._context = context;
  }

  abstract execute(): void;

}
