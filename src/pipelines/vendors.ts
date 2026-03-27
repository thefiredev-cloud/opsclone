/**
 * Pipeline: data collection for target business.
 */

export interface PipelineResult {
  raw: unknown;
  normalized: Record<string, unknown>;
  confidence: number;
}

export class Pipeline {
  async run(target: string): Promise<PipelineResult> {
    // TODO: Implement data collection
    throw new Error('Not implemented');
  }
}
