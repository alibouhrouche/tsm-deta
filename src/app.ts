import express from 'express'
const app = express()

app.get('/', async (req, res) => {
    res.send('Hello World')
});

export const viteNodeApp = app;
export default app