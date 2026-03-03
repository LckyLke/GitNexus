import { describe, it, expect } from 'vitest';
import { loadParser, loadLanguage } from '../../src/core/tree-sitter/parser-loader.js';
import { SupportedLanguages } from '../../src/config/supported-languages.js';

describe('parser-loader', () => {
  describe('loadParser', () => {
    it('returns a Parser instance', async () => {
      const parser = await loadParser();
      expect(parser).toBeDefined();
      expect(typeof parser.parse).toBe('function');
    });

    it('returns the same singleton instance', async () => {
      const parser1 = await loadParser();
      const parser2 = await loadParser();
      expect(parser1).toBe(parser2);
    });
  });

  describe('loadLanguage', () => {
    it('loads TypeScript language', async () => {
      expect(await loadLanguage(SupportedLanguages.TypeScript)).toBe(true);
    });

    it('loads JavaScript language', async () => {
      expect(await loadLanguage(SupportedLanguages.JavaScript)).toBe(true);
    });

    it('loads Python language', async () => {
      expect(await loadLanguage(SupportedLanguages.Python)).toBe(true);
    });

    it('loads Java language', async () => {
      expect(await loadLanguage(SupportedLanguages.Java)).toBe(true);
    });

    it('loads C language', async () => {
      expect(await loadLanguage(SupportedLanguages.C)).toBe(true);
    });

    it('loads C++ language', async () => {
      expect(await loadLanguage(SupportedLanguages.CPlusPlus)).toBe(true);
    });

    it('loads C# language', async () => {
      expect(await loadLanguage(SupportedLanguages.CSharp)).toBe(true);
    });

    it('loads Go language', async () => {
      expect(await loadLanguage(SupportedLanguages.Go)).toBe(true);
    });

    it('loads Rust language', async () => {
      expect(await loadLanguage(SupportedLanguages.Rust)).toBe(true);
    });

    it('loads PHP language', async () => {
      expect(await loadLanguage(SupportedLanguages.PHP)).toBe(true);
    });

    it('loads TSX grammar for .tsx files', async () => {
      expect(await loadLanguage(SupportedLanguages.TypeScript, 'Component.tsx')).toBe(true);
    });

    it('loads TS grammar for .ts files', async () => {
      expect(await loadLanguage(SupportedLanguages.TypeScript, 'utils.ts')).toBe(true);
    });

    it('returns false for unsupported language', async () => {
      const result = await loadLanguage('ruby' as SupportedLanguages);
      expect(result).toBe(false);
    });
  });

  describe('Swift optional dependency', () => {
    it('handles Swift loading gracefully', async () => {
      const result = await loadLanguage(SupportedLanguages.Swift);
      // Returns true if tree-sitter-swift is installed, false otherwise
      expect(typeof result).toBe('boolean');
    });
  });
});
