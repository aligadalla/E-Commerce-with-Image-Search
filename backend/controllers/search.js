const { spawn } = require('child_process');

exports.imageSearch = (req, res, next) => {
    const image_path = req.body.image_path;
    
    const python = spawn('python', [__dirname + '/../scripts/image_search.py']);
    
    python.stdin.write(JSON.stringify({ image_path }));
    python.stdin.end();

    let data = '';
    python.stdout.on('data', (chunk) => {
        data += chunk;
    });

    python.stderr.on('data', (chunk) => {
        console.error(`Python error: ${chunk}`);
    });

    python.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({ error: "Python script failed" });
        }
        res.status(200).json(JSON.parse(data));
    });
};