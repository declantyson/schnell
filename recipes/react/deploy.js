/*
 *  React Schnell / Deploy Standalone
 *  Declan Tyson
 *  v0.2.0
 *  02/06/2017
 */

const REMOTE_API_URL = "";

const request   = require('request'),
    fs        = require('fs'),
    fsPath    = require('fs-path'),
    fsExtra   = require('fs-extra'),
    api       = {
        remote : REMOTE_API_URL,
        local  : 'http://localhost:3000/data'
    },
    api_src   = process.env.npm_config_src || 'local',
    api_base  = api[api_src],
    page_list = 'data/page_list.json',
    rootUrl   = '';

// Create pages

fs.readFile(page_list, 'utf8', (err, content) => {
    if (err) {
        console.log(err);
    }

    fsPath.writeFile(`${__dirname}/output/data/page_list.json`, content, (err) => {
        if (err) {
            console.log(err);
        }
    });

    let pages = JSON.parse(content);
    fs.readFile('index_rendered.html', 'utf8', (err, wrapperContent) => {
        if (err) {
            console.log(err);
        }
        pages.forEach((page) => {
            request.get(api_base + "/" + page[api_src], (err, res, body) => {
                if (err) {
                    console.log(err);
                }
                fsPath.writeFile(`${__dirname}/output/data/${page.local}`, body, (err) => {
                    let renderedHtml = wrapperContent.replace(/____root____/g, rootUrl).replace('____url____', `/data/${page.local}`),
                        path = page.local.replace('.json', '');

                    path = path === 'index' ? '/' : '/' + path + '/';

                    fsPath.writeFile(`${__dirname}/output/${path}index.html`, renderedHtml, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`Successfully saved ${page.url} to ${path}`);
                        }
                    });
                });
            });
        });
    });
});

// Copy resources

const copyResources = (folder, rename = folder) => {
    fsExtra.ensureDir(`${__dirname}/output/${rename}`, (err) => {
        if(err) console.log(err);
        fsExtra.copy(`${__dirname}/${folder}`, `${__dirname}/output/${rename}`, (err) => {
            if(err) console.log(err);
            console.log(`Copied ${folder} resources.`);
        });
    });
};

let resources = [['img', 'media'], ['media', 'media'], ['libs', 'js'], ['fonts', 'fonts']];
resources.forEach((resource) => {
    copyResources(resource[0], resource[1]);
});

fs.readFile('views.js', 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        return;
    }
    fsPath.writeFile(`${__dirname}/output/js/views.js`, content, (err) => {
        if (err) console.log(err);
    });
});

fs.readFile(`${__dirname}/views/compiled/styles.css`, 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        return;
    }
    fsPath.writeFile(`${__dirname}/output/css/styles.css`, content, (err) => {
        if (err) console.log(err);
    });
});