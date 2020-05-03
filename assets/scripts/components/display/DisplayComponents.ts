import { Component } from '../../../lib/ecs-ts/component/Component';

/**
 * Object which displays in game scene.
 */
export class DisplayComponent implements Component {
  /** display object */
  public displayObject: cc.Node;

  constructor(node: cc.Node) {
    this.displayObject = node;
  }
}
