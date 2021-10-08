// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010102020102020202020202010202020201020201010101020202020202020101010101010102010204020202020201020202020202010101010102020202010202020202020101020201020201010101020201010201010202010102020105010102010101010502020201020201020101020201020102020201010202010202010202020201020202010202010101010101010202010102020102020202020101020101010101010101020202020101010101020101010201020103010101020202010101020202010102020202020202020201010102020201020202020202020202020201010102010202020202020202020202020202020102`, img`
. . . . . . 2 2 . 2 2 2 2 2 2 2 
. 2 2 2 2 . 2 2 . . . . 2 2 2 2 
2 2 2 . . . . . . . 2 . 2 . 2 2 
2 2 2 . 2 2 2 2 2 2 . . . . . 2 
2 2 2 . 2 2 2 2 2 2 . . 2 2 . 2 
2 . . . . 2 2 . . 2 . . 2 2 . . 
2 2 . . . . 2 . . . . . 2 2 2 . 
2 2 . 2 . . 2 2 . 2 . 2 2 2 . . 
2 2 . 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . 2 2 . . 2 2 . 2 
2 2 2 2 . . 2 . . . . . . . . 2 
2 2 2 . . . . . 2 . . . 2 . 2 . 
. . . . 2 2 2 . . . 2 2 2 . . 2 
2 2 2 2 2 2 2 2 . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.swamp.swampTile13,sprites.dungeon.doorLockedSouth,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
