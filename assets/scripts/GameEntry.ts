import { Context } from "../lib/ecs-ts/context/Context";
import { ContextImpl } from "../lib/ecs-ts/context/ContextImpl";
import { Systems } from "../lib/ecs-ts/systems/Systems";
import { DisplayComponent } from "./components/display/DisplayComponents";
import { PositionComponent } from "./components/map/PositionComponent";
import { DisplaySystem } from "./systems/DisplaySystem";

@cc._decorator.ccclass
export default class GameEntry extends cc.Component {
    /** display object */
    @cc._decorator.property({ type: cc.Node })
    public displayObject1: cc.Node;

    private readonly _systems = new Systems();

    public async onLoad() {
        await this.onDebug();
        
        this._systems.add(new DisplaySystem(GameContext));

        const e = GameContext.createEntity();
        e.addComponent(new DisplayComponent(this.displayObject1));
        e.addComponent(new PositionComponent(this.displayObject1.x, this.displayObject1.y));
    }

    private async onDebug() {
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    public update(dt: number) {
        this._systems.execute();

        // next
        for (let e of GameContext.getAllEntities()) {
            e.getComponent(PositionComponent).x += 100 * dt;
            e.getComponent(PositionComponent).y += 50 * dt;
        }
    }
}

export const GameContext: Context = new ContextImpl('game');
