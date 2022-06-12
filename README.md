# Md Footer

[![CI][1]][2]
[![License: MIT][3]][4]

Generate markdown footer links.
This library is rewritten from [md-footer][5] by typescript.

# Install

```sh
$ npm i md-footer
```

# Usage

```typescript
import * as fs from 'fs';
import { generateLinks } from 'md-footer';

const md = fs.readFileSync('input.md').toString();

console.log(generateLinks(md));
```

Input
```markdown
[Link1](http://www.example.com/link1)
[Link2](http://www.example.com/link2)
[Link1-2](http://www.example.com/link1)
```

Output
```markdown
[Link1][1]
[Link2][2]
[Link1-2][1]


[1]:http://www.example.com/link1
[2]:http://www.example.com/link2
```

# Related

 - [md-footer-cli](https://www.npmjs.com/package/md-footer-cli) - CLI for this library.

[1]:https://github.com/k-kuroguro/md-footer/actions/workflows/main.yaml/badge.svg
[2]:https://github.com/k-kuroguro/md-footer/actions/workflows/main.yaml
[3]:https://img.shields.io/badge/License-MIT-yellow.svg
[4]:https://opensource.org/licenses/MIT
[5]:https://github.com/sayanarijit/md-footer
