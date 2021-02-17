var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _speed_1;
class Player extends Physics2dPlatformerVelocity {
    constructor(x, y) {
        super("player", x, y, 30, 30, "blue", 10, 0.5, 8);
        _speed_1.set(this, void 0);
    }
    ;
    doMovement() {
        if (this.getKey("a"))
            this.changeVX(-this.getVXSpeed());
        if (this.getKey("d"))
            this.changeVX(this.getVXSpeed());
        if (this.moveX(this.getVX())) {
            this.setMaxVelocity(12);
            this.setVX(-this.getVX());
        }
        ;
        if (this.hasSpriteBelow())
            this.doJump(7);
    }
    ;
    doMovementConstraints() {
        if (this.getX() < 0) {
            this.setX(0);
            this.setVX(-this.getVX());
        }
        ;
        if (this.getX() + this.getWidth() > this.getScreenWidth()) {
            this.setX(this.getScreenWidth() - this.getWidth());
            this.setMaxVelocity(12);
            this.setVX(-this.getVX());
        }
        ;
        if (this.getY() < 0) {
            this.setY(0);
            this.setMaxVelocity(12);
            this.setVX(-this.getVX());
        }
        ;
        if (this.getY() + this.getHeight() > this.getScreenHeight()) {
            this.setVX(-this.getVX());
            this.setMaxVelocity(12);
            this.setY(this.getScreenHeight() - this.getHeight());
        }
        ;
    }
    ;
    doFriction() {
        if (this.getSpriteBelow() instanceof Platform) {
            this.addFriction(0.9);
        }
        else {
            this.addFriction(1);
        }
        ;
    }
    ;
    getSpeed() { return __classPrivateFieldGet(this, _speed_1); }
    ;
    setSpeed(_speed) { __classPrivateFieldSet(this, _speed_1, _speed); }
    ;
    changeSpeed(_speed) { __classPrivateFieldSet(this, _speed_1, __classPrivateFieldGet(this, _speed_1) + _speed); }
    ;
}
_speed_1 = new WeakMap();
;
