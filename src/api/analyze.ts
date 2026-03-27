import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { PipelineOrchestrator } from '../pipelines/orchestrator';
import { logger } from '../utils/logger';

export const analyzeRouter = Router();

const AnalyzeRequestSchema = z.object({
  target: z.string().min(1),
  pipelines: z.array(z.enum(['maps', 'linkedin', 'edgar', 'vendors', 'ads', 'tech', 'regulatory', 'all'])).default(['all']),
  output_format: z.enum(['playbook', 'report', 'json']).default('playbook'),
  webhook_url: z.string().url().optional(),
});

analyzeRouter.post('/', async (req: Request, res: Response) => {
  try {
    const parsed = AnalyzeRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request', details: parsed.error.issues });
    }

    const { target, pipelines, output_format, webhook_url } = parsed.data;
    const orchestrator = new PipelineOrchestrator();
    const job = await orchestrator.enqueue({ target, pipelines, output_format, webhook_url });

    return res.status(202).json({
      job_id: job.id,
      status: 'queued',
      estimated_completion: job.estimatedCompletion,
      polling_url: `${process.env.API_BASE_URL}/v1/jobs/${job.id}`,
    });
  } catch (err) {
    logger.error('Analyze request failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});
