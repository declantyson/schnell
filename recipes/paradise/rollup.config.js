import autoExternal from 'rollup-plugin-auto-external';
import resolve from 'rollup-plugin-node-resolve';


export default [{
    input: 'src/main.js',
    output: {
        file: 'game/game.js',
        format: 'iife',
        name: 'Game'
    },
    plugins: [
        autoExternal(),
        resolve()
    ]
}];