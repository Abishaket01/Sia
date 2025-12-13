import type { LogMessage } from '@sia/models';

export interface ExecResult {
  exitCode: number;
  stdout: string;
  stderr: string;
}

/**
 * Common interface for both container-based and local execution
 */
export interface IExecutionManager {
  /**
   * Ensure the execution environment is ready (container running or workspace created)
   */
  ensureWorkspaceReady?(): Promise<void>;

  /**
   * Ensure container is running (for ContainerManager)
   */
  ensureContainerRunning?(): Promise<void>;

  /**
   * Execute a command and return the result
   */
  execInContainer(
    command: string | string[],
    workDir?: string
  ): Promise<ExecResult>;

  /**
   * Execute a command and stream output as log messages
   */
  execStreamInContainer(
    command: string | string[],
    workDir?: string,
    jobId?: string,
    stage?: string
  ): AsyncGenerator<LogMessage>;

  /**
   * Stop/cleanup the execution environment
   */
  stopContainer(): Promise<void>;
}
