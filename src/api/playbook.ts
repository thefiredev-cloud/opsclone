import { Router, Request, Response } from 'express';
import { JobStore } from '../utils/job-store';
import { PlaybookGenerator } from '../output/playbook-generator';
import { logger } from '../utils/logger';

export const playbookRouter = Router();
const jobStore = new JobStore();

playbookRouter.get('/:jobId', async (req: Request, res: Response) => {
  try {
    const job = await jobStore.get(req.params.jobId);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.status !== 'complete') return res.status(202).json({ status: job.status });

    const format = (req.query.format as string) || 'json';
    const generator = new PlaybookGenerator();
    const playbook = await generator.generate(job.result, format);

    return res.json(playbook);
  } catch (err) {
    logger.error('Playbook fetch failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});
