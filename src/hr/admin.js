let roles;
room.onRoomLink = () => {
  // First get the roles plugin, this is just a shortcut so you don't have to
  // write this every time
  roles = room.getPlugin(`sav/roles`);
  // Add our custom role with a password
  roles.addOrUpdateRole(`cheerleader`, `ch33r`);
};

room.onPlayerRoleAdded_cheerleader = (player) => {
  room.sendChat(`We have a new cheerleader: ${player.name}!`);
};

room.onCommand_cheer = (player) => {
  if (roles.ensurePlayerRoles(player.id, `cheerleader`, room, { feature: `!cheer` })) {
    room.sendChat(`${player.name} is cheering!`);
  }
};
