import { greet, createGreeter } from '{{SCOPE}}/core';
import { createLogger } from '{{SCOPE}}/utils/logger';

const log = createLogger('Example');

log.info('Starting example app...');

// Simple greeting
const result = greet('World');

if (result.isOk()) {
  log.success(result.value);
}

// Custom greeter
const spanishGreeter = createGreeter({ prefix: 'Hola' });
const spanishResult = spanishGreeter('Mundo');

if (spanishResult.isOk()) {
  log.success(spanishResult.value);
}

log.info('Example completed!');
