/**
 * @description sleep for a number of milliseconds
 * @return default {Promise<void>}
 * @param milliseconds {number} milliseconds
 */
export async function sleep(milliseconds: number): Promise<void> {
  await new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}
