#!/usr/bin/env node

var passgen = require('passgen')
var program = require('commander')

program
  .version('1.1.0')
  .description('Generates cryptographically secure tokens that can be used as automatically-generated passwords or as session tokens. You can probably find other uses, too.')
  .option('-a, --alphabet <alphabet>', 'Alphabet to be used for the password')
  .option('-c, --count <count>', 'Number of passwords to generate', 1)
  .option('-l, --length <length>', 'Length of the generated password', 64)
  .parse(process.argv)

if (!program.alphabet) program.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
for (var i = 0; i < program.count; i++) {
  console.log(passgen.create(program.length, program.alphabet))
}
