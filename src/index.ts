import express from 'express';
import dotenv from 'dotenv';
import { analyzeRouter } from './api/analyze';
import { jobsRouter } from './api/jobs';
import { playbookRouter } from './api/playbook';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get('/health', (_, res) => res.json({ status: 'ok', service: 'opsclone' }));

// API routes
app.use('/v1/analyze', analyzeRouter);
app.use('/v1/jobs', jobsRouter);
app.use('/v1/playbook', playbookRouter);

app.listen(PORT, () => {
  logger.info(`OpsClone API running on port ${PORT}`);
});

export default app;
