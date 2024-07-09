// LiteLoaderScript Dev Helper
/// <reference path="../HelperLib/src/index.d.ts"/>
/* global ll mc */

mc.listen('onDestroyBlock', (player, block) => {
  if (
    !player.isCreative &&
    player.getHand().type === 'minecraft:netherite_pickaxe' &&
    block.type === 'minecraft:reinforced_deepslate'
  ) {
    const it = mc.newItem('minecraft:reinforced_deepslate', 1)
    if (it) mc.spawnItem(it, block.pos)
  }
})

ll.registerPlugin('DroppableDeepSlate', '让强化深板岩掉落物品', [0, 1, 1], {})
