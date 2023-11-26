module.exports = {
    root: true, // no more eslint config search above this
    globals: {
        React: true,
        process: 'readonly',
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        commonjs: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', '.'],
                    ['@/*', './*'],
                ],
            },
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    ignorePatterns: ['tio-*'],
    rules: {
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
            },
        ],
        eqeqeq: 'warn',
        'react/prop-types': 'off',
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['global', 'jsx'],
            },
        ],
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            plugins: [
                '@typescript-eslint',
                '@typescript-eslint/internal',
                'deprecation',
                'eslint-comments',
                'eslint-plugin',
                'import',
                'jest',
                'simple-import-sort',
            ],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
                tsconfigRootDir: process.cwd(),
            },
            rules: {
                'no-console': ['warn', { allow: ['warn', 'error'] }],
                'no-param-reassign': 'error',

                // Prevent TypeScript-specific constructs from being erroneously flagged as unused
                // Note: you must disable the base rule as it can report incorrect errors
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        vars: 'all', // all | local
                        // varsIgnorePattern: '^_+$',
                        args: 'all', // all | after-used | none
                        argsIgnorePattern: '^_+$',
                    },
                ],
                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': 'warn',

                '@typescript-eslint/ban-types': 'warn',
                '@typescript-eslint/restrict-plus-operands': 'warn',
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/restrict-template-expressions': 'warn',

                'react/prop-types': 'off',
                'react/no-unknown-property': [
                    'error',
                    {
                        ignore: ['global'],
                    },
                ],

                // Require PascalCased class and interface names
                // '@typescript-eslint/class-name-casing'      : 'error',
                // Require a specific member delimiter style for interfaces and type literals
                // Default Semicolon style
                '@typescript-eslint/member-delimiter-style': 'error',
                // Require a consistent member declaration order
                // '@typescript-eslint/member-ordering'        : 'error',
                // Require consistent spacing around type annotations
                '@typescript-eslint/type-annotation-spacing': 'error',
                eqeqeq: 'error',
                '@typescript-eslint/restrict-plus-operands': 'warn',
                '@typescript-eslint/no-empty-interface': 'off',
                'max-len': ['warn', { code: 200 }],
                '@typescript-eslint/explicit-function-return-type': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        functions: false,
                        classes: true,
                        variables: true,
                        typedefs: true,
                    },
                ],
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/await-thenable': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/require-await': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/member-ordering': 'off',
                '@typescript-eslint/no-misused-promises': [
                    'error',
                    {
                        checksVoidReturn: false,
                    },
                ],
            },
        },
    ],
};
