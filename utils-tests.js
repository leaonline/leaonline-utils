// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by utils.js.
import { name as packageName } from "meteor/leaonline:utils";

// Write your tests here!
// Here is an example.
Tinytest.add('utils - example', function (test) {
  test.equal(packageName, "utils");
});
