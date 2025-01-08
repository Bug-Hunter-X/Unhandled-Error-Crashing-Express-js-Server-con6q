# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js applications:  unhandled errors in route handlers that lead to server crashes.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version with proper error handling.

## Problem

The original code lacks a `try...catch` block around the potentially error-throwing `someFunctionThatMightThrowAnError()`. When this function throws an error, the Express.js server crashes without providing any user-friendly feedback.

## Solution

The solution involves wrapping the potentially problematic code within a `try...catch` block. This allows for graceful error handling, preventing server crashes and providing opportunities to respond to errors appropriately (e.g., sending error messages to the client, logging the error, etc.).