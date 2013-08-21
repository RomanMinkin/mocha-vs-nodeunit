#!/bin/bash

echo "#################"
echo "### Run Mocha ###"
echo "#################"
node_modules/mocha/bin/mocha test/mocha.test.js

echo ""
echo ""
echo ""
echo "#################"
echo "### Run NodeUnit"
echo "#################"
node_modules/nodeunit/bin/nodeunit test/nodeunit.test.js
