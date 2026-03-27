import { Router, Request, Response } from 'express';
import { JobStore } from '../utils/job-store';
import { logger } from '../utils/logger';

export const jobsRouter = Router();
const jobStore = new JobStore();

jobsRouter.get('/:jobId', async (req: Request, res: Response) => {
  try {
    const job = await jobStore.get(req.params.jobId);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    return res.json(job);
  } catch (err) {
    logger.error('Job fetch failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});
