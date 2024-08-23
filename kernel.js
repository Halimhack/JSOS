var fs = {
    "name": "/",
    "type": "directory",
    "contents": [
        {
            "name": "js",
            "type": "directory",
            "contents": [
                {
                    "name": "clear",
                    "type": "file",
                    "contents": "document.body.innerHTML = null;"
                },
                {
                    "name": "reset",
                    "type": "file",
                    "contents": "window.location.reload();"
                },
                {
                    "name": "alias",
                    "type": "file",
                    "contents": "switch(args.length) {case 0: aliases.forEach(alias => { cmdOutput += `${alias.alias}='${alias.ref}'\\n`; }); break; case 1: if(aliases.findIndex(obj => obj.alias == args[0]) == -1) {break;} let obj = aliases[aliases.findIndex(obj => obj.alias == args[0])]; cmdOutput = `${obj.alias}='${obj.ref}'`; break; case 2: aliases.push({ alias: args[0], ref: args[1] });}"
                },
                {
                    "name": "echo",
                    "type": "file",
                    "contents": "cmdOutput = args.join(' ');"
                },
                {
                    "name": "history",
                    "type": "file",
                    "contents": "cmdOutput = history.join('\\n');"
                },
                {
                    "name": "pwd",
                    "type": "file",
                    "contents": "cmdOutput = pwd;"
                },
                {
                    "name": "source",
                    "type": "file",
                    "contents": "nopts.forEach(file => {if (doesExist(findRelativePath(file), 'file').exists) { eval(pathToNode(findRelativePath(file)).contents); } else {cmdOutput = doesExist(findRelativePath(file), 'file').message;};});"
                },
                {
                    "name": "exit",
                    "type": "file",
                    "contents": "window.close();"
                },
                {
                    "name": "ls",
                    "type": "file",
                    "contents": "if(nopts.length == 0) {     cmdOutput = opts.findIndex(obj => obj.opt == '--color') !== -1 ? pathToNode(findRelativePath(nopts[0])).contents.map(obj => `<span style='font-weight: ${obj.type === 'directory' ? 'bold' : obj.weight};'>${obj.name}</span>`).join(opts.findIndex(obj => obj.opt == '-l') !== -1 ? '\\n' : ' ') : pathToNode(findRelativePath(nopts[0])).contents.map(obj => obj.name).join(opts.findIndex(obj => obj.opt == '-l') !== -1 ? '\\n' : ' '); } else {     nopts.forEach(dir => {         if(doesExist(findRelativePath(dir), 'directory').exists) {             cmdOutput = `${dir}:\\n` + opts.findIndex(obj => obj.opt == '--color') !== -1 ? pathToNode(findRelativePath(dir)).contents.map(obj => `<span style='font-weight: ${obj.type === 'directory' ? 'bold' : obj.weight};'>${obj.name}</span>`).join(opts.findIndex(obj => obj.opt == '-l') !== -1 ? '\\n' : ' ') : pathToNode(findRelativePath(dir)).contents.map(obj => obj.name).join(opts.findIndex(obj => obj.opt == '-l') !== -1 ? '\\n' : ' ');         }         else {             cmdOutput = doesExist(findRelativePath(dir), 'directory').message;         }     }); }"
                },
                {
                    "name": "cd",
                    "type": "file",
                    "contents": "if(doesExist(findRelativePath(args[0]), 'directory').exists) {pwd = findRelativePath(args[0]);} else {cmdOutput = doesExist(findRelativePath(args[0]), 'directory').message;}"
                },
                {
                    "name": "cat",
                    "type": "file",
                    "contents": "if(doesExist(findRelativePath(nopts[0]), 'file').exists) {cmdOutput = pathToNode(findRelativePath(nopts[0])).contents;} else {cmdOutput = doesExist(findRelativePath(nopts[0]), 'file').message;}"
                },
                {
                    "name": "touch",
                    "type": "file",
                    "contents": "if(doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').exists) {if(!doesExist(findRelativePath(nopts[0]), 'file').exists) {pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.push({ name: fileOfPath(nopts[0]), type: 'file', contents: '' })}} else {cmdOutput = doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').message;}"
                },
                {
                    "name": "nano",
                    "type": "file",
                    "contents": "if(!nopts[0]) {cmdOutput = 'Provide file name';} else {if(doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').exists) {document.body.style.overflowY = 'hidden';window.removeEventListener('click', focuslastinp);const temp = document.body.innerHTML;document.body.innerHTML = `<textarea class='texteditor'>${doesExist(findRelativePath(nopts[0]), 'file').exists ? pathToNode(findRelativePath(nopts[0])).contents : ''}</textarea>`;setTimeout(() => {window.scrollTo(0, 0);document.querySelector('.texteditor').focus();}, 10);window.addEventListener('keydown', function handleTextEditorShortcuts(keyE) {if(keyE.ctrlKey && keyE.key === 's') {keyE.preventDefault();if (!doesExist(findRelativePath(args[0]), 'file').exists) {pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.push({name: nopts[0], type: 'file', contents: document.querySelector('.texteditor').value });} else {pathToNode(findRelativePath(nopts[0])).contents = document.querySelector('.texteditor').value;}} if(keyE.key === 'Escape' || keyE.key === 'GoBack') {keyE.preventDefault();window.removeEventListener('keydown', handleTextEditorShortcuts);window.addEventListener('click', focuslastinp);document.body.innerHTML = temp + '\\n'; document.body.style.overflowY = 'auto';NewCommandLine();focuslastinp();}}); } else {cmdOutput = doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').message;}}"
                },
                {
                    "name": "mkdir",
                    "type": "file",
                    "contents": "if(doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').exists) {if(!doesExist(findRelativePath(nopts[0]), 'directory').exists) {pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.push({name: fileOfPath(nopts[0]), type: 'directory', contents: [] })}} else {cmdOutput = doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').message;}"
                },
                {
                    "name": "rm",
                    "type": "file",
                    "contents": "if(doesExist(parentDirOf(findRelativePath(nopts[0])), 'directory').exists) {if(doesExist(findRelativePath(nopts[0]), 'any').exists) {pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.splice([pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.findIndex(obj => obj.name == fileOfPath(nopts[0]) && obj.type == pathToNode(findRelativePath(nopts[0])).type)], 1);} else {cmdOutput = doesExist(findRelativePath(nopts[0]), 'any').message;}}"
                },
                {
                    "name": "cp",
                    "type": "file",
                    "contents": "if(doesExist(findRelativePath(nopts[0]), 'any').exists) {if(doesExist(parentDirOf(findRelativePath(nopts[1])), 'directory').exists) {pathToNode(parentDirOf(findRelativePath(nopts[1]))).contents.push({name: fileOfPath(nopts[1]), type: pathToNode(findRelativePath(nopts[0])).type, contents: pathToNode(findRelativePath(nopts[0])).contents });} else {cmdOutput = doesExist(parentDirOf(findRelativePath(nopts[1])), 'directory').message;}} else {cmdOutput = doesExist(findRelativePath(nopts[0]), 'any').message;}"
                },
                {
                    "name": "mv",
                    "type": "file",
                    "contents": "if(doesExist(findRelativePath(nopts[0]), 'any').exists) {if(doesExist(parentDirOf(findRelativePath(nopts[1])), 'directory').exists) {pathToNode(parentDirOf(findRelativePath(nopts[1]))).contents.push({name: fileOfPath(nopts[1]), type: pathToNode(findRelativePath(nopts[0])).type, contents: pathToNode(findRelativePath(nopts[0])).contents }); pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.splice([pathToNode(parentDirOf(findRelativePath(nopts[0]))).contents.findIndex(obj => obj.name == fileOfPath(nopts[0]) && obj.type == pathToNode(findRelativePath(nopts[0])).type)], 1);} else {cmdOutput = doesExist(parentDirOf(findRelativePath(nopts[1])), 'directory').message;}} else {cmdOutput = doesExist(findRelativePath(nopts[0]), 'any').message;}"
                },
                {
                    "name": "js",
                    "type": "file",
                    "contents": "cmdOutput = eval(args.join(' '));"
                }
            ]
        },
        {
            "name": "run",
            "type": "directory",
            "contents": [
                {
                    "name": "hub",
                    "type": "file",
                    "contents": "<!DOCTYPE html><html><head>    <style>        body {            margin: 0;        }        header {            background-color: dimgray;            top: 0;            width: 100%;            height: 10vh;            position: fixed;            display: flex;        }        h1 {            margin: 3vh;            font-size: 4vh;            font-family: 'Courier New', Courier, monospace;        }        img {            height: 6vh;            margin: 2vh;        }        main {            background-color: whitesmoke;            bottom: 0;            width: 100%;            height: 90vh;            position: fixed;            font-size: 2vh;        }        #container {            margin: 2vh;            border: black 2px solid;            border-radius: 10px;            height: 80vh;            padding: 2vh;            text-align: justify;            width: calc(80vw - 8vh);            float: right;        }        #menu {            height: 80vh;            border: black 2px double;            border-radius: 10px;            width: calc(20vw - 8vh);            position: fixed;            margin: 2vh;            padding: 2vh;        }        .menuopt {            width: 100%;            height: 14.6%;            border: black 2px double;            border-radius: 10px;            margin-bottom: 2vh;            background: lightgray;            transition: background 0.3s ease;            font-family: 'Courier New', Courier, monospace;            font-size: calc(1vw + 1vh);        }        .menuopt:hover {            background: gray;            transition: background 0.3s ease;        }        .appBtn {            width: 120%;            height: 6vhpx;            display: flex;            align-items: center;            user-select: none;            cursor: pointer;            border: black 1px solid;            border-radius: 10px;            font-size: 2.5vh;            background-color: white;        }        .appBtn:hover {            background-color: lightgray;        }        table {            border: black 1px solid;            border-collapse: collapse;            max-width: 50vw;            max-height: 40vh;        }        table td,        th {            border: black 1px solid;            margin: 0;            padding: 5px;        }        .actionBtn {            border: black 2px double;            border-radius: 10px;            margin-bottom: 2vh;            background: lightgray;            transition: background 0.3s ease;            font-family: 'Courier New', Courier, monospace;            font-size: calc(1vw + 1vh);        }        .actionBtn:hover {            background: gray;            transition: background 0.3s ease;            cursor: pointer;        }        .actionBtn:hover[disabled=''] {            transition: none;            background: lightgray;            cursor: not-allowed;        }        td>input[type='checkbox'] {            position: relative;            width: 2vh;            height: 2vh;        }    </style></head><body>    <header><img src='javascript-os.png' alt='JSOS'>        <h1>JavaScriptOS Hub</h1>    </header>    <main>        <div id='menu'> <button class='menuopt'>WELCOME</button> <button class='menuopt'>HOW TO USE</button> <button                class='menuopt'>APPLICATIONS</button> <button class='menuopt'></button> <button                class='menuopt'>SYSTEM</button> <button class='menuopt'>SETTINGS</button> </div>        <div id='container'>            <div id='welcome-div' class='scrdiv'> Thank you for installing <b>JavaScriptOS</b>! <br><br>                <b>JavaScriptOS</b> is an operating system simulator made to simulate a user-friendly operating system                inside your browser. No files are required to use <b>JavaScriptOS</b>, all you need is a browser!                <br><br> Similarly to all famous operating systems, <b>JavaScriptOS</b> has started with a CLI. (Command                Line Interface) Fortunately, we were able to upgrade it to a familiar and user-friendly environment. We                have been able to make it widely customizable because it is designed with html and css, but it is ran by                Javascript.            </div>            <div id='applications-div' class='scrdiv'> </div>            <div id='system-div' class='scrdiv'>                <h1>System</h1>                <div>                    <h2>Filesystem Statistics</h2>                    <table class='stats'>                        <thead>                            <th>Type</th>                            <th>Value</th>                        </thead>                        <tbody>                            <tr>                                <td>Files</td>                                <td id='stats-files'></td>                            </tr>                            <tr>                                <td>Directories</td>                                <td id='stats-dirs'></td>                            </tr>                            <tr>                                <td>Allocated</td>                                <td id='stats-allocated'></td>                            </tr>                            <tr>                                <td>Total Depth</td>                                <td id='stats-depth'></td>                            </tr>                        </tbody>                    </table>                    <div id='external-fs-actions'>                        <h2>External Filesystem Actions</h2>                        <button class='actionBtn' onclick='importFs();'>Import</button>                        <button class='actionBtn' onclick='exportFs();'>Export</button>                    </div>                    <h2>Repair Filesystem Errors</h2>                    <button class='actionBtn' id='scan-only'>SCAN</button>                    <button class='actionBtn' id='scan-repair' disabled>REPAIR</button>                    <i id='scan-status'></i>                    <table id='scan-result'>                        <thead>                            <th>File</th>                            <th>Description</th>                        </thead>                        <tbody>                        </tbody>                    </table>                </div>            </div>            <div id='settings-div' class='scrdiv'>                <h1>Settings</h1>                <h2>Application permissions</h2>                <table id='app-permissions'>                    <thead>                        <th>Application</th>                        <th>Filesystem</th>                        <th>Manage applications</th>                    </thead>                    <tbody>                    </tbody>                </table>                <button id='save-app-permissions' disabled>Save Changes</button>            </div>        </div>    </main>    <\script>        function oneTimeHandshake(event) {            if (typeof (event.data.body) == 'string' && event.data.body.endsWith('.html')) {                Array.from(document.getElementsByTagName('img')).forEach(item => {                    item.src = `${event.data.body.split('/').slice(0, -1).join('/')}/${item.src}`;                });            }        }        window.parent.postMessage({ method: 'HANDSHAKE', token: window.token }, '*');        window.addEventListener('message', oneTimeHandshake);        let menuopts = document.getElementsByClassName('menuopt');        for (var i = 0; i < menuopts.length; i++) {            menuopts[i].addEventListener('click', (event) => {                let divs = document.querySelector('#container').getElementsByClassName('scrdiv');                for (var i = 0; i < divs.length; i++) {                    divs[i].style.display = 'none';                } document.getElementById(`${event.target.innerHTML.toLowerCase()}-div`).style.display = 'inline-block';            });        }        let divs = document.querySelector('#container').getElementsByClassName('scrdiv');        for (var i = 0; i < divs.length; i++) {            divs[i].style.display = 'none';        }        document.getElementById('welcome-div').style.display = 'inline-block';        document.getElementById('applications-div').innerHTML = Apps.map(obj => `<div class='appBtn' ${obj.run == '/run/hub' ? 'disabled' : ''}                     id='${JSON.stringify(obj)}'><img src='${obj.icon}'>                     <div style='display: grid;'><b>${obj.name}</b><i>(${obj.run})</i></div>                 </div>`).join('<br>');        let appBtns = document.getElementsByClassName('appBtn');        for (var i = 0; i < appBtns.length; i++) {            appBtns[i].addEventListener('click', (event) => {                let appBtn = event.currentTarget;                let appObj = JSON.parse(appBtn.id);                window.parent.postMessage({ type: 'request', method: 'open', value: appObj, token: window.token }, '*');            });        }        function countFiles(jsonData) {            let totalFiles = 0;            function traverse(directory) {                for (const item of directory.contents) {                    if (item.type === 'file') {                        totalFiles++;                    } else if (item.type === 'directory') {                        traverse(item);                    }                }            }            traverse(jsonData);            return totalFiles;        }        function countDirectories(jsonData) {            let totalDirectories = 0;            function traverse(directory) {                for (const item of directory.contents) {                    if (item.type === 'directory') {                        totalDirectories++;                        traverse(item);                    }                }            }            traverse(jsonData);            return totalDirectories;        }        function calculateDepth(jsonData) {            function traverse(directory, currentDepth) {                let maxDepth = currentDepth;                for (const item of directory.contents) {                    if (item.type === 'directory') {                        const depth = traverse(item, currentDepth + 1);                        maxDepth = Math.max(maxDepth, depth);                    }                }                return maxDepth;            }            return traverse(jsonData, 0);        }        function calculateStorage(jsonData) {            let totalStorage = 0;            function traverse(directory) {                for (const item of directory.contents) {                    if (item.type === 'file') {                        totalStorage += item.contents.length;                    } else if (item.type === 'directory') {                        traverse(item);                    }                }            }            traverse(jsonData);            return totalStorage;        }        function formatBytes(bytes) {            if (bytes === 0) return '0 Bytes';            const k = 1024;            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];            const i = Math.floor(Math.log(bytes) / Math.log(k));            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];        }        document.getElementById('stats-files').textContent = countFiles(fs);        document.getElementById('stats-dirs').textContent = countDirectories(fs);        document.getElementById('stats-depth').textContent = calculateDepth(fs);        document.getElementById('stats-allocated').textContent = formatBytes(calculateStorage(fs));        function nodeToPath(node) {            let path = [];            while (node.parent) {                path.unshift(node.name);                node = node.parent;            }            return path.join('/');        }        function exportFs() {            var download = document.createElement('a');            download.a = 'filesystem.json';            download.href = `data:application/json;${JSON.stringify(fs)}`;            download.click();        }        function importFs() {            let fileInput = document.createElement('input');            fileInput.type = 'file';            fileInput.accept = '.json';            fileInput.click();            fileInput.onchange = function () {                const file = fileInput.files[0];                if (!file) {                    return;                }                const reader = new FileReader();                reader.onload = function (event) {                    const content = event.target.result;                    try {                        const jsonData = JSON.parse(content);                        window.parent.postMessage({ type: 'request', method: 'update', var: 'fs', value: jsonData, token: window.token }, '*');                        window.onmessage = function (event) {                            if (event.data === true) {                                window.alert('Successfuly updated filesystem');                            }                            else {                                window.alert('Could not update filesystem. Check application permissions?');                            }                        }                    } catch (error) {                        window.alert('Error parsing JSON:', error, '. Keeping filesystem');                    }                };                reader.readAsText(file);            }        }        function scanFileSystem(statusElement) {            let fsClone = dirWParents(fs);            let badFileList = [];            function updateStatus(status) {                statusElement.innerText = `${status} [] (${badFileList.length} bad items found)`;            }            function scanfs(directory) {                let seenNames = new Set();                for (const item of directory.contents) {                    updateStatus('Scanning for item name conflicts...');                    if (seenNames.has(item.name)) {                        badFileList.push({ file: item, path: nodeToPath(item), reason: 'Duplicate directory name' });                    } else {                        seenNames.add(item.name);                    }                    ['/', '|', '$'].forEach(character => {                        if (item.name.includes(character)) {                            badFileList.push({ file: item, path: nodeToPath(item), reason: `Item name contains prohibited character: ${character}` });                        }                    });                    if (!item.name) {                        badFileList.push({ file: item, path: nodeToPath(item), reason: 'Item has no name' });                    }                    updateStatus('Scanning for item type conflicts...');                    if (item.type !== 'directory' && item.type !== 'file') {                        badFileList.push({ file: item, path: nodeToPath(item), reason: 'Item is neither file nor directory' });                    }                    updateStatus('Scanning for item structure conflicts...');                    if (item.type == 'directory' && typeof (item.contents) !== 'object') {                        badFileList.push({ file: item, path: nodeToPath(item), reason: 'Invalid directory structure' });                    }                    if (item.type == 'file' && typeof (item.contents) !== 'string') {                        badFileList.push({ file: item, path: nodeToPath(item), reason: 'Invalid file structure' });                    }                    if (item.type == 'directory') {                        scanfs(item);                    }                }            }            scanfs(fsClone);            return badFileList;        }        document.getElementById('scan-only').addEventListener('click', () => {            document.getElementById('scan-only').disabled = true;            let scanres = scanFileSystem(document.getElementById('scan-status'));            document.getElementById('scan-status').innerText = 'Scan finished. Results:';            let resultsTableBody = document.getElementById('scan-result').querySelector('tbody');            resultsTableBody.innerHTML = '';            scanres.forEach(fileRes => {                resultsTableBody.innerHTML += `<tr><td>${fileRes.path}</td><td>${fileRes.reason}</td></tr>`;            });            document.getElementById('scan-only').disabled = false;        });        document.getElementById('app-permissions').querySelector('tbody').innerHTML = Apps.map(app => `<tr><td>${app.name}</td><td><input id='${app.name}-fs-read' style='margin-left: 35%;' type='checkbox' ${(app.permissions.findIndex(permission => permission.name == 'fs') !== -1) ? 'checked' : ''}><input id='${app.name}-fs-write' type='checkbox' ${(app.permissions.findIndex(permission => permission.name == 'fs' && permission.write) !== -1) ? 'checked' : ''}></td><td><input class='${app.name}-Apps-read' style='margin-left: 35%;' type='checkbox' ${(app.permissions.findIndex(permission => permission.name == 'Apps') !== -1) ? 'checked' : ''}><input id='${app.name}-Apps-write' type='checkbox' ${(app.permissions.findIndex(permission => permission.name == 'Apps' && permission.write) !== -1) ? 'checked' : ''}></td></tr>`).join('');        var newPermissions = [];        Array.from(document.getElementById('app-permissions').getElementsByTagName('input')).forEach(input => { input.onchange = () => { if (!newPermissions.includes(input.id)) { newPermissions.push(input.id); document.getElementById('save-app-permissions').disabled = false; } else { newPermissions.splice(newPermissions.indexOf(input.id), 1); } } });        document.getElementById('save-app-permissions').onclick = () => {            newPermissions.forEach((permission) => {                let segments = permission.split('-');                let app = segments[0];                let permissionName = segments[1];                let permissionType = segments[2];            });        };    </\script></body></html>"
                },
                {
                    "name": "terminal",
                    "type": "file",
                    "contents": "<!DOCTYPE html><html><head> <meta http-equiv='CONTENT-TYPE' content='charset=UTF-8'> <link rel='icon' href='javascript-os.png'> <style> :hover { cursor: text; } body { background-color: black; color: white; font-family: 'Courier New', Courier, monospace, serif; font-size: 16px; overflow-y: auto; overflow-x: hidden; white-space: pre-line; } .input { outline: none; margin-left: 5px; color: white; } span { color: yellow; margin: 0; } .texteditor { width: 100vw; height: 100vh; border: none; background: none; outline: none; color: inherit; font: inherit; overflow-wrap: break-word; } </style>  <\script> var user = 'user'; var host = (window.location.host ? window.location.host : 'localhost'); var historyIndex = 0; var homedir = `/home/${user}`; var pwd = homedir; let history = []; var PATH = ['/js']; var inpstyle = 0; var fvars = [{ name: '~', value: 'homedir' }, { name: './', value: `pwd + '/'` }]; var aliases = []; function NewCommandLine() { const newline = document.createElement('span'); newline.className = 'input'; newline.contentEditable = 'true'; newline.addEventListener('keydown', function (event) { if (event.key === 'Enter') { event.preventDefault(); let commands = newline.innerText.split('&'); commands.forEach(command => { printOutput(HandleCommand(parseVars(command)), 'html'); }); if (history[history.length - 1] !== newline.innerText && newline.innerText) { history.push(newline.innerText); } NewCommandLine(); historyIndex = history.length; focuslastinp(); } else if (event.key === 'ArrowUp') { event.preventDefault(); surfhistory(historyIndex, -1) } else if (event.key === 'ArrowDown') { event.preventDefault(); surfhistory(historyIndex, 1); } }); const marker = document.createElement('label'); marker.innerHTML = inpstyle == 1 ? `┌──(<span>${user}@${host}</span>)─[${pwd.replace(homedir, '~')}]\\n└─<span>$</span>` : `<span>${user}@${host}</span>:${pwd.replace(homedir, '~')}<span>$</span>`; document.body.appendChild(marker); document.body.appendChild(newline); document.body.appendChild(document.createElement('br')); } function surfhistory(current, change) { if (history.length == 0) { return; } var inputs = document.getElementsByClassName('input'); const lastinput = inputs[inputs.length - 1]; if (change == -1) { if (current > 0) { historyIndex--; } else { historyIndex = 0; } } else { if (current < history.length - 1) { historyIndex++; } else { lastinput.innerText = ''; return; } } lastinput.innerText = history[historyIndex]; moveCursorToEnd(lastinput); } function focuslastinp() { var inputs = document.getElementsByClassName('input'); if (inputs.length == 0) { NewCommandLine(); } inputs = document.getElementsByClassName('input'); const lastinput = inputs[inputs.length - 1]; lastinput.focus(); moveCursorToEnd(lastinput); } function moveCursorToEnd(element) { var range = document.createRange(); var selection = window.getSelection(); range.selectNodeContents(element); range.collapse(false); selection.removeAllRanges(); selection.addRange(range); } function HandleCommand(command) { if (!command.trim()) { return ''; } let cmd; let args; if (command.includes('>')) { cmd = command.split('>')[0].trim().split(' ')[0]; args = command.split('>')[0].trim().split(' ').slice(1); } else { cmd = command.trim().split(' ')[0]; args = command.trim().split(' ').slice(1); } let opts = parseOpts(args); let nopts = []; args.forEach(arg => { if (opts.findIndex(obj => obj.opt == arg && !arg.startsWith('-')) !== -1) { nopts.push(arg); } }); console.log(opts); console.log(nopts); var cmdrun = ''; var cmdOutput = `${cmd}: command not found`; PATH.forEach(path => { if (doesExist(`${path}/${cmd}`, 'file').exists) { cmdOutput = ''; cmdrun = pathToNode(`${path}/${cmd}`).contents; return; } }); PATH.forEach(path => { if (aliases.findIndex(obj => obj.alias == cmd) !== -1) { if (doesExist(`${path}/${aliases[aliases.findIndex(obj => obj.alias == cmd)].ref}`, 'file').exists) { cmdOutput = ''; cmdrun = pathToNode(`${path}/${aliases[aliases.findIndex(obj => obj.alias == cmd)].ref}`).contents; } else { cmdOutput = `${aliases[aliases.findIndex(obj => obj.alias == cmd)].ref}:  command not found`; } return; } }); eval(cmdrun); if (command.includes('>')) { let targetfile = command.split('>')[1].trim(); if (command.includes('>>')) { targetfile = command.split('>')[2].trim(); console.log('>>'); if (doesExist(parentDirOf(findRelativePath(targetfile)), 'directory').exists) { if (doesExist(findRelativePath(targetfile), 'file').exists) { pathToNode(findRelativePath(targetfile)).contents += `\\n${cmdOutput}`; } else { pathToNode(parentDirOf(findRelativePath(targetfile))).contents.push({ name: fileOfPath(findRelativePath(targetfile)), type: 'file', contents: cmdOutput }); } } else { cmdOutput = doesExist(parentDirOf(findRelativePath(targetfile)), 'directory').message; } } else { if (doesExist(parentDirOf(findRelativePath(targetfile)), 'directory').exists) { if (doesExist(findRelativePath(targetfile), 'file').exists) { pathToNode(findRelativePath(targetfile)).contents = cmdOutput; } else { pathToNode(parentDirOf(findRelativePath(targetfile))).contents.push({ name: fileOfPath(findRelativePath(targetfile)), type: 'file', contents: cmdOutput }); } } else { cmdOutput = doesExist(parentDirOf(findRelativePath(targetfile)), 'directory').message; } } }; window.parent.postMessage({ token: window.token, method: 'UPDATE', value: 'fs', newvalue: fs }, '*'); return cmdOutput; } function parseVars(string) { let res = eval('`' + string.replace(/$(w+)/g, (match, varName) => (window.hasOwnProperty(varName) ? (eval(varName).includes(' ') ? `'${eval(varName)}'` : eval(varName)) : '')) + '`'); fvars.forEach(fvar => { res = res.replace(fvar.name, eval(fvar.value)); }); return res; } function printOutput(output) { const div = document.createElement('div'); div.innerHTML = output; div.innerHTML += '\\n\\n'; document.body.appendChild(div); } function parseOpts(args) { let res = []; args.forEach((arg, i) => { if (args[i].startsWith('-')) { if (args[i].startsWith('--')) { res.push({ opt: args[i], value: (args[i + 1] && !args[i + 1].startsWith('-') ? args[i + 1] : '') }) } else { if (args[i].slice(1).length > 1) { args[i].slice(1).split('').forEach(option => { res.push({ opt: `-${option}`, value: '' }); }) } else { res.push({ opt: args[i], value: (args[i + 1] ? args[i + 1] : '') }) } } } else if (i == 0 || !args[i - 1].startsWith('--')) { res.push({ opt: args[i], value: '' }) } }); return res; } function findRelativePath(path) { if (!path) { return pwd; } if (path == '/') { return '/'; } if (path.endsWith('/')) { path = path.slice(0, -1); } let res = (pwd == '/' ? pwd : path.startsWith('/') ? '' : pwd + '/') + path; const segments = res.split('/'); const stack = []; segments.forEach(segment => { if (segment === '..') { stack.pop(); } else if (segment !== '.' && segment !== '') { stack.push(segment); } }); res = '/' + stack.join('/'); if (res == '') { res = '/'; } return res; } function doesExist(file, type) { if (!file) { return { exists: false, message: 'Specify a file or directory' }; } if (file.endsWith('/') && file !== '/') { file = file.slice(0, -1); } if (!pathToNode(file)) { return { exists: false, message: `${file}: No such file or directory` }; } if (type !== 'file' && type !== 'directory') { return { exists: true, message: '' }; } if (type === eval(pathToNode(file)).type) { return { exists: true, message: '' }; } else if (type === 'file') { return { exists: false, message: `${file}: is a directory` }; } else { return { exists: false, message: `${file}: is not a directory` }; } }   <\/script></head><body></body> <\script> HandleCommand(parseVars('source ~/.jshrc')); NewCommandLine(); focuslastinp(); window.addEventListener('click', focuslastinp); document.body.spellcheck = false;  <\/script></html>"
                }
            ]
        },
        {
            "name": "home",
            "type": "directory",
            "contents": [
                {
                    "name": "user",
                    "type": "directory",
                    "contents": [
                        {
                            "name": ".jshrc",
                            "type": "file",
                            "contents": "inpstyle = 0; window.addEventListener('keydown', (event) => { if(event.ctrlKey && event.key === 'p') { event.preventDefault(); inpstyle = Math.abs(inpstyle - 1); ['label', 'span', 'br'].forEach(element => { Array.from(document.getElementsByTagName(element)).slice(-1)[0].remove(); }); NewCommandLine(); focuslastinp(); } });"
                        }
                    ]
                }
            ]
        }
    ]
};

// if (!confirm('Use default filesystem?')) {
//     let fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = '.json';
//     fileInput.click();
//     fileInput.onchange = function () {
//         const file = fileInput.files[0];
//         if (!file) {
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (event) {
//             const content = event.target.result;
//             try {
//                 const jsonData = JSON.parse(content);
//                 // Handle the JSON data here
//                 fs = jsonData;
//             } catch (error) {
//                 window.alert('Error parsing JSON:', error, '. Using the default filesystem');
//             }
//         };
//         reader.readAsText(file);
//     }
// }

function pathToNode(fullpath) {
    if (fullpath == '/') { return fs; }
    if (fullpath.endsWith('/')) { fullpath = fullpath.slice(0, -1); }
    var res = 'fs';
    var pathsegs = fullpath.split('/').slice(1);
    pathsegs.forEach((step, index) => {
        if (step.trim() == '') { res = 'undefined'; return; }
        if (step == '..') {
            if (index == 0) {
                res = 'undefined';
                return;
            }
            else {
                res = res.split('.').slice(0, -1).join('.');
            }
        }
        else {
            if (index == pathsegs.length - 1) {
                res += `.contents[${eval(res).contents.findIndex(obj => obj.name == step)}]`;
            }
            else {
                res += `.contents[${eval(res).contents.findIndex(obj => obj.name == step && obj.type == 'directory')}]`;
            }
        }
        if (eval(res) == undefined) { res = 'undefined'; return; }
    });
    return eval(res);
}

function parentDirOf(file) {
    return file.split("/").slice(0, -1).join("/") == "" ? "/" : file.split("/").slice(0, -1).join("/");
}

function fileOfPath(path) { let pathSegmentsLength = path.split('/').length; return path.split('/')[pathSegmentsLength - 1] }

function dirWParents(fs, parent = null) {
    // Deep clone the filesystem object
    let clonedFs = JSON.parse(JSON.stringify(fs));

    // Recursive function to add parent property
    function traverse(node, parentNode) {
        if (node.type === 'directory') {
            node.parent = parentNode;
            node.contents.forEach(item => traverse(item, node));
        } else if (node.type === 'file') {
            node.parent = parentNode;
        }
    }

    // Start traversal
    traverse(clonedFs, parent);
    return clonedFs;
}

function nodeToPath(node) {
    let pathComponents = [];
    while (node) {
        pathComponents.unshift(node.name);
        node = node.parent;
    }
    let fullPath = pathComponents.join('/');
    return fullPath;
}
