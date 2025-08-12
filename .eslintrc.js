module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off"
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    tailwindcss: {
      // Default configuration, you can customize according to your needs
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      // If you are using Shadcn components, you might want to add their classes to the whitelist
    },
  },
};