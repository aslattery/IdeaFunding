/*
    This file servers as deployment point for all functions.
        - Functions are isolated in subdirectories and exposed for deployment here as module exports
 */
exports.recordVote = require('./recordVote');
