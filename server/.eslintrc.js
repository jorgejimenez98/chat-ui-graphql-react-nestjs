module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "camelcase": "off",
    "indent": ['error', 2],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "complexity": ["error", 12],
    "semi": [2, "never"],
    "max-len": ["error", { "code": 120, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-multi-spaces': ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'complexity': ['error', 20],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
};
