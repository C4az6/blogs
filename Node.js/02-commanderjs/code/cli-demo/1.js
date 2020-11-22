const commander = require('commander');

// 设置当前命令的版本信息
// commander.version('v1.0.0');
commander.version('v1.0.0', '-v, --version');

// 设置其他option


// 解析来自process.argv上的数据，会自动帮助我们添加一个 -h 的解析
commander.parse( process.argv );

