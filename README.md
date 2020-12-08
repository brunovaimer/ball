# hhm-sala-plugins

Repository of plugins for
[Haxball Headless Manager](https://github.com/saviola777/haxball-headless-manager).

This repository offers folowing plugins:

- [hr/motd1](src/hr/motd1.js)
- [hr/motd3](src/hr/motd3.js)
- [hr/motd5](src/hr/motd5.js)
- [hr/motd2](src/hr/motd2.js)
- [hr/motd4](src/hr/motd4.js)


Click the links to see the source code for the options the plugins support.

## Usage

This repository contains plugins that should work well with
[haxroomie](https://github.com/morko/haxroomie).

In [haxroomie-cli](https://www.npmjs.com/package/haxroomie-cli) config you can add
the repository to the `repository` array.

e.g.

```js
repositories: [
  {
    type: 'github',
    repository: 'morko/hhm-sala-plugins',
  },
],
```
