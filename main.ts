namespace SpriteKind {
    export const 鑽石 = SpriteKind.create()
    export const 沙比 = SpriteKind.create()
    export const 偷瞄 = SpriteKind.create()
    export const Aa = SpriteKind.create()
    export const Bb = SpriteKind.create()
    export const Cc = SpriteKind.create()
    export const 久久 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.鑽石, function (sprite, otherSprite) {
    齊柏林.say("好醜的鑽石", 100)
    寶石.destroy()
    music.playMelody("C D F E F G E G ", 181)
    info.changeScoreBy(2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`層級7`)
    tiles.placeOnRandomTile(齊柏林, sprites.dungeon.doorOpenWest)
    value = sprites.create(img`
        . . . . e e e e e e e e . . . . 
        . . . e 4 4 4 4 4 4 4 4 e . . . 
        . . e e 4 4 4 4 4 4 4 4 e e . . 
        . e e 4 4 d d d d d d 4 4 e e . 
        e 4 4 4 d d d d d d d d 4 4 4 e 
        e 4 4 d d d d d d d d d d 4 4 e 
        e 4 4 d d f f d f f f d d 4 4 e 
        e 4 4 d d f d d f d f d d 4 4 e 
        e 4 4 d d f f d f d f d d 4 4 e 
        e 4 4 d d d f d f d f d d 4 4 e 
        e 4 4 d d f f d f f f d d 4 4 e 
        e 4 4 4 d d d d d d d d 4 4 4 e 
        . e e 4 4 d d d d d d 4 4 e e . 
        . . e e 4 4 4 4 4 4 4 4 e e . . 
        . . . e e 4 4 4 4 4 4 4 e . . . 
        . . . . . e e e e e e e . . . . 
        `, SpriteKind.沙比)
    tiles.placeOnRandomTile(value, assets.tile`myTile`)
    mySprite3 = sprites.create(img`
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 7 . 7 7 7 7 7 7 . 7 7 . . 
        . . 7 7 7 f 7 7 7 7 f 7 7 7 . . 
        . . 7 7 7 f f 7 7 f f 7 7 7 . . 
        . . 7 7 7 7 1 7 7 1 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 2 2 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 e 7 7 7 7 e 7 7 7 . . 
        . 7 7 7 7 e 7 7 7 7 e 7 7 7 7 . 
        . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
        . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
        . 7 . e e e e e e e e e e . 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 . . . . 7 . . . . . 
        . . . 7 7 7 . . . . 7 7 7 . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 3 3 3 3 3 3 b b . . . 
        . . . b 3 6 6 6 6 6 6 6 b . . . 
        . . b b 3 6 6 6 6 6 6 6 b b . . 
        . b b 3 3 6 6 6 6 6 6 6 6 b b . 
        . b 3 3 d 6 6 6 6 6 6 6 6 6 b . 
        b 3 3 d 6 6 6 6 6 6 6 6 6 6 6 b 
        b 3 d 6 6 6 6 6 1 6 6 6 6 6 6 b 
        b 3 d 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 6 6 6 6 6 6 b 
        b 7 7 7 d 6 6 6 6 6 6 6 d 7 7 b 
        . b b 7 7 d 6 6 6 6 6 6 7 b b . 
        . . b b 7 7 7 7 7 7 7 7 b b . . 
        . . . . b b b b b b b b . . . . 
        `, SpriteKind.Aa)
    mySprite3.follow(齊柏林, 20)
    mySprite4.follow(齊柏林, 20)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 f f 3 3 3 f f 3 . . . . 
        . . 3 3 f 1 3 3 3 1 f 3 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 . 2 . 2 . 2 . 2 . 2 . . . 
        . 2 2 . 2 . 2 . 2 . 2 . 2 2 2 2 
        2 2 . 2 2 . 2 . 2 . 2 . . . . 2 
        2 . . 2 . . 2 . 2 . 2 2 . . . 2 
        2 . . 2 2 . 2 . 2 . . 2 . . . . 
        2 . . . 2 . 2 . 2 . . 2 . . . . 
        2 2 . . 2 . . 2 . . 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bb)
    mySprite2 = sprites.create(img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . 5 4 7 7 7 7 . . . . . . 
        . . . . 4 7 7 f f 7 7 . . . 2 . 
        . . . 5 7 7 7 f 1 7 7 7 . 2 2 . 
        . . 5 4 7 7 7 7 7 7 7 . . 2 2 . 
        . . . 5 7 7 7 7 7 7 . . 2 2 . . 
        . . . 5 7 7 7 7 7 7 7 . . . . . 
        . . 5 4 7 7 7 7 7 7 e 7 . . . . 
        . . . 5 7 7 7 7 7 e e . . . . . 
        . . . . 7 7 7 7 e e e 7 . . . . 
        . 7 7 . 7 7 7 7 7 e e 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 e 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cc)
    mySprite.follow(齊柏林, 10)
    mySprite2.follow(齊柏林, 10)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleInsignia)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.偷瞄, function (sprite, otherSprite) {
    齊柏林.say("透明的東西？", 100)
    透明方塊.destroy()
    music.playMelody("C D C A D F E C ", 181)
    info.changeScoreBy(2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectile == false) {
        火焰 = sprites.createProjectileFromSprite(img`
            . . 1 . . 
            . 1 1 1 . 
            1 1 f 1 1 
            . 1 1 1 . 
            . . 1 . . 
            `, 齊柏林, 50, 0)
        music.playTone(147, music.beat(BeatFraction.Eighth))
        projectile = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Cc, function (sprite, otherSprite) {
    mySprite2.destroy()
    火焰.destroy()
    mySprite2.startEffect(effects.fire, 500)
    music.playTone(784, music.beat(BeatFraction.Half))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Aa, function (sprite, otherSprite) {
    mySprite4.destroy()
    火焰.destroy()
    mySprite4.startEffect(effects.fire, 500)
    music.playTone(784, music.beat(BeatFraction.Half))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cc, function (sprite, otherSprite) {
    mySprite2.destroy()
    info.changeLifeBy(-1)
    齊柏林.say("是怪物快跑", 100)
    齊柏林.startEffect(effects.fire, 100)
    scene.cameraShake(5, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.久久, function (sprite, otherSprite) {
    齊柏林.say("好鋒利的劍", 100)
    大保健.destroy()
    music.playMelody("C - E G - A - C5 ", 181)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bb, function (sprite, otherSprite) {
    mySprite.destroy()
    info.changeLifeBy(-1)
    齊柏林.say("是怪物快跑", 100)
    齊柏林.startEffect(effects.fire, 100)
    scene.cameraShake(5, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setTilemap(tilemap`層級2`)
    tiles.placeOnRandomTile(齊柏林, sprites.dungeon.stairSouth)
    透明方塊 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . 8 8 . . . . . 8 8 8 . . . 
        . . 8 . . . . . . . . . . 8 . . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 8 . . . . . . . . . . 8 8 . 
        . 8 . 8 8 8 . . . 8 8 8 8 . 8 . 
        . 8 . . . . 8 8 8 . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . 8 . . . . . . . . . . . . 8 . 
        . . 8 8 . . . . . . . . 8 8 . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        `, SpriteKind.偷瞄)
    tiles.placeOnRandomTile(透明方塊, assets.tile`myTile`)
    mySprite3 = sprites.create(img`
        . . . 7 . . . . . . . . 7 . . . 
        . . 7 7 . 7 7 7 7 7 7 . 7 7 . . 
        . . 7 7 7 f 7 7 7 7 f 7 7 7 . . 
        . . 7 7 7 f f 7 7 f f 7 7 7 . . 
        . . 7 7 7 7 1 7 7 1 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 2 2 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 e 7 7 7 7 e 7 7 7 . . 
        . 7 7 7 7 e 7 7 7 7 e 7 7 7 7 . 
        . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
        . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
        . 7 . e e e e e e e e e e . 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . 7 . . . . 7 . . . . . 
        . . . 7 7 7 . . . . 7 7 7 . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 3 3 3 3 3 3 b b . . . 
        . . . b 3 6 6 6 6 6 6 6 b . . . 
        . . b b 3 6 6 6 6 6 6 6 b b . . 
        . b b 3 3 6 6 6 6 6 6 6 6 b b . 
        . b 3 3 d 6 6 6 6 6 6 6 6 6 b . 
        b 3 3 d 6 6 6 6 6 6 6 6 6 6 6 b 
        b 3 d 6 6 6 6 6 1 6 6 6 6 6 6 b 
        b 3 d 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
        b 7 6 6 6 6 6 6 6 6 6 6 6 6 6 b 
        b 7 7 7 d 6 6 6 6 6 6 6 d 7 7 b 
        . b b 7 7 d 6 6 6 6 6 6 7 b b . 
        . . b b 7 7 7 7 7 7 7 7 b b . . 
        . . . . b b b b b b b b . . . . 
        `, SpriteKind.Aa)
    mySprite3.follow(齊柏林, 20)
    mySprite4.follow(齊柏林, 20)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 f f 3 3 3 f f 3 . . . . 
        . . 3 3 f 1 3 3 3 1 f 3 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 . 2 . 2 . 2 . 2 . 2 . . . 
        . 2 2 . 2 . 2 . 2 . 2 . 2 2 2 2 
        2 2 . 2 2 . 2 . 2 . 2 . . . . 2 
        2 . . 2 . . 2 . 2 . 2 2 . . . 2 
        2 . . 2 2 . 2 . 2 . . 2 . . . . 
        2 . . . 2 . 2 . 2 . . 2 . . . . 
        2 2 . . 2 . . 2 . . 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bb)
    mySprite2 = sprites.create(img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 4 5 . . . . . . . 
        . . . . 5 4 7 7 7 7 . . . . . . 
        . . . . 4 7 7 f f 7 7 . . . 2 . 
        . . . 5 7 7 7 f 1 7 7 7 . 2 2 . 
        . . 5 4 7 7 7 7 7 7 7 . . 2 2 . 
        . . . 5 7 7 7 7 7 7 . . 2 2 . . 
        . . . 5 7 7 7 7 7 7 7 . . . . . 
        . . 5 4 7 7 7 7 7 7 e 7 . . . . 
        . . . 5 7 7 7 7 7 e e . . . . . 
        . . . . 7 7 7 7 e e e 7 . . . . 
        . 7 7 . 7 7 7 7 7 e e 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 e 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cc)
    mySprite.follow(齊柏林, 10)
    mySprite2.follow(齊柏林, 10)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleInsignia)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projectile == false) {
        火焰 = sprites.createProjectileFromSprite(img`
            . . 1 . . 
            . 1 1 1 . 
            1 1 f 1 1 
            . 1 1 1 . 
            . . 1 . . 
            `, 齊柏林, -50, 0)
        music.playTone(147, music.beat(BeatFraction.Eighth))
        projectile = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Aa, function (sprite, otherSprite) {
    mySprite4.destroy()
    info.changeLifeBy(-1)
    齊柏林.say("是怪物快跑", 100)
    齊柏林.startEffect(effects.fire, 100)
    scene.cameraShake(5, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bb, function (sprite, otherSprite) {
    mySprite.destroy()
    火焰.destroy()
    mySprite.startEffect(effects.fire, 500)
    music.playTone(784, music.beat(BeatFraction.Half))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (info.score() >= 8) {
        game.over(true, effects.smiles)
        music.playMelody("G A B A B G B C5 ", 120)
    } else {
        game.over(false, effects.dissolve)
        music.playMelody("C C C C C C C C ", 120)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.沙比, function (sprite, otherSprite) {
    齊柏林.say("奇怪的硬幣", 100)
    value.destroy()
    music.playMelody("C D G E D B E F ", 181)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite3.destroy()
    火焰.destroy()
    mySprite3.startEffect(effects.fire, 500)
    music.playTone(784, music.beat(BeatFraction.Half))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite3.destroy()
    齊柏林.say("是怪物快跑", 100)
    齊柏林.startEffect(effects.fire, 100)
    scene.cameraShake(5, 500)
})
let 火焰: Sprite = null
let 透明方塊: Sprite = null
let value: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let 寶石: Sprite = null
let 大保健: Sprite = null
let projectile = false
let 齊柏林: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffff22222ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffff222ffffffffffffff22222fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffff222fffffffffffff22222ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffffffffffff222ffffffffffff22222fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111211111fffffffffffffffffff222fffffffffff22222ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111211111111fffffffffffffffff222fffffffff222222fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111122111111111111111111211111111111fffffffffffffff222ffffffff222222ffffffffffffffffff222f
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111121111111111111122222211111111111111fffffffffffff222fffffff222222ffffffffffffffffff2222f
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111121111111111111221111111111111111111111fffffffffff222fffffff2222ffffffffffffffffffff2222f
    fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111112221111111111112211111111111111111111111111fffffffff222fffffff222ffffffffffffffffffff2222ff
    ffffffffffffffffffffffffffffffffffffffffffffffff11111121111111111122211111111111112211111111111111111111111111111ffffffffffffffffff222fffffffffffffffffff22222ff
    fffffffffffffffffffffffffffffffffffffffffffffff1111112111111111112111111111111111211111111111111111111111111111111fffffffffffffffff222fffffffffffffffffff2222fff
    fffffffffffffffffffffffffffffffffffffffffffff11111112111111111112111111111111112211111111111111111111111111111111111ffffffffffffff2222fffffffffffffffff22222ffff
    ffffffffffffffffffffffffffffffffffffffffffff1111111121111111112211111111111111211111111111111111111111111111111111111fffffffffffff2222ffffffffffffffff222222ffff
    fffffffffffffffffffffffffffffffffffffffffff111111112111111111211111111111111121111111111111111111111111111111111111111ffffffffffff222fffffffffffffffff22222fffff
    ffffffffffffffffffffffffffffffffffffffffff11111112211111111221111111111111111211111111111111111111111111111111111111111fffffffffff222fffffffffffffffff222fffffff
    ffffffffffffffffffffffffffffffffffffffff111111122211111111211111111111111112211111111111111111111111111111111111111112111fffffffff222ffffffffffffffff2222fffffff
    fffffffffffffffffffffffffffffffffffffff11111112111111111112111111111111111211111111111111111111111111111111111111111211111ffffffff222fffffffffffffff22222fffffff
    ffffffffffffffffffffffffffffffffffffff1111111121111111111221111111111111121111111111111111111111111111111111111111122111111fffffff222fffffffffffffff2222ffffffff
    ffffffffffffffffffffffffffffffffffffff1111111121111111112111111111111111211111111111111111111111111111111111111112211111111fffffff222ffffffffffffff2222fffffffff
    fffffffffffffffffffffffffffffffffffff111111112111111111211111111111111121111111111111111111111111111111111111111211111111111ffffff222ffffffffffffff2222fffffffff
    ffffffffffffffffffffffffffffffffffff11111111211111111112111111111111112111111111111111111111111111111111111111121111111111111ffffffffffffffffffffff222ffffffffff
    fffffffffffffffffffffffffffffffffff1111111112111111111121111111111111221111111111111111111111111111111111111222111111111111111fffffffffffffffffffff222ffffffffff
    ffffffffffffffffffffffffffffffffff111111111211111111111211111111111112111111111111111111111111111111111111221111111111111111111fffffffffffffffffff2222ffffffffff
    ffffffffffffffffffffffffffffffffff111111111211111111111211111111111112111111111111111111111111222222222222111111111111111111111ffffffffffffffffff22222ffffffffff
    fffffffffffffffffffffffffffffffff11111111111111111111112111111111111121111111111111111111112221111111111111111111111111111111111ffffffffffffffff22222fffffffffff
    ffffffffffffffffffffffffffffffff1111111111111111111111121111111111111211111111111111111112211111111111111111111111111111111111111fffffffffffffff2222ffffffffffff
    fffffffffffffffffffffffffffffff111111111111111111111111211111111111112111111111111111112211111111111111111111111111111111111111111ffffffffffffff222fffffffffffff
    fffffffffffffffffffffffffffffff111111111111111122222222222222222111112111111111111111111111111111111111111111111111111111111111111fffffffffffff2222fffffffffffff
    ffffffffffffffffffffffffffffff11111111111111222222222222222222222221111111111111111111111111111111111111111111111111111111111111111ffffffffffff2222fffffffffffff
    ffffffffffffffffffffffffffffff11111111111122222222222222222222222222211111111111111111111111111111111111111111111111111111111111111ffffffffffff222ffffffffffffff
    fffffffffffffffffffffffffffff1111111111122222222222222222222222222222221111111111111111111111111111111111111111111111111111111111111ffffffffff2222ffffffffffffff
    fffffffffffffffffffffffffffff1111111112222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111111ffffffffff2222ffffffffffffff
    ffffffffffffffffffffffffffff111111111222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111111ffffffff2222fffffffffffffff
    ffffffffffffffffffffffffffff111111122222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111111ffffffff2222fffffffffffffff
    fffffffffffffffffffffffffff11111112222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111111fffffff222ffffffffffffffff
    fffffffffffffffffffffffffff11111122222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111fffffff222ffffffffffffffff
    ffffffffffffffffffffffffff1111112222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111ffffff222ffffffffffffffff
    ffffffffffffffffffffffffff1111122222222222222222222222222222222222222222222222221111111111111111111111111111111111111111111111111111111ffffff222ffffffffffffffff
    ffffffffffffffffffffffffff1111222222222222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111ffffff222ffffffffffffffff
    fffffffffffffffffffffffff111122222222222222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111fffff222ffffffffffffffff
    fffffffffffffffffffffffff111122222222222222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111fffff222ffffffffffffffff
    fffffffffffffffffffffffff111222222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111221ffffffffffffffffffffffff
    ffffffffffffffffffffffff11122222222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111221111fffffffffffffffffffffff
    ffffffffffffffffffffffff11122222222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111112111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11222222222222222222222222222222222222222222222222222222222221111111111111111222222222222222211111111111121111111fffffffffffffffffffffff
    ffffffffffffffffffffffff11222222222222222222222222222222222222222222222222222222222221111111111111122211111111111111122111111111211111111fffffffffffffffffffffff
    ffffffffffffffffffffffff12222222222222222222222222222222222222222222222222222222222222111111111111211111111111111111111222222222111111111fffffffffffffffffffffff
    fffffffffffffffffffffff1f22222222222222222222222222222222222222222222222222222222222221111111122222111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff1222222222222222222222222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff1222222222222222222fffffffffffff22222222222222222222222222222222111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff12222222222222222fffffffffffffffff222222222222222222222222222222111111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff222222222222222fffffffffffffffffffff2222222222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff22222222222222fffffffffffffffffffffff222222222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222222222fffffffffffffffffffffffff22222222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff222222222222fffffffffffffffffffffffffff2222222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff22222222222fffffffffffffffffffffffffffff222222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffff22222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffff2222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffff2222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffff222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffff222222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111111111111111111111111111111111111111111111111ffffffffffffffffffffff
    fffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222222222222222211111122222211111111111111111111111111111111111111ffffffffffffffffffffff
    ffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffff2222222222222222222211111111111112221111111111111111111111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffff2222222222222222222211111111111111112222222111111111111111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff222222fffffffffffffffffffffffffffffffffffff2222222222222222222211111111111111111111111222221111111111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff122222fffffffffffffffffffffffffffffffffffff2222222222222222222111111111111111111111111111112111111111111111111111fffffffffffffffffffffff
    ffffffffffffffffffffffff122222fffffffffffffffffffffffffffffffffffff2222222222222222222111111111111111111111111111112111111111111111111111fffffffffffffffffffffff
    fffffffffffffffffffffffff12222fffffffffffffffffffffffffffffffffffff222222222222222222111111111111111111111111111111122211111111111111111ffffffffffffffffffffffff
    fffffffffffffffffffffffff122222fffffffffffffffffffffffffffffffffff2222222222222222222111111111111111111111111111111111121111111111111111ffffffffffffffffffffffff
    fffffffffffffffffffffffff1f2222fffffffffffffffffffffffffffffffffff2222222222222222221111111111111111111111111111111111121111111111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffffff122222fffffffffffffffffffffffffffffffff2222222222222222222111111111111111111111111111111111111211111111111111fffffffffffffffffffffffff
    ffffffffffffffffffffffffff112222fffffffffffffffffffffffffffffffff2222222222222222221111111111111111111111111111111111111121111111111111fffffffffffffffffffffffff
    ffffffffffffffffffffffffff1112222fffffffffffffffffffffffffffffff22222222222222222211111111111111111111111111111111111111112111111111111fffffffffffffffffffffffff
    fffffffffffffffffffffffffff1122222fffffffffffffffffffffffffffff22222222222222222221111111111111111111111111111111111111111221111111111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffff11122222fffffffffffffffffffffffffff222222222222222222211111111111111111111111111111111111111111112211111111ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff11122222fffffffffffffffffffffffff222222222222222222211111111111111111111111111111111111111111111122221111fffff2222222222222222ffffff
    ffffffffffffffffffffffffffff111122222fffffffffffffffffffffff2222222222222222222111111111111111111111111111111111111111111111111111111fffff22222222222222222fffff
    fffffffffffffffffffffffffffff111122222fffffffffffffffffffff2222222222222222222111111111111111111111111111111111111111111111111111111ffffff222222222222222222ffff
    fffffffffffffffffffffffffffff11111222222fffffffffffffffff222222222222222222221111111111111111111111111111111111111111111111111111111ffffffffffffffffffff2222ffff
    ffffffffffffffffffffffffffffff111112222222fffffffffffff2222222222222222222221111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff2222fff
    ffffffffffffffffffffffffffffff11111112222222222222222222222222222222222222111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff22222ff
    fffffffffffffffffffffffffffffff111111122222222222222222222222222222222222111111112111111111111111111111111111111111111111111111111ffffffffffffffffffffffff222222
    fffffffffffffffffffffffffffffff111111111222222222222222222222222222222211111111112111111111111111111111111111111111111111111111111ffffffffffffffffffffffff222222
    ffffffffffffffffffffffffffffffff1111111111222222222222222222222222222111111111111211111111111111111111111111111111111111111111111fffffffffffffffffffffffffff2222
    fffffffffffffffffffffffffffffffff11111111111222222222222222222222221111111111111121111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111122222222222222222111111111111111111211111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111121111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111112111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111121111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111112111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111121111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111112211111111111111111111111112111111111fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111112211111111111111111111112111111111ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111112222221111111111111112111111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111122222222222222211111111ffffffff22222ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111111111111111111112111111111111111111111111111111111111111111111111111111fffffffff22222222222ffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1111111111111111111121111111111111111111111111111111111111111111111111111ffffffffff222222222222fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111211111111111111111111111111111111111111111111111111ffffffffffffff2222222222ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111211111111111111111111111122111111111111111111111ffffffffffffffffffffff22222222fffffffffff2222f
    ffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111112111111111111111111111121111111111111111111111ffffffffffffffffffffffff222222222fffffff222222f
    fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111121111111111111111111121111111111111111111111ffffffffffffffffffffffffff222222222222222222222f
    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111122211111111111111112111111111111111111111ffffffffffffffffffffffffffffffff222222222222222fff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111222222222222222211111111111111111111ffffffffffffffffffffffffffffffffffff22222222222fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("遠古遺跡驚魂夜")
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("遊戲規則", DialogLayout.Full)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("搜集四個寶物", DialogLayout.Full)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("找到出口逃出迷宮", DialogLayout.Full)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("可以用按鍵攻擊野怪", DialogLayout.Full)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("有機會殺不死", DialogLayout.Full)
music.playTone(262, music.beat(BeatFraction.Half))
齊柏林 = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e e . . . 
    . . . . . d 2 d d 2 d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . d d 2 2 d d . . . . . 
    . . . e e f d d 4 d f e e . . . 
    . . . e e f e 4 e e f e e . . . 
    . . . e e f 4 e e e f e e . . . 
    . . . e e f e e e e f e e . . . 
    . . . d d f f 5 5 f f d d . . . 
    . . . . . e e . . e e . . . . . 
    . . . . . e e . . e e . . . . . 
    . . . . . e e . . e e . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(齊柏林, 150, 150)
projectile = false
scene.cameraFollowSprite(齊柏林)
info.setLife(1)
tiles.setTilemap(tilemap`層級5`)
tiles.placeOnRandomTile(齊柏林, sprites.dungeon.doorLockedWest)
大保健 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c c c . 
    . . . . . . . . . . c 5 5 5 c . 
    . . . . . . . . . c 5 5 5 5 c . 
    . . . . . . . . c 5 5 5 5 c . . 
    . . . e . . c c 5 5 5 5 c . . . 
    . . . e e . c 5 5 5 5 c . . . . 
    . . . . e e c 5 5 5 c . . . . . 
    . . . . . e c c c c . . . . . . 
    . . . . e e e e . . . . . . . . 
    . . . e e e . e . . . . . . . . 
    . . e e e . . e e . . . . . . . 
    . . e e . . . . e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.久久)
tiles.placeOnRandomTile(大保健, assets.tile`myTile`)
寶石 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . 9 9 9 9 9 9 9 . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.鑽石)
tiles.placeOnRandomTile(寶石, assets.tile`myTile`)
mySprite3 = sprites.create(img`
    . . . 7 . . . . . . . . 7 . . . 
    . . 7 7 . 7 7 7 7 7 7 . 7 7 . . 
    . . 7 7 7 f 7 7 7 7 f 7 7 7 . . 
    . . 7 7 7 f f 7 7 f f 7 7 7 . . 
    . . 7 7 7 7 1 7 7 1 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 2 2 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 e 7 7 7 7 e 7 7 7 . . 
    . 7 7 7 7 e 7 7 7 7 e 7 7 7 7 . 
    . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
    . 7 . 7 7 e 7 7 7 7 e 7 7 . 7 . 
    . 7 . e e e e e e e e e e . 7 . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 . . . . 7 . . . . . 
    . . . 7 7 7 . . . . 7 7 7 . . . 
    `, SpriteKind.Enemy)
mySprite4 = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 3 3 3 3 3 3 b b . . . 
    . . . b 3 6 6 6 6 6 6 6 b . . . 
    . . b b 3 6 6 6 6 6 6 6 b b . . 
    . b b 3 3 6 6 6 6 6 6 6 6 b b . 
    . b 3 3 d 6 6 6 6 6 6 6 6 6 b . 
    b 3 3 d 6 6 6 6 6 6 6 6 6 6 6 b 
    b 3 d 6 6 6 6 6 1 6 6 6 6 6 6 b 
    b 3 d 6 6 6 6 6 6 1 1 1 6 6 6 b 
    b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
    b 7 6 6 6 6 6 6 6 1 1 1 6 6 6 b 
    b 7 6 6 6 6 6 6 6 6 6 6 6 6 6 b 
    b 7 7 7 d 6 6 6 6 6 6 6 d 7 7 b 
    . b b 7 7 d 6 6 6 6 6 6 7 b b . 
    . . b b 7 7 7 7 7 7 7 7 b b . . 
    . . . . b b b b b b b b . . . . 
    `, SpriteKind.Aa)
mySprite3.follow(齊柏林, 20)
mySprite4.follow(齊柏林, 20)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 f f 3 3 3 f f 3 . . . . 
    . . 3 3 f 1 3 3 3 1 f 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 2 . 2 . 2 . 2 . 2 . 2 . . . 
    . 2 2 . 2 . 2 . 2 . 2 . 2 2 2 2 
    2 2 . 2 2 . 2 . 2 . 2 . . . . 2 
    2 . . 2 . . 2 . 2 . 2 2 . . . 2 
    2 . . 2 2 . 2 . 2 . . 2 . . . . 
    2 . . . 2 . 2 . 2 . . 2 . . . . 
    2 2 . . 2 . . 2 . . 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Bb)
mySprite2 = sprites.create(img`
    . . . . . . . 5 . . . . . . . . 
    . . . . . . 5 4 5 . . . . . . . 
    . . . . 5 4 7 7 7 7 . . . . . . 
    . . . . 4 7 7 f f 7 7 . . . 2 . 
    . . . 5 7 7 7 f 1 7 7 7 . 2 2 . 
    . . 5 4 7 7 7 7 7 7 7 . . 2 2 . 
    . . . 5 7 7 7 7 7 7 . . 2 2 . . 
    . . . 5 7 7 7 7 7 7 7 . . . . . 
    . . 5 4 7 7 7 7 7 7 e 7 . . . . 
    . . . 5 7 7 7 7 7 e e . . . . . 
    . . . . 7 7 7 7 e e e 7 . . . . 
    . 7 7 . 7 7 7 7 7 e e 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 e 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cc)
mySprite.follow(齊柏林, 10)
mySprite2.follow(齊柏林, 10)
tiles.placeOnRandomTile(mySprite4, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mySprite3, sprites.dungeon.collectibleInsignia)
game.onUpdateInterval(500, function () {
    if (projectile == true) {
        projectile = false
    }
})
