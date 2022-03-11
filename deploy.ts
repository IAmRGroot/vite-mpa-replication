import fs from 'fs';

const source = 'dist';
const output = 'out';

try {
    fs.rmSync(output, { recursive: true, force: true });
} catch (error) {
    console.error(error);
}

fs.cpSync(source, output, { recursive: true, force: true });