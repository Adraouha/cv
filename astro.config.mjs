import { defineConfig } from 'astro/config';

// https://astro.build/config

// `base` se saca de la variable ASTRO_BASE si está definida.
// En GitHub Actions disponemos de GITHUB_REPOSITORY (owner/repo),
// así que por defecto cuando es el CI, el `base` será `/${repoName}/`.
const base = process.env.ASTRO_BASE || (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/');

export default defineConfig({
  base,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr", "ar"],
    routing: {
        prefixDefaultLocale: false
    }
  }
})