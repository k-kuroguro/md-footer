import * as path from 'path';
import * as fs from 'fs';

import { generateLinks } from '../index';

describe('Links Generation Test', () => {
   const testFileCount = (() => {
      let index = 0;
      while (true) {
         try {
            fs.readFileSync(path.join(__dirname, 'test.md', `test${index}.in`));
            index++;
         } catch {
            break;
         }
      }
      return index;
   })();

   const normalize = (text: string): string => text.replace(/\r\n/g, '\n');

   for (let i = 0; i < testFileCount; i++) {
      it(`Convert test${i}`, () => {
         const input = fs.readFileSync(path.join(__dirname, 'test.md', `test${i}.in`)).toString();
         const expectOutput = normalize(fs.readFileSync(path.join(__dirname, 'test.md', `test${i}.out`)).toString());
         const output = normalize(generateLinks(input));
         expect(output).toStrictEqual(expectOutput);
      });
   }
});
