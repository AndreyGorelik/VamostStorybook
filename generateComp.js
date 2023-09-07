const fs = require('fs');
const path = require('path');

function generateComponentFiles(parentFolder, folderName) {
  const folder = folderName[0].toUpperCase() + folderName.slice(1);
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

  const indexContent = `export { default as ${folder} } from './${folderName}.component';`;

  const stylesContent = `
import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) => StyleSheet.create({
});`;

  const typesContent = `interface ${folder}Props {
}

export type { ${folder}Props };`;

  fs.mkdirSync(path.join(parentFolder, folderName));

  fs.writeFileSync(
    path.join(parentFolder, folderName, `${folderName}.component.tsx`),
    componentContent
  );
  fs.writeFileSync(path.join(parentFolder, folderName, 'index.ts'), indexContent);
  fs.writeFileSync(path.join(parentFolder, folderName, `${folderName}.styles.ts`), stylesContent);
  fs.writeFileSync(path.join(parentFolder, folderName, `${folderName}.types.ts`), typesContent);

  console.log(`Generated files for ${folderName}`);
}

const parentFolder = process.argv[2];
const folderName = process.argv[3];

if (!folderName) {
  console.error('Please provide a folder name.');
} else {
  generateComponentFiles(parentFolder, folderName);
}
