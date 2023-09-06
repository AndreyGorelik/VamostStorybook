const fs = require('fs');
const path = require('path');

function generateComponentFiles(parentFolder, folderName) {
  const folder = folderName[0].toUpperCase() + folderName.slice(1);
  // Create the [folder_name].component.tsx file
  const componentContent = `
import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import { createStyles } from './${folderName}.styles';

export default function ${folder}() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View>
      
    </View>
  );
}`;

  // Create the index.ts file
  const indexContent = `export { default as ${folder} } from './${folder}.component';`;

  // Create the [folder_name].styles.ts file
  const stylesContent = `
import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) => StyleSheet.create({
  // Define your styles here
});`;

  // Create the [folder_name].types.ts file
  const typesContent = `interface ${folder}Props {
  // Define your component's props here
}

export type { ${folder}Props };`;

  // Create the folder for the component
  fs.mkdirSync(path.join(parentFolder, folderName));

  // Write content to files
  fs.writeFileSync(
    path.join(parentFolder, folderName, `${folderName}.component.tsx`),
    componentContent
  );
  fs.writeFileSync(path.join(parentFolder, folderName, 'index.ts'), indexContent);
  fs.writeFileSync(path.join(parentFolder, folderName, `${folderName}.styles.ts`), stylesContent);
  fs.writeFileSync(path.join(parentFolder, folderName, `${folderName}.types.ts`), typesContent);

  console.log(`Generated files for ${folderName}`);
}

// Usage: node generateComponent.js FolderName
const parentFolder = process.argv[2];
const folderName = process.argv[3];

if (!folderName) {
  console.error('Please provide a folder name.');
} else {
  generateComponentFiles(parentFolder, folderName);
}
