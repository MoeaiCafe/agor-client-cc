import { Context } from '../../lib/ecs-ts/context/Context';
import { Group } from '../../lib/ecs-ts/group/Group';
import { allOf } from '../../lib/ecs-ts/matcher/Matchers';
import { SystemBase } from './SystemBase';
import { DisplayComponent } from '../components/display/DisplayComponents';
import { PositionComponent } from '../components/map/PositionComponent';

/**
 * Synchronize display object position.
 */
export class DisplaySystem extends SystemBase {
  private _group: Group;

  constructor(context: Context) {
    super(context);

    this._group = this._context.getGroup(allOf(DisplayComponent, PositionComponent));
  }

  public execute(): void {
    console.log(`group entites: ${this._group.getEntities().size}`);

    for (let entity of this._group) {
      const display = entity.getComponent(DisplayComponent);
      const position = entity.getComponent(PositionComponent);
      display.displayObject.setPosition(position.x, position.y);
    }
  }

}
