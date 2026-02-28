import { defineField, defineType } from 'sanity';

export const articleSchema = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',

  // Preview in the article list: show title + category pill + hero image
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      const labels: Record<string, string> = {
        nieuws: 'Nieuws',
        reviews: 'Reviews',
        games: 'Games',
        tech: 'Tech',
        hardware: 'Hardware',
        video: 'Video',
      };
      return {
        title: title ?? 'Naamloos artikel',
        subtitle: labels[subtitle] ?? subtitle,
        media,
      };
    },
  },

  fields: [
    // ── Core ──────────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        // Auto-generate Dutch-friendly slugs
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/[àáâäæãåā]/g, 'a')
            .replace(/[èéêëēėę]/g, 'e')
            .replace(/[îïíīįì]/g, 'i')
            .replace(/[ôöòóœøōõ]/g, 'o')
            .replace(/[ûüùúū]/g, 'u')
            .replace(/[ñń]/g, 'n')
            .replace(/[ç]/g, 'c')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Samenvatting',
      description: 'Korte introductie — verschijnt in artikelkaarten en als lead-paragraph op de artikelpagina.',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),

    // ── Content ──────────────────────────────────────────────────────────
    defineField({
      name: 'content',
      title: 'Inhoud',
      description: 'Gebruik H2 voor secties, vetgedrukt voor nadruk, afbeeldingen voor inline visuals.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normaal', value: 'normal' },
            { title: 'Koptekst H2', value: 'h2' },
            { title: 'Koptekst H3', value: 'h3' },
            { title: 'Citaat', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Vet', value: 'strong' },
              { title: 'Cursief', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Nieuw tabblad openen',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        // Inline images within the article body
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt-tekst (SEO)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bijschrift',
            },
          ],
        },
      ],
    }),

    // ── Media ────────────────────────────────────────────────────────────
    defineField({
      name: 'mainImage',
      title: 'Hoofdafbeelding',
      description: 'Hero-afbeelding voor de artikelpagina en artikelkaarten. Aanbevolen formaat: 16:9.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-tekst (SEO)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ── Classification ──────────────────────────────────────────────────
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Nieuws',    value: 'nieuws' },
          { title: 'Reviews',  value: 'reviews' },
          { title: 'Games',    value: 'games' },
          { title: 'Tech',     value: 'tech' },
          { title: 'Hardware', value: 'hardware' },
          { title: 'Video',    value: 'video' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Authorship & timing ──────────────────────────────────────────────
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Gameinside Redactie',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publicatiedatum',
      type: 'datetime',
      options: { dateFormat: 'DD-MM-YYYY', timeFormat: 'HH:mm' },
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'readTime',
      title: 'Leestijd (minuten)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(60),
    }),

    // ── Flags ────────────────────────────────────────────────────────────
    defineField({
      name: 'featured',
      title: 'Uitgelicht op homepage',
      description: 'Markeert dit artikel als het hoofdartikel in de hero-sectie.',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  // Field order in the Studio editor
  groups: [
    { name: 'content',  title: 'Inhoud',      default: true },
    { name: 'media',    title: 'Media' },
    { name: 'meta',     title: 'Metadata' },
    { name: 'settings', title: 'Instellingen' },
  ],

  orderings: [
    {
      title: 'Nieuwste eerst',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Oudste eerst',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
});
