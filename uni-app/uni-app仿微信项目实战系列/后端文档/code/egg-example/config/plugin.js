'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 开启cors
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};
