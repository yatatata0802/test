// 日本語テキストの自然な改行処理（簡略化版）
export function smartBreakJapanese(text: string): string {
  // シンプルに改行文字を<br/>に変換
  return text.replace(/\n/g, '<br/>');
}