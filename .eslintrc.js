module.exports = {
  extends: [
    'antife',
    'prettier',
    'prettier/react',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    
  ],
  plugins: [
    
    'import',
    'react'
  ],
  env: {
    "browser": true
  },
  
  parser: 'babel-eslint',
  
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json']
      }
    },
    "polyfills": [
      // Example of marking entire API and all methods and properties as polyfilled
      "Promise",
      "fetch"
    ]
  },
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'no-unused-vars': 'error',
    
    'import/newline-after-import': 'error',
    'import/default': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
