# This script builds the Storybook, TSDoc, and Docusaurus docs for the project.

# Exit immediately if a command exits with a non-zero status.
set -e

# Cleaning up the docs-build folder
echo "Cleaning up the docs-build folder ..."
rm -rf docs-build
echo "Cleaning up the docs-build folder Done!"



# Build Docusaurus docs.
echo "Building Docusaurus docs ..."

# Going into Docusaurus folder
cd docusaurus
# Installing dependencies and Building Docusaurus
yarn install && yarn build
# Going back to the root folder
cd ..
echo "Building Docusaurus docs Done!"

# Copying Docusaurus build to docs-build folder
echo "Copying Docusaurus build to docs-build folder ..."
cp -r docusaurus/build docs-build/
echo "Copying Docusaurus build to docs-build folder Done!"

# Removing Docusaurus build folder
echo "Removing Docusaurus build folder ..."
rm -rf docusaurus/build
echo "Removing Docusaurus build folder Done!"



# Build Storybook.
echo "Building Storybook ..."

# Building Storybook
yarn build:storybook
echo "Building Storybook Done!"

# Copying storybook-build files to docs-build folder
echo "Copying storybook-build files to docs-build folder ..."
cp -r storybook docs-build/storybook/
echo "Copying storybook-build files to docs-build folder Done!"

# Removing storybook-build folder
echo "Removing storybook-build folder ..."
rm -rf storybook
echo "Removing storybook-build folder Done!"



# Build TSDoc.
echo "Building TSDoc ..."

# Building TSDoc
yarn build:typedoc
echo "Building TSDoc Done!"

# Find and replace the absolute path using sed
echo "Find and replace the absolute path using sed ..."

sed -re 's@<(\w+)(.*)href="([^http].*)"(.*)>@<\1\2href="/typedoc\/\3"\4>@g' -i ./typedoc/index.html
sed -re 's@"(assets/.+)"@"/typedoc/\1"@g' -i ./typedoc/index.html
sed -i 's+assets/search.js+typedoc/assets/search.js+g' ./typedoc/index.html

sed -re 's@<(\w+)(.*)href="([^http].*)"(.*)>@<\1\2href="/typedoc\/\3"\4>@g' -i ./typedoc/modules.html
sed -re 's@"(assets/.+)"@"/typedoc/\1"@g' -i ./typedoc/modules.html
sed -i 's+assets/search.js+typedoc/assets/search.js+g' ./typedoc/modules.html

echo "Find and replace the absolute path using sed Done!"

# Copying typedoc files to docs-build folder
echo "Copying typedoc files to docs-build folder ..."
cp -r typedoc docs-build/typedoc/
echo "Copying typedoc files to docs-build folder Done!"

# Removing typedoc folder
echo "Removing typedoc folder ..."
rm -rf typedoc
echo "Removing typedoc folder Done!"



echo "Building and Copying all docs folders done."