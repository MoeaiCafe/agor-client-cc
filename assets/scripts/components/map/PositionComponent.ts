import { Component } from "../../../lib/ecs-ts/component/Component";

export class PositionComponent implements Component {
  public x: number;
  public y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}
